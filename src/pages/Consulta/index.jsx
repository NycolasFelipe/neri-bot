import { 
  Button, 
  FormControl, 
  FormHelperText, 
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
  Progress, 
  Radio, 
  RadioGroup, 
  Text, 
  useDisclosure
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateDiff from 'date-diff';
import * as C from './styles';


function Consulta() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState({
    informacoes: true,
    historico: false,
    sintomas: false,
  })
  const [startDate, setStartDate] = useState(new Date());
  const todayDate = new Date();
  const idade = new DateDiff(todayDate, startDate).years();

  const userInfo = {
    informations: {
      fullname: null,
      birthdate: null,
      gender: null,
    }
  }

  function setNewStatus(nextStatus) {
    let newStatus = JSON.parse(JSON.stringify(status));
    for (let item in newStatus) {
      if (item != nextStatus) newStatus[item] = false;
      else newStatus[item] = true;
    }
    setStatus(newStatus);
  }

  function handleNextButton(stage) {
    switch(stage) {
      case 'informations':
        userInfo.informations.fullname = document.getElementById('fullName').value;
        userInfo.informations.birthdate = JSON.stringify(startDate);
        let values = document.getElementsByName('gender');
        for (let i = 0; i < values.length ; i++) {
          if (values[i].checked) 
            userInfo.informations.gender = values[i].value;  
        }
        setNewStatus('historico');
      break;
    }
    console.log(userInfo)
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
            <FormLabel htmlFor='fullName'>Nome completo</FormLabel>
            <Input id='fullName' type='text' autoComplete='off' required={true} />
            <FormLabel>Data de nascimento</FormLabel>
            <C.CampoNascimento>
              <DataPicker 
                id='birthDate'
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
            <RadioGroup id='gender' defaultValue='masc'>
              <HStack spacing='24px'>
                <Radio name='gender' value='masc'>Masculino</Radio>
                <Radio name='gender' value='fem'>Feminino</Radio>
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
              onClick={() => handleNextButton('informations')}
            >
              Prosseguir
            </Button>
          </FormControl>
        </C.CampoInformacoes>
        <C.CampoHistorico show={status.historico}>
        </C.CampoHistorico>
        <C.CampoSintomas show={status.sintomas}>sintomas</C.CampoSintomas>
      </C.Campos>
    </C.Main>
  );
}

export default Consulta;