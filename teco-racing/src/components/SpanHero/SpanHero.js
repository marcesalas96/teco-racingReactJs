import './_spanHero.scss'
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa'

export const SpanHero = ({ titulo1, titulo2, ruta }) => {
    return (
        <div className='spanHero'>
            <h3 className='spanHero__tituloArriba'>{titulo1}</h3>
            <div className='spanHero__contenedor'>
                <Link to={`/${ruta}`} className="spanHero__contenedor__link">
                    <h3 className='spanHero__contenedor__tituloAdentro'>{titulo2}</h3>
                    <span className='spanHero__contenedor__tituloAdentro__span'>VER MAS <FaPlay/></span>
                </Link>
                <a className='spanHero__contenedor__btn__link' href='https://api.whatsapp.com/send?phone=5493874685040&text= Hola, quiero mas informacion por favor!' target={"_blank"} rel="noreferrer">
                    <button className='spanHero__contenedor__btn'> CONTACTANOS!</button>
                </a>
            </div>
        </div>
    )
}