import './_galleryDiv.scss'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const GalleryDiv = () => {
    return (
        <div className='galeria__contenedor'>
            <Link to={'/fotos/torneoEduardoTruffaFecha3'} className="galeria__contenedor__principal link__galeria" >
                {/* <div className='galeria__contenedor__principal'> */}
                    <img className='galeria__contenedor__principal__img' src='../images/torneoET3/finalTorneo.png' loading='lazy' />
                    <div className='galeria__contenedor__principal__texto'>
                        <h4 className='galeria__contenedor__principal__titulo'>TORNEO EDUARDO TRUFFA FINAL</h4>
                        <span className='galeria__contenedor__principal__span'>VER TODAS <FaPlay className='galeria__contenedor__principal__svg' /></span>
                    {/* </div> */}
                </div>
            </Link>
            <Link to={'/fotos/torneoEduardoTruffaFecha2'} className="galeria__contenedor__div4 link__galeria">
                {/* <div className='galeria__contenedor__div4'> */}
                    <img className='galeria__contenedor__div4__img' src='../images/torneoET2/ET16.jpeg' loading='lazy' />
                    <div className='galeria__contenedor__principal__texto'>
                        <h6 className='galeria__contenedor__principal__titulo'>TORNEO EDUARDO TRUFFA FECHA 2</h6>
                        <p className='galeria__contenedor__principal__span'>VER MAS <FaPlay className='galeria__contenedor__principal__svg' /></p>
                    </div>
                {/* </div> */}
            </Link>
            <Link to={'/fotos/torneoEduardoTruffaFecha1'} className="galeria__contenedor__div3 link__galeria" >
                {/* <div className='galeria__contenedor__div3'> */}
                    <img className='galeria__contenedor__div3__img' src='../images/torneoET1/ET3.jpeg' loading='lazy' />
                    <div className='galeria__contenedor__principal__texto'>
                        <h6 className='galeria__contenedor__principal__titulo'>TORNEO EDUARDO TRUFFA FECHA 1</h6>
                        <p className='galeria__contenedor__principal__span'>VER MAS <FaPlay className='galeria__contenedor__principal__svg' /></p>
                    </div>
                {/* </div> */}
            </Link>
            <Link to={'/fotos/torneoCentroConvenciones'} className="galeria__contenedor__div2 link__galeria">
                {/* <div className='galeria__contenedor__div2'> */}
                    <img className='galeria__contenedor__div4__img' src='../images/torneoCentroConve/torneoCC (8).jpeg' loading='lazy' />
                    <div className='galeria__contenedor__principal__texto'>
                        <h6 className='galeria__contenedor__principal__titulo'>CENTRO DE CONVENCIONES</h6>
                        <p className='galeria__contenedor__principal__span'>VER MAS <FaPlay className='galeria__contenedor__principal__svg' /></p>
                    </div>
                {/* </div> */}
            </Link>
            <Link to={'/fotos/entrenamientos'} className="galeria__contenedor__div5 link__galeria">
                {/* <div className='galeria__contenedor__div5'> */}
                    <img className='galeria__contenedor__div5__img' src='../images/entrenamientos/entrenamiento5.jpeg' loading='lazy' />
                    <div className='galeria__contenedor__principal__texto'>
                        <h5 className='galeria__contenedor__principal__titulo'>ENTRENAMIENTOS</h5>
                        <span className='galeria__contenedor__principal__span'>VER MAS <FaPlay className='galeria__contenedor__principal__svg' /></span>
                    </div>
                {/* </div> */}
            </Link>
        </div>
    )
}