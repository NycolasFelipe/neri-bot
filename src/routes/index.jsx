import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Informacoes from '../pages/Informacoes';
import Consulta from '../pages/Consulta';
import Resultados from '../pages/Resultados';
import Analise from '../pages/Analise';
import Sobre from '../pages/Sobre';

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/informacoes-usuario' element={<Informacoes />} />
          <Route exact path='/consulta' element={<Consulta />} />
          <Route exact path='/resultados' element={<Resultados />} />
          <Route exact path='/resultados/analise' element={<Analise />} />
          <Route exact path='/sobre' element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp;