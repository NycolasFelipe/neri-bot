import * as C from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Input, 
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack
} from '@chakra-ui/react';

import { 
  EmailIcon,
  ViewIcon,
  ViewOffIcon,
  LockIcon,
  ChevronRightIcon,
  ArrowForwardIcon
} from '@chakra-ui/icons';



function Home() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleSignUp() {
    navigate('/menu');
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
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<EmailIcon />}
              color='#4e8fc5'
            />
            <Input placeholder='E-mail' size='md' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<LockIcon />}
              color='#4e8fc5'
            />
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Senha'
            />
            <InputRightElement width='3rem'>
              <Button size='sm' onClick={() => setShow((prevState) => !prevState)} color='#4e8fc5'>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Link><ChevronRightIcon />Esqueceu a sua senha?</Link>

          <Button 
            rightIcon={<ArrowForwardIcon />} 
            size='lg' 
            width='100%' 
            backgroundColor='#25B24A' 
            color='#fff'
            onClick={handleSignUp}
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