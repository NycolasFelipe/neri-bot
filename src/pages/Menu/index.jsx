import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Menu() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      if (email === defaultEmail && password === defaultPassword) 
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
       <Modal 
        blockScrollOnMount={false} 
        isOpen={isOpen} 
        onClose={onClose} 
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent marginTop='15%'>
          <ModalHeader color='#4E8FC5'>Tem certeza que deseja sair?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb='1rem'>
              Você será desconectado de sua conta.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Continuar
            </Button>
            <Button variant='ghost' onClick={handleSignOut}>Sair</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            onClick={onOpen}
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