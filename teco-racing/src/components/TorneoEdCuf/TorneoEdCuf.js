import './_torneoEdCuf.scss'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


export const TorneoEdCuff = () => {
    const [fecha, setFecha] = useState(1)
    return (
        <>
            <section className='color1'>
                <div className='contenedorDeTodito'>
                    <div className='torneo'>
                        <SuperiorBar h3={"TORNEO EDUARDO TRUFFA"} className={"superiorBar"} estado={false} />
                        <div className={fecha === 1 ? "nextRaces__carreraActual" : "nextRaces__carreraActual-siguiente"} onClick={() => { setFecha(1) }}>
                            <h5 className="nextRaces__carreraActual__fecha fecha">FECHA 1</h5>
                            <h5 className="nextRaces__carreraActual__h5">06 AGO</h5>
                        </div>
                        <div className="torneo__eTruffa">
                            {
                                fecha === 1 &&
                                <img src='../images/resultados/PuntuacionFecha1.jpeg' className='torneo__eTruffa__img' alt='' />
                            }
                            {
                                fecha === 2 &&

                                <img src='../images/resultados/posicionesFecha2.png' className='torneo__eTruffa__img2' alt='' />
                            }
                            {
                                fecha === 3 &&
                                <img src='../images/resultados/posicionesFecha3.png' className='torneo__eTruffa__img3' alt='' />
                            }
                            {
                                fecha === 4 &&
                                <><img src='../images/resultados/totalAcumulado.jpeg' className='torneo__eTruffa__img' alt='' /> </>
                            }
                        </div>
                        <div className={fecha === 2 ? "nextRaces__siguienteCarrera-actual" : "nextRaces__siguienteCarrera"} onClick={() => { setFecha(2) }}>
                            <h5 className="nextRaces__siguienteCarrera__fecha">FECHA 2</h5>
                            <h5 className="nextRaces__siguienteCarrera__h5">03 SEPT</h5>
                        </div>
                        <div className={fecha === 3 ? "nextRaces__siguienteCarrera3-actual" : "nextRaces__siguienteCarrera3"} onClick={() => { setFecha(3) }}>
                            <h5 className="nextRaces__siguienteCarrera__fecha">FECHA 3</h5>
                            <h5 className="nextRaces__siguienteCarrera__h5">01 OCT</h5>
                        </div>
                        <div className={fecha === 4 ? "nextRaces__siguienteCarrera4-actual" : "nextRaces__siguienteCarrera4"} onClick={() => { setFecha(4) }}>
                            <h5 className="nextRaces__siguienteCarrera__fecha">TABLA GENERAL</h5>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='hr'></hr>
            <section className='color1'>
                <div className='contenedorDeTodito'>
                    <div className='torneo__unicaFecha'>
                        <SuperiorBar h3={"TORNEO CENTRO DE CONVENCIONES"} className={"superiorBar"} estado={false} />
                        <div className="nextRaces__carreraActual siguiente">
                            <h5 className="nextRaces__carreraActual__fecha fecha">UNICA FECHA</h5>
                            <h5 className="nextRaces__carreraActual__h5">26 MAR</h5>
                        </div>
                        <div className="torneo__eTruffa">
                            <img src='../images/resultados/PosicionesCC.png' className='torneo__eTruffa__img' alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}