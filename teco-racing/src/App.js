import { Header } from './components/Header/Header'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Torneos } from './components/Torneos/Torneos'
import { Fotos } from './components/Fotos/Fotos';
import { Escuela } from './components/Escuela/Escuela';
import { Nosotros } from './components/Nosotros/Nosotros';
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/torneos' element={<Torneos/>}/>
          <Route path='/fotos' element= {<Fotos/>}/ >
          <Route path='/escuela' element = {<Escuela/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
