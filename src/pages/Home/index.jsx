import * as C from './styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormHelperText,
  Input, 
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from '@chakra-ui/react';
import { 
  EmailIcon,
  ViewIcon,
  ViewOffIcon,
  LockIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';


function Home() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const defaultEmail = "usuario@mail.com";
  const defaultPassword = "senha1234";

  useEffect(() => {
    handleLoginSession();
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    emailInput.addEventListener('keypress', enterKey);
    passwordInput.addEventListener('keypress', enterKey);
  }, []);

  function handleSignIn() {
    if (!email || !password) {
      setError('Você precisa preencher todos os campos.');
      return;
    } 
    if (email !== defaultEmail || password !== defaultPassword) {
      setError('Senha ou e-mail incorretos.');
      return;
    }
    const userData = {
      email: email,
      password: password,
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/menu');
  }

  function handleLoginSession() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      let { email } = userData;
      let { password } = userData;
      if (email === defaultEmail && password === defaultPassword)
        navigate('/menu');
    }
  }

  function enterKey(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('signInButton').click();
    }
  }

  return (
    <C.Main>
      <C.ContainerLeft />
      <C.ContainerRight>
        <C.Header>
          <C.HeaderTitle>
            <C.Title>Neri</C.Title>
            <C.Subtitle>bot</C.Subtitle>
          </C.HeaderTitle>
          <C.HeaderDescription>
            O seu assistente para consulta médica
          </C.HeaderDescription>
        </C.Header>
        <C.LoginSection>
          <FormControl isInvalid={email === ''}>
            <InputGroup style={{flexDirection: 'column'}}>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon />}
                color='#4e8fc5'
              />
              <Input 
                placeholder='E-mail' 
                size='md' 
                onChange={(e) => setEmail(e.target.value)}
                id='emailInput'
              />
              {email === '' && (
                <FormHelperText>E-mail é necessário.</FormHelperText>
              )}
            </InputGroup>
          </FormControl>
          <FormControl isInvalid={password === ''}>
            <InputGroup style={{flexDirection: 'column'}}>
              <InputLeftElement
                pointerEvents='none'
                children={<LockIcon />}
                color='#4e8fc5'
              />
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
                id='passwordInput'
              />
              {password === '' && (
                <FormHelperText>Senha é necessária</FormHelperText>
              )}
              <InputRightElement width='3rem'>
                <Button size='sm' onClick={() => setShow((prevState) => !prevState)} color='#4e8fc5'>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Link><ChevronRightIcon />Esqueceu a sua senha?</Link>
          <C.ErrorMessage>{error}</C.ErrorMessage>
          <Button 
            rightIcon={<ArrowForwardIcon />} 
            size='lg' 
            width='100%' 
            backgroundColor='#25B24A' 
            color='#fff'
            onClick={handleSignIn}
            id='signInButton'
          >
            Entrar
          </Button>

          <Link className='criar-conta'>Não possui conta? Crie uma agora</Link>
        </C.LoginSection>
      </C.ContainerRight>
    </C.Main>
  )
}

export default Home;