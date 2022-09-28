import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import './_tituloFotos.scss'


export const TituloFotos = ({titulo}) => {

    return (
        <div className='titulo__contenedor'>
            <Link to={'/fotos'} className="titulo__contenedor__link"> <FaArrowLeft /> <span>VOLVER</span></Link>
            <h1 className='titulo__contenedor__titulo'>{titulo}</h1>
        </div>

    )
} 