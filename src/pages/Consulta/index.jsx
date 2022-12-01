import { 
  Button, 
  Checkbox, 
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
  const [reportEnded, setReportEnded] = useState(false);
  const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const informacoes = Object.assign(userInfoLocalStorage.informacoes);

  const [status, setStatus] = useState({
    informacoes: true,
    historico: false,
    sintomas: false,
  });

  const [userReport, setUserReport] = useState({
    historico: {
      familiarDoencaGenetica: null,
      hipertensao: null,
      diabetes: null,
      fumanteTabagismo: null,
      doencasRenais: null,
      usoRegularMedicamentos: null,
    },
    sintomas: {
      febre: null,
      dorDeCabeca: null,
      doresMusculares: null,
      tosse: null,
      cansaco: null,
      febre: null,
      nausea: null,
      diarreia: null,
      perdaDeApetite: null,
      gargantaInflamada: null,
      coriza: null,
    },
    report: {
      date: null,
    }
  });
  
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
      if (item[i].checked) return item[i].value === "sim";
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
        let usoRegularMedicamentos = historicoValido('usoRegularMedicamentos');

        if (
          familiarDoencaGenetica === null ||
          hipertensao === null ||
          diabetes === null ||
          fumanteTabagismo === null ||
          doencasRenais === null ||
          usoRegularMedicamentos === null
        ) {
          return setError('Você precisa selecionar pelos menos uma opção em cada item.');
        }

        userReport.historico.familiarDoencaGenetica = familiarDoencaGenetica;
        userReport.historico.hipertensao = hipertensao;
        userReport.historico.diabetes = diabetes;
        userReport.historico.fumanteTabagismo = fumanteTabagismo;
        userReport.historico.doencasRenais = doencasRenais;
        userReport.historico.usoRegularMedicamentos = usoRegularMedicamentos;
        break;

      case 'finalizar':
        let febre = document.getElementById('febre').checked;
        let dorDeCabeca = document.getElementById('dorDeCabeca').checked;
        let doresMusculares = document.getElementById('doresMusculares').checked;
        let tosse = document.getElementById('tosse').checked;
        let cansaco = document.getElementById('cansaco').checked;
        let nausea = document.getElementById('nausea').checked;
        let diarreia = document.getElementById('diarreia').checked;
        let perdaDeApetite = document.getElementById('perdaDeApetite').checked;
        let gargantaInflamada = document.getElementById('gargantaInflamada').checked;
        let coriza = document.getElementById('coriza').checked;

        userReport.sintomas.febre = febre;
        userReport.sintomas.dorDeCabeca = dorDeCabeca;
        userReport.sintomas.doresMusculares = doresMusculares;
        userReport.sintomas.tosse = tosse;
        userReport.sintomas.cansaco = cansaco;
        userReport.sintomas.nausea = nausea;
        userReport.sintomas.diarreia = diarreia;
        userReport.sintomas.perdaDeApetite = perdaDeApetite;
        userReport.sintomas.gargantaInflamada = gargantaInflamada;
        userReport.sintomas.coriza = coriza;

        let date = new Date();
        userReport.report.date = date;

        localStorage.setItem('userReport', JSON.stringify(userReport));
        setReportEnded(true);
        break;

      default:
        break;
    }
    setError(null);
    setNewStatus(nextStage);
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
        <Button 
          onClick={() => reportEnded ? navigate('/menu') : onOpen()} 
          leftIcon={<ArrowBackIcon />} 
          colorScheme='whiteAlpha' 
          variant='outline'
        >
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
                Confirmar
              </Button>
            </C.FormButtons>
        </C.CampoInformacoes>
        <C.CampoHistorico show={status.historico}>
          <C.CampoHistoricoHeader>
            <C.CampoHistoricoTitle style={{border: 'none'}}>
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
                width='75px'
                direction='row'
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
                width='75px'
                direction='row'
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
                width='75px'
                direction='row'
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
                width='75px'
                direction='row'
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
                width='75px'
                direction='row'
              >
                <Radio name='doencasRenais' value='sim' />
                <Radio name='doencasRenais' value='nao' />
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
                width='75px'
                direction='row'
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
          <C.CampoSintomasHeader>
            <C.CampoSintomasTitle style={{border: 'none'}}>
              Sintomas
            </C.CampoSintomasTitle>
            <C.CampoSintomasText>Sim</C.CampoSintomasText>
          </C.CampoSintomasHeader>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Febre
            </C.CampoSintomasTitle>
            <Checkbox id='febre' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Dor de cabeça
            </C.CampoSintomasTitle>
            <Checkbox id='dorDeCabeca' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Dores musculares
            </C.CampoSintomasTitle>
            <Checkbox id='doresMusculares' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Tosse
            </C.CampoSintomasTitle>
            <Checkbox id='tosse' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Cansaço
            </C.CampoSintomasTitle>
            <Checkbox id='cansaco' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Náusea
            </C.CampoSintomasTitle>
            <Checkbox id='nausea' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Diarréia
            </C.CampoSintomasTitle>
            <Checkbox id='diarreia' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Perda de apetite
            </C.CampoSintomasTitle>
            <Checkbox id='perdaDeApetite' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Garganta Inflamada
            </C.CampoSintomasTitle>
            <Checkbox id='gargantaInflamada' />
          </C.CampoSintomasItem>
          <C.CampoSintomasItem>
            <C.CampoSintomasTitle>
              Coriza
            </C.CampoSintomasTitle>
            <Checkbox id='coriza' />
          </C.CampoSintomasItem>
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
                onClick={() => handleNextButton('finalizar')}
              >
                Finalizar consulta
              </Button>
            </C.FormButtons>
          </FormControl>
        </C.CampoSintomas>
        <C.CampoResultado show={reportEnded}>
          <C.CampoResultadoHeader>
            Você terminou a sua consulta.
          </C.CampoResultadoHeader>
          <Button size='lg' onClick={() => navigate('/resultados')}>
            Conferir análise
          </Button>
        </C.CampoResultado>
        <C.ErrorMessage >
          {error && error}
        </C.ErrorMessage>
      </C.Campos>
      {
        !reportEnded && (
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
        )
      }
    </C.Main>
  );
}

export default Consulta;