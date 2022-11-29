import { 
  Button, 
  FormControl, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Radio, 
  RadioGroup, 
  Stack, 
  Text,  
  useDisclosure
} from '@chakra-ui/react';
import { 
  ArrowBackIcon, 
  ArrowForwardIcon, 
  ArrowRightIcon, 
  EditIcon
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as C from './styles';


function Consulta() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(null);
  const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const informacoes = Object.assign(userInfoLocalStorage.informacoes);

  const [status, setStatus] = useState({
    informacoes: true,
    historico: false,
    sintomas: false,
  });

  const [userInfo, setUserInfo] = useState({
    historico: {
      familiarDoencaGenetica: null,
      hipertensao: null,
      diabetes: null,
      fumanteTabagismo: null,
      doencasRenais: null,
      gestante: null,
      usoRegularMedicamentos: null,
    }
  })
  
  function setNewStatus(nextStatus) {
    let newStatus = JSON.parse(JSON.stringify(status));
    for (let item in newStatus) {
      if (item !== nextStatus) newStatus[item] = false;
      else newStatus[item] = true;
    }
    setError(null)
    setStatus(newStatus);
  }

  function historicoValido(historico) {
    let item = document.getElementsByName(historico);
    for (let i = 0; i < item.length; i++) {
      if (item[i].checked) return item[i].value;
    }
    return null;
  }

  function handleNextButton(nextStage) {
    switch(nextStage) {
      case 'sintomas':
        let familiarDoencaGenetica = historicoValido('familiarDoencaGenetica');
        let hipertensao = historicoValido('hipertensao');
        let diabetes = historicoValido('diabetes');
        let fumanteTabagismo = historicoValido('fumanteTabagismo');
        let doencasRenais = historicoValido('doencasRenais');
        let gestante = historicoValido('gestante');
        let usoRegularMedicamentos = historicoValido('usoRegularMedicamentos');

        if (
          !familiarDoencaGenetica ||
          !hipertensao ||
          !diabetes ||
          !fumanteTabagismo ||
          !doencasRenais ||
          !gestante ||
          !usoRegularMedicamentos
        ) {
          return setError('Você precisa selecionar pelos menos uma opção em cada item.');
        }

        userInfo.historico.familiarDoencaGenetica = familiarDoencaGenetica;
        userInfo.historico.hipertensao = hipertensao;
        userInfo.historico.diabetes = diabetes;
        userInfo.historico.fumanteTabagismo = fumanteTabagismo;
        userInfo.historico.doencasRenais = doencasRenais;
        userInfo.historico.gestante = gestante;
        userInfo.historico.usoRegularMedicamentos = usoRegularMedicamentos;
        break;

      default:
        break;
    }
    setError(null);
    setNewStatus(nextStage);
    console.log(userInfo);
  }

  function handleEditarDados() {
    navigate('/informacoes-usuario');
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
        <ModalContent marginTop='15%'>
          <ModalHeader color='#4E8FC5'>Deseja mesmo sair?</ModalHeader>
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
        <Button onClick={onOpen} leftIcon={<ArrowBackIcon />} colorScheme='whiteAlpha' variant='outline'>
          Sair
        </Button>
        <C.HeaderTitle>Nova Consulta</C.HeaderTitle>
        <Text>Por favor, preencha os dados a seguir.</Text>
      </C.Header>
      <C.Campos>
        <C.CampoInformacoes show={status.informacoes}>
          <C.CampoInformacoesItem>
            <C.CampoInformacoesTitle>Nome Completo</C.CampoInformacoesTitle>
            <C.CampoInformacoesValue>{informacoes.nomeCompleto}</C.CampoInformacoesValue>
          </C.CampoInformacoesItem>
          <C.CampoInformacoesItem>
            <C.CampoInformacoesTitle>Data de Nascimento</C.CampoInformacoesTitle>
            <C.CampoInformacoesValue>{informacoes.dataNascimento}</C.CampoInformacoesValue>
          </C.CampoInformacoesItem>
          <C.CampoInformacoesItem>
            <C.CampoInformacoesTitle>Altura</C.CampoInformacoesTitle>
            <C.CampoInformacoesValue>{informacoes.altura} cm</C.CampoInformacoesValue>
          </C.CampoInformacoesItem>
          <C.CampoInformacoesItem>
            <C.CampoInformacoesTitle>Peso</C.CampoInformacoesTitle>
            <C.CampoInformacoesValue>{informacoes.peso} kg</C.CampoInformacoesValue>
          </C.CampoInformacoesItem>
          <C.CampoInformacoesItem>
            <C.CampoInformacoesTitle>Sexo</C.CampoInformacoesTitle>
            <C.CampoInformacoesValue>{informacoes.sexo === "masc" ? "Masculino" : "Feminino"}</C.CampoInformacoesValue>
          </C.CampoInformacoesItem>
          {
            informacoes.sexo === "fem" && (
              <C.CampoInformacoesItem>
                <C.CampoInformacoesTitle>Gestante</C.CampoInformacoesTitle>
                <C.CampoInformacoesValue>{informacoes.gestante === "sim" ? "Sim" : "Não"}</C.CampoInformacoesValue>
              </C.CampoInformacoesItem>
            )
          }
          <C.FormButtons>
              <Button
                size='lg'
                onClick={() => handleEditarDados()}
                rightIcon={<EditIcon />}
              >
                Editar
              </Button>
              <Button 
                id='nextInformacoes'
                className='nextButton'
                rightIcon={<ArrowForwardIcon />} 
                size='lg'
                backgroundColor='#25B24A' 
                color='#fff'
                onClick={() => handleNextButton('historico')}
              >
                Confirmar e prosseguir
              </Button>
            </C.FormButtons>
        </C.CampoInformacoes>
        <C.CampoHistorico show={status.historico}>
          <C.CampoHistoricoHeader>
            <C.CampoHistoricoTitle>
              Histórico de saúde
            </C.CampoHistoricoTitle>
            <C.CampoHistoricoText>Sim</C.CampoHistoricoText>
            <C.CampoHistoricoText>Não</C.CampoHistoricoText>
          </C.CampoHistoricoHeader>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Familiar com doença genética
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='familiarDoencaGenetica' value='sim'></Radio>
                <Radio name='familiarDoencaGenetica' value='nao'></Radio>
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Hipertensão
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='hipertensao' value='sim' />
                <Radio name='hipertensao' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Diabetes
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='diabetes' value='sim' />
                <Radio name='diabetes' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Fumante/Tabagismo
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='fumanteTabagismo' value='sim' />
                <Radio name='fumanteTabagismo' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Doenças renais crônicas
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='doencasRenais' value='sim' />
                <Radio name='doencasRenais' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Gestante
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='gestante' value='sim' />
                <Radio name='gestante' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
          <C.CampoHistoricoItem>
            <C.CampoHistoricoTitle>
              Faz uso regular de medicamentos
            </C.CampoHistoricoTitle>
            <RadioGroup>
              <Stack 
                justifyContent='space-between' 
                width='115px'
                direction='row'
                paddingTop='6px'
              >
                <Radio name='usoRegularMedicamentos' value='sim' />
                <Radio name='usoRegularMedicamentos' value='nao' />
              </Stack>
            </RadioGroup>
          </C.CampoHistoricoItem>
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
      <C.Status>
        <C.StatusItem colorItem={status.informacoes || status.historico || status.sintomas}>
          <Text>Informações</Text>
        </C.StatusItem>
        <C.StatusItem colorItem={status.historico || status.sintomas}>
          <ArrowRightIcon />
          <Text>Histórico</Text>
        </C.StatusItem>
        <C.StatusItem colorItem={status.sintomas}>
          <ArrowRightIcon />
          <Text>Sintomas</Text>
        </C.StatusItem>
      </C.Status>
    </C.Main>
  );
}

export default Consulta;