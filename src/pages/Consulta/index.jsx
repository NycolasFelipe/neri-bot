import { 
  Button, 
  FormControl, 
  FormLabel, 
  HStack, 
  Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Radio, 
  RadioGroup, 
  Select, 
  Text, 
  useDisclosure
} from '@chakra-ui/react';
import { 
  ArrowBackIcon, 
  ArrowForwardIcon, 
  ArrowRightIcon, 
  ChevronDownIcon 
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateDiff from 'date-diff';
import * as C from './styles';


function Consulta() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(null);

  const [status, setStatus] = useState({
    informacoes: true,
    historico: false,
    sintomas: false,
  });

  const [userInfo, setUserInfo] = useState({
    informacoes: {
      nomeCompleto: null,
      dataNascimento: null,
      sexo: null,
    },
    historico: {
      fumante: null,
      familiar: null,
      usoMedicamentos: null,
    }
  })

  const [startDate, setStartDate] = useState(new Date());
  const todayDate = new Date();
  const idade = new DateDiff(todayDate, startDate).years();
  
  function setNewStatus(nextStatus) {
    let newStatus = JSON.parse(JSON.stringify(status));
    for (let item in newStatus) {
      if (item !== nextStatus) newStatus[item] = false;
      else newStatus[item] = true;
    }
    setError(null)
    setStatus(newStatus);
  }

  function handleNextButton(nextStage) {
    switch(nextStage) {
      case 'historico':
        if (!document.getElementById('nomeCompleto').value) {
          setError('Você precisa preencher com seu nome completo.');
          return;
        }
        userInfo.informacoes.nomeCompleto = document.getElementById('nomeCompleto').value;
        userInfo.informacoes.dataNascimento = JSON.stringify(startDate);
        let values = document.getElementsByName('sexo');
        for (let i = 0; i < values.length ; i++) {
          if (values[i].checked) 
            userInfo.informacoes.sexo = values[i].value;  
        }
      break;

      case 'sintomas':
        if (
          !document.getElementById('historicoFumante').value ||
          !document.getElementById('historicoFamiliar').value ||
          !document.getElementById('historicoUsoMedicamentos').value
        ) {
          setError('Você precisa pelos menos uma opção em cada item.');
          return;
        }
        userInfo.historico.fumante = 
          document.getElementById('historicoFumante').value;
        userInfo.historico.familiar = 
          document.getElementById('historicoFamiliar').value;
        userInfo.historico.usoMedicamentos = 
          document.getElementById('historicoUsoMedicamentos').value;
        break;

      default:
        break;
    }
    setError(null);
    setNewStatus(nextStage);
    console.log(userInfo);
  }

  return (
    <C.Main>
       <Modal 
        blockScrollOnMount={false} 
        isOpen={isOpen} 
        onClose={onClose} 
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='#4E8FC5'>Cancelar consulta?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb='1rem'>
              Todos os dados serão preenchidos serão perdidos.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Continuar
            </Button>
            <Button variant='ghost' onClick={() => navigate('/menu')}>Sair</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <C.Header>
        <Button onClick={onOpen}><ArrowBackIcon /></Button>
        <Text>Por favor, preencha os dados a seguir.</Text>
      </C.Header>
      <C.Status>
        <C.StatusItem colorItem={status.informacoes}>
          <Text>Informações</Text>
        </C.StatusItem>
        <C.StatusItem colorItem={status.historico}>
          <ArrowRightIcon />
          <Text>Histórico</Text>
        </C.StatusItem>
        <C.StatusItem colorItem={status.sintomas}>
          <ArrowRightIcon />
          <Text>Sintomas</Text>
        </C.StatusItem>
      </C.Status>
      <C.Campos>
        <C.CampoInformacoes show={status.informacoes}>
          <FormControl>
            <FormLabel htmlFor='nomeCompleto'>Nome completo</FormLabel>
            <Input 
              id='nomeCompleto' 
              type='text' 
              autoComplete='off'
            />
            <FormLabel>Data de nascimento</FormLabel>
            <C.CampoNascimento>
              <DataPicker 
                id='dataNascimento'
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => date != null && setStartDate(date)}
                placeholderText="Insira uma data"
                required={true}
              />
              {idade > 0 && (
                <Text>{idade} anos</Text>
              )}
            </C.CampoNascimento>
            <FormLabel>Sexo</FormLabel>
            <RadioGroup id='sexo' defaultValue='masc'>
              <HStack spacing='24px'>
                <Radio name='sexo' value='masc'>Masculino</Radio>
                <Radio name='sexo' value='fem'>Feminino</Radio>
              </HStack>
            </RadioGroup>
            <Button 
              id='nextInformacoes'
              className='nextButton'
              rightIcon={<ArrowForwardIcon />} 
              size='lg' 
              width='100%' 
              backgroundColor='#25B24A' 
              color='#fff'
              onClick={() => handleNextButton('historico')}
            >
              Prosseguir
            </Button>
          </FormControl>
        </C.CampoInformacoes>
        <C.CampoHistorico show={status.historico}>
          <FormControl>
            <FormLabel htmlFor='historicoFumante'>É fumante?</FormLabel>
            <Select 
              id='historicoFumante' 
              placeholder='Selecione uma opção'
              defaultValue='nao'
              icon={<ChevronDownIcon />}
            >
              <option value='sim'>Sim</option>
              <option value='nao'>Não</option>
            </Select>
            <FormLabel htmlFor='historicoFamiliar'>
              Possui familiares com histórico de doenças?
            </FormLabel>
            <Select 
              id='historicoFamiliar' 
              placeholder='Selecione uma opção'
              defaultValue='nao'
            >
              <option value='sim'>Sim</option>
              <option value='nao'>Não</option>
            </Select>
            <FormLabel htmlFor='historicoUsoMedicamentos'>
              Faz uso regular de medicamentos?
            </FormLabel>
            <Select 
              id='historicoUsoMedicamentos' 
              placeholder='Selecione uma opção'
              defaultValue='nao'
            >
              <option value='sim'>Sim</option>
              <option value='nao'>Não</option>
            </Select>
            <C.FormButtons>
              <Button
                size='lg'
                onClick={() => setNewStatus('informacoes')}
              >
                <ArrowBackIcon />
              </Button>
              <Button 
                id='nextInformacoes'
                className='nextButton'
                rightIcon={<ArrowForwardIcon />} 
                size='lg' 
                backgroundColor='#25B24A' 
                color='#fff'
                onClick={() => handleNextButton('sintomas')}
              >
                Prosseguir
              </Button>
            </C.FormButtons>
          </FormControl>
        </C.CampoHistorico>
        <C.CampoSintomas show={status.sintomas}>
          <FormControl>
            <C.FormButtons>
              <Button
                size='lg'
                onClick={() => setNewStatus('historico')}
              >
                <ArrowBackIcon />
              </Button>
              <Button 
                id='nextInformacoes'
                className='nextButton'
                rightIcon={<ArrowForwardIcon />} 
                size='lg' 
                backgroundColor='#25B24A' 
                color='#fff'
                onClick={() => handleNextButton('sintomas')}
              >
                Finalizar consulta
              </Button>
            </C.FormButtons>
          </FormControl>
        </C.CampoSintomas>
        <C.ErrorMessage >
          {error && error}
        </C.ErrorMessage>
      </C.Campos>
    </C.Main>
  );
}

export default Consulta;