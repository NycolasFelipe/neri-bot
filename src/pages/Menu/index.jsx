import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Menu() {
  const navigate = useNavigate();

  useEffect(() => {
    handleLoginSession();
  }, []);

  function handleLoginSession() {
    const defaultEmail = "usuario@mail.com";
    const defaultPassword = "senha1234";
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      let { email } = userData;
      let { password } = userData;
      if (email == defaultEmail && password == defaultPassword) 
        return;
    }
    handleSignOut();
  }

  function handleSignOut() {
    localStorage.removeItem('userData');
    navigate('/');
  }

  return (
    <C.Container>
      <C.ContainerLeft>
        <C.ButtonCol>
          <Button 
            size='sm' 
            color='#4e8fc5'
            onClick={() => navigate('/consulta')}
          >
            Nova Consulta
          </Button>
          <Button 
            size='sm' 
            color='#4e8fc5'
          >
            Resultados
          </Button>
        </C.ButtonCol>
        <C.ButtonCol>
          <Button 
            size='sm' 
            color='#4e8fc5'
          >
            Sobre o aplicativo
          </Button>
          <Button 
            size='sm' 
            color='#4e8fc5'
            _hover={{ bg: "#f14747", color: "#fff" }}
            onClick={handleSignOut}
          >
            Sair
          <ChevronRightIcon />
          </Button>
        </C.ButtonCol>


       
      </C.ContainerLeft>
      <C.ContainerRight />
    </C.Container>
  );
}

export default Menu;