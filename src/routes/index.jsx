import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Consulta from '../pages/Consulta';
import Sobre from '../pages/Sobre';

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/consulta' element={<Consulta />} />
          <Route exact path='/sobre' element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp;