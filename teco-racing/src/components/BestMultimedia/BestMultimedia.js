import { Link } from 'react-router-dom'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'
import './BestMultimedia.scss'

export const BestMultimedia = () => {
    return (
        <section className='color2'>
            <div class="bestMultimedia">
                <SuperiorBar h3={"LAS MEJORES FOTOS"} className={"superiorBar-Blanco"} ruta={"fotos"} estado={true}/>
                <div className='bestMultimedia__multimedia'>
                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/escuelita/escuelita5(2).jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>NUESTROS ALUMNOS EN ACCION!</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/torneoET2/ET20.jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>FECHA 2 TORNEO EDUARDO TRUFFA</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img-entrenamiento' src='../images/entrenamientos/entrenamiento5.jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>NUESTROS ENTRENAMIENTOS</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/torneoET1/ET4.jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>FECHA 1 TORNEO EDUARDO TRUFFA</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}