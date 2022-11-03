import { Header } from './components/Header/Header'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Torneos } from './components/Torneos/Torneos'
import { Fotos } from './components/Fotos/Fotos';
import { Escuela } from './components/Escuela/Escuela';
import { Nosotros } from './components/Nosotros/Nosotros';
import { TorneoEt2 } from './components/torneoEduardoTruffaFecha2/TorneoET2';
import {TorneoEt1} from './components/TorneoET1/TorneoET1'
import {TorneoCC} from './components/TorneoCC/TorneoCC'
import {Entrenamiento} from './components/Entrenamientos/Entrenamientos'
import {TorneoEduardoTruffaFinal} from './components/TorneoEduardoTruffaFinal/torneoETF'
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
          <Route path='/fotos/torneoEduardoTruffaFinal'element={< TorneoEduardoTruffaFinal/>}/>
          <Route path='/fotos/torneoEduardoTruffaFecha2'element={<TorneoEt2/>}/>
          <Route path='/fotos/torneoEduardoTruffaFecha1'element={<TorneoEt1/>}/>
          <Route path='/fotos/torneoCentroConvenciones'element={<TorneoCC/>}/>
          <Route path='/fotos/entrenamientos'element={<Entrenamiento/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
