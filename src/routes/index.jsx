import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Consulta from '../pages/Consulta';

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/consulta' element={<Consulta />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp;