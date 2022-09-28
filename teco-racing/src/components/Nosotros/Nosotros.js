import './_nosotros.scss'
import { Sponsor } from '../Sponsors/Sponsors'
import { Footer } from '../Footer/Footer'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'

export const Nosotros = () => {
    return (
        <main className='main'>
            <section className='color2'>
                <h1 className='nosotros-tittle'>¿QUIENES SOMOS?</h1>
                <div className='nosotros__container'>
                    <div className='nosotros__container-1Parte'>
                        <img src='../images/carouselHero/alfredoEntrenamiento.jpeg' alt='' className='nosotros__container-1Parte__img' />
                        <p className='nosotros__container-1Parte__texto'>SOMOS UNA EMPRESA FAMILIAR DEDICADA A LA MEDICION DEPORTIVA DE CARRERAS DE PRESOSTATOS. </p>
                    </div>
                </div>
            </section>
            <section className='color1'>
                <div className='nosotros__container'>
                    <div className='escuela__contenedor__2Parte__divMultimedia2 '>
                        <SuperiorBar h3={"NUESTRAS HERRAMIENTAS"} className={"superiorBar"} estado={false} />
                        <div className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor'>
                            <img src='../images/nosotros/elTecoMovil.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img' />
                            <img src='../images/nosotros/campamento.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img-left' />
                            <img src='../images/nosotros/centroDeComputos.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img-left' />
                        </div>
                    </div>
                </div>
            </section>
            <Sponsor />
            <Footer />
        </main>
    )
}