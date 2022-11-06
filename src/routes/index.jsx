import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route exact path='/menu' element={<Menu />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesApp;