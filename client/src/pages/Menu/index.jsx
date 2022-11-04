import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import {
  Button,
} from '@chakra-ui/react';
import {
  ChevronRightIcon
} from '@chakra-ui/icons';

function Menu() {
  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
  }

  return (
    <C.Container>
      <C.ContainerLeft>
        <C.ButtonCol>
          <Button 
            size='sm' 
            color='#4e8fc5'
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