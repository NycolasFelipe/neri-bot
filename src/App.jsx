import RoutesApp from "./routes";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RoutesApp/>
    </ChakraProvider>
  )
}

export default App;
