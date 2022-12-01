import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function Resultados() {
  const navigate = useNavigate();
  const userReport = JSON.parse(localStorage.getItem('userReport'));
  const reportDate = new Date(userReport.report.date).toUTCString().split(' ');
  const date = handleDate(reportDate);

  function handleDate(value) {
    let diaSemana = value[0].slice(0, 3);
    let diaMes = value[1];
    let mes = value[2];
    let ano = value[3];
    let hora = value[4].slice(0, 5);

    switch(diaSemana) {
      case 'Mon': diaSemana = 'Segunda-feira';
        break;
      case 'Tue': diaSemana = 'Terça-feira';
        break;
      case 'Wed': diaSemana = 'Quarta-feira';
        break;
      case 'Thu': diaSemana = 'Quinta-feira';
        break;
      case 'Fri': diaSemana = 'Sexta-feira';
        break;
      case 'Sat': diaSemana = 'Sábado';
        break;
      case 'Sun': diaSemana = 'Domingo';
        break;
      default:
        break;
    }

    switch(mes) {
      case 'Jan': mes = 'Janeiro';
        break;
      case 'Feb': mes = 'Fevereiro';
        break;
      case 'Mar': mes = 'Março';
        break;
      case 'Apr': mes = 'Abril';
        break;
      case 'May': mes = 'Maio';
        break;
      case 'Jun': mes = 'Junho';
        break;
      case 'Jul': mes = 'Julho';
        break;
      case 'Aug': mes = 'Agosto';
        break;
      case 'Sep': mes = 'Setembro';
        break;
      case 'Oct': mes = 'Outubro';
        break;
      case 'Nov': mes = 'Novembro';
        break;
      case 'Dec': mes = 'Dezembro';
        break;
      default:
        break;
    }

    return {
      diaSemana: diaSemana.toLowerCase(),
      diaMes: diaMes,
      mes: mes,
      ano: ano,
      hora: hora,
    }
  }

  return (
    <C.Main>
      <C.Header>
        <Button 
          onClick={() => navigate('/menu')} 
          leftIcon={<ArrowBackIcon />} 
          colorScheme='whiteAlpha' 
          variant='outline'
        >
          Sair
        </Button>
        <C.HeaderTitle>Resultado análises</C.HeaderTitle>
      </C.Header>
      <C.Campos onClick={() => navigate('/resultados/analise')}>
        <C.CamposResultado>
          Consulta feita em {date.diaMes} de {date.mes} ({date.diaSemana}) às {date.hora}, em {date.ano}.
        </C.CamposResultado>
      </C.Campos>
    </C.Main>
  );
}

export default Resultados;