import { Link } from 'react-router-dom'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'
import './BestMultimedia.scss'

export const BestMultimedia = () => {
    return (
        <section className='color2'>
            <div class="bestMultimedia">
                <SuperiorBar h3={"LAS MEJORES FOTOS Y VIDEOS"} className={"superiorBar-Blanco"} ruta={"fotos"} estado={true}/>
                <div className='bestMultimedia__multimedia'>
                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/escuelita5.jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>NUESTROS ALUMNOS EN ACCION!</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/torneo4.jpeg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>FOTOS DEL ULTIMO TORNEO</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/fiat1500.jpg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>VIDEOS DEL ULTIMO TORNEO</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="bestMultimedia__multimedia__link__card">
                        <Link to={'/fotos'} className="bestMultimedia__multimedia__link">
                            <div className="bestMultimedia__multimedia__link__card__container">
                                <img className='bestMultimedia__multimedia__link__card__container__img' src='../images/tecoPuteando.jpg' alt='' />
                                <div className='bestMultimedia__multimedia__link__card__container__contenedor'>
                                    <span className='bestMultimedia__multimedia__link__card__container__contenedor__span'>VIDEOS DE NUESTRA ESCUELA</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}