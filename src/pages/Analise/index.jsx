import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

function Analise() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo')).informacoes;
  const userReport = JSON.parse(localStorage.getItem('userReport'));
  const historico = Object.entries(userReport.historico);
  const sintomas = Object.entries(userReport.sintomas);
  const resultado = calculaUrgencia(historico, sintomas);
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

  function handleHistorico(item) {
    let texto = '';
    switch(item) {
      case 'familiarDoencaGenetica':
        texto = 'Familiar com doença genética';
        break;
      case 'hipertensao':
        texto = 'Hipertensão';
        break;
      case 'diabetes':
        texto = 'Diabetes';
        break;
      case 'fumanteTabagismo':
        texto = 'Fumante/Tabagismo';
        break;
      case 'doencasRenais':
        texto = 'Doenças Renais';
        break;
      case 'usoRegularMedicamentos':
        texto = 'Faz uso regular de medicamentos';
        break;
      default:
        break;
    }
    return texto;
  }

  function handleSintomas(item) {
    let texto = '';
    switch(item) {
      case 'febre':
        texto = 'Febre';
        break;
      case 'dorDeCabeca':
        texto = 'Dor de cabeça';
        break;
      case 'doresMusculares':
        texto = 'Dores musculares';
        break;
      case 'tosse':
        texto = 'Tosse';
        break;
      case 'cansaco':
        texto = 'Cansaço';
        break;
      case 'nausea':
        texto = 'Náusea';
        break;
      case 'diarreia':
        texto = 'Diarréia';
        break;
      case 'perdaDeApetite':
        texto = 'Perda de apetite';
        break;
      case 'gargantaInflamada':
        texto = 'Garganta inflamada';
        break;
      case 'coriza':
        texto = 'Coriza';
        break;
      default:
        break;
    }
    return texto;
  }

  function calculaUrgencia(historico, sintomas) {
    let pontos = 0;
    let res = {
      urgencia: null,
      mensagem: null,
      cor: null,
    }

    for (let i = 0; i < historico.length; i++) {
      if (historico[i][1]) pontos += 2;
    }
    for (let i = 0; i < sintomas.length; i++) {
      if (sintomas[i][1]) pontos++;
    }

    if (pontos < 4) {
      res.urgencia = 'Não urgente';
      res.mensagem = 'Pode aguardar atendimento ou ser encaminhado para um serviço de saúde';
      res.cor = '#00a6e6';
    } else if (pontos < 7) {
      res.urgencia = 'Pouco urgente';
      res.mensagem = 'Pode aguardar atendimento ou ser encaminhado para um serviço de saúde';
      res.cor = '#02773b';
    } else if (pontos < 10) {
      res.urgencia = 'Urgente';
      res.mensagem = 'Necessita de atendimento o mais breve possível, mas pode aguardar se necessário.';
      res.cor = '#e9bf00';
    } else if (pontos < 13) {
      res.urgencia = 'Muito urgente';
      res.mensagem = 'Necessita de atendimento praticamente imediato.';
      res.cor = '#ee7d21';
    } else {
      res.urgencia = 'Emergência';
      res.mensagem = 'Necessita de atendimento imediato.';
      res.cor = '#bc151e';
    }

    return res;
  }

  return (
    <C.Main>
      <C.Header>
        <Button 
          onClick={() => navigate('/resultados')} 
          leftIcon={<ArrowBackIcon />} 
          colorScheme='whiteAlpha' 
          variant='outline'
        >
          Sair
        </Button>
      </C.Header>
      <C.Campos>
        <Text><strong>Paciente</strong>: {userInfo.nomeCompleto}</Text>
        <C.CampoTitle>Dados:</C.CampoTitle>
        <C.CampoTab>
          <Text>Data nascimento: {userInfo.dataNascimento}</Text>
          <Text>Sexo: {userInfo.sexo === "masc" ? 'masculino' : 'feminino'}</Text>
          {
            userInfo.sexo === "fem" && (
              <Text>Gestante: {userInfo.gestante}</Text>
            )
          }
        </C.CampoTab>

        <C.CampoTitle>Histórico de saúde:</C.CampoTitle>
        <C.CampoTab>
          {
            historico.map((e, i) => {
              return (
                e[1] && (
                  <Text key={i}>
                    {handleHistorico(e[0])}
                  </Text>
                )
              )
            })
          }
        </C.CampoTab>

        <C.CampoTitle>Sintomas:</C.CampoTitle>
        <C.CampoTab>
          {
            sintomas.map((e, i) => {
              return (
                e[1] && (
                  <Text key={i}>
                    {handleSintomas(e[0])}
                  </Text>
                )
              )
            })
          }
        </C.CampoTab>

        <C.CampoAnalise>
          <C.CampoColor color={resultado.cor}>
            <C.CampoTitle style={{textAlign: 'center'}}>
              Resultado da análise: {resultado.urgencia.toUpperCase()}
            </C.CampoTitle>
              <Text style={{textAlign: 'center'}}>{resultado.mensagem}</Text>
          </C.CampoColor>
            <C.CampoFooter>
              <Text style={{fontSize: '0.9rem'}}>
                Consulta feita em {date.diaMes} de {date.mes} ({date.diaSemana}) às {date.hora}, em {date.ano}.  
              </Text>
              <Text style={{fontSize: '0.8rem', paddingTop: '20px'}}>Realizado por <strong>NeriBot</strong></Text>
            </C.CampoFooter>
        </C.CampoAnalise>
      </C.Campos>
    </C.Main>
  );
}

export default Analise;