import './_escuela.scss'
import { Sponsor } from '../Sponsors/Sponsors'
import { Footer } from '../Footer/Footer'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'


export const Escuela = () => {
    return (
        <main className='main'>
            <section className='color1'>
                <h1 className='escuela-tittle'>NUESTRA ESCUELA</h1>
                <div className='escuela__contenedor'>
                    <div className='escuela__contenedor__1Parte'>
                        <video loading='lazy' autoPlay muted loop alt='' className='escuela__contenedor__1Parte__video'>
                            <source src='../videos/escuela1.mp4' type='video/mp4' />
                        </video>
                        <p className='escuela__contenedor__1Parte__texto'>
                            <strong>CREAMOS</strong> LA ESCUELA DE PILOTOS TECO RACING CON EL OBJETIVO DE QUE LOS MISMOS PUEDAN CREAR UN VINCULO CON SU AUTO Y ESTAR PREPARADOS PARA ASPIRAR A PRIMEROS PUESTOS TANTO A NIVEL PROVINCIAL COMO NACIONAL.
                        </p>
                    </div>
                    <div className='escuela__contenedor__2Parte'>
                        <div className='escuela__contenedor__2Parte__divMultimedia'>
                            <SuperiorBar h3={"ENTRENAMIENTO DURO, COMBATE FACIL"} className={"superiorBar"} estado={false} />

                            <img src='../images/escuelaSantiago.jpeg' className='escuela__contenedor__2Parte__divMultimedia__img1' alt='' />

                            <video loading='lazy' autoPlay muted loop alt='' className='escuela__contenedor__2Parte__divMultimedia__video'>
                                <source src='../videos/escuela2.mp4' type='video/mp4' />
                            </video>

                            <img src='../images/escuelita1.jpeg' className='escuela__contenedor__2Parte__divMultimedia__img2' alt='' />
                        </div>
                        <p className='escuela__contenedor__2Parte__texto'>
                            ENTRENAMOS LOS FINES DE SEMANA EN DISTINTAS UBICACIONES, DESDE PRUEBAS SENCILLAS HASTA PRUEBAS CON ALTOS NIVELES DE DIFICULTAD. NUESTRO LEMA ES ENTRENAMIENTO DURO COMBATE FACIL.
                        </p>
                    </div>

                </div>
            </section>
            <section className='color2'>
                <div className='escuela__contenedorBlanco'>
                    <div className='escuela__contenedor__2Parte__divMultimedia2 '>
                        <SuperiorBar h3={"Y LOS RESULTADOS LLEGAN"} className={"superiorBar-Blanco"} estado={false} />
                        <div className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor'>
                            <img src='../images/escuelita2.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img' />
                            <img src='../images/escuelita5.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img' />
                            <img src='../images/escuelita6.jpeg' alt='' className='escuela__contenedor__2Parte__divMultimedia2__imgContenedor__img' />
                        </div>
                    </div>
                </div>
            </section>
            <Sponsor />
            <Footer />
        </main>
    )
}