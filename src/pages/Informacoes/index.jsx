import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Text, useDisclosure } from '@chakra-ui/react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateDiff from 'date-diff';
import * as C from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

function Informacoes() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const todayDate = new Date();
  const idade = new DateDiff(todayDate, startDate).years();
  const [gestante, setGestante] = useState(false);

  const [userInfo, setUserInfo] = useState({
    informacoes: {
      nomeCompleto: null,
      dataNascimento: null,
      altura: null,
      peso: null,
      sexo: null,
      gestante: null,
      imc: null,
      idade: null,
    },
  });

  useEffect(() => loadInformacoes(), []);

  function opcaoValida(opcao) {
    let item = document.getElementsByName(opcao);
    for (let i = 0; i < item.length; i++) {
      if (item[i].checked) return item[i].value;
    }
    return null;
  }

  function handleFinalizarCadastro() {
    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let sexo = opcaoValida('sexo');
    let gestante = opcaoValida('gestante');

    if (
      !nomeCompleto ||
      !dataNascimento ||
      !altura ||
      !peso ||
      !sexo
    ) {
      return setError('Você precisa preencher todos os campos.');
    }

    userInfo.informacoes.nomeCompleto = nomeCompleto;
    userInfo.informacoes.dataNascimento = dataNascimento;
    userInfo.informacoes.altura = altura;
    userInfo.informacoes.peso = peso;
    userInfo.informacoes.sexo = sexo;
    userInfo.informacoes.gestante = gestante;
    userInfo.informacoes.imc = Math.round(parseInt(peso)/((parseInt(altura)/100)**2));
    userInfo.informacoes.idade = Math.floor(idade);

    setError(null);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    navigate('/menu');
  }

  function loadInformacoes() {
    const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfoLocalStorage) {
      const informacoes = Object.assign(userInfoLocalStorage.informacoes);
      document.getElementById('nomeCompleto').value = informacoes.nomeCompleto;
      document.getElementById('altura').value = informacoes.altura;
      document.getElementById('peso').value = informacoes.peso;

      if (informacoes.sexo === "fem") {
        document.getElementsByClassName('chakra-radio__control')[0].removeAttribute('data-checked');
        document.getElementsByClassName('chakra-radio__control')[1].setAttribute('data-checked', '');
        document.getElementsByClassName('chakra-radio__control')[1].click();
        document.activeElement.blur();
        setGestante(true);
      }
      
      if (informacoes.gestante === "sim") {
        document.getElementsByClassName('chakra-radio__control')[3].removeAttribute('data-checked');
        document.getElementsByClassName('chakra-radio__control')[2].setAttribute('data-checked', '');
        document.getElementsByClassName('chakra-radio__control')[2].click();
        document.activeElement.blur();
      }
    }
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
        <C.HeaderTitle>Dados e informações</C.HeaderTitle>
        <Text>Por favor, preencha os campos a seguir com suas informações.</Text>
      </C.Header>
      <C.Campos>
        <C.CampoInformacoes>
          <FormControl>
            <FormLabel htmlFor='nomeCompleto'>Nome completo</FormLabel>
            <Input 
              id='nomeCompleto' 
              type='text' 
              autoComplete='off'
              spellCheck='false'
              defaultValue=''
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
                <Text>{Math.floor(idade)} anos</Text>
              )}
            </C.CampoNascimento>

            <FormLabel htmlFor='altura'>Altura (em cm)</FormLabel>
            <Input 
              id='altura' 
              type='number' 
              autoComplete='off'
              defaultValue=''
            />

            <FormLabel htmlFor='altura'>Peso (em kg)</FormLabel>
            <Input 
              id='peso' 
              type='number' 
              autoComplete='off'
              defaultValue=''
            />

            <FormLabel>Sexo</FormLabel>
            <RadioGroup defaultValue='masc' onChange={() => setGestante((prevState) => !prevState)}>
              <HStack spacing='24px'>
                <Radio name='sexo' value='masc' size='sm'>Masculino</Radio>
                <Radio name='sexo' value='fem' size='sm'>Feminino</Radio>
              </HStack>
            </RadioGroup>

            <C.CampoGestante show={gestante}>
                <FormLabel paddingTop='16px'>Gestante</FormLabel>
                <RadioGroup defaultValue='nao'>
                  <HStack spacing='24px'>
                    <Radio name='gestante' value='sim' size='sm'>Sim</Radio>
                    <Radio name='gestante' value='nao' size='sm'>Não</Radio>
                  </HStack>
                </RadioGroup>
            </C.CampoGestante>

            

            <Button 
              id='nextInformacoes'
              className='nextButton'
              size='lg' 
              width='100%' 
              backgroundColor='#25B24A' 
              color='#fff'
              onClick={() => handleFinalizarCadastro()}
            >
              Finalizar cadastro
            </Button>
          </FormControl>
        </C.CampoInformacoes>
        <C.ErrorMessage >
          {error && error}
        </C.ErrorMessage>
      </C.Campos>
    </C.Main>
  );
}

export default Informacoes;