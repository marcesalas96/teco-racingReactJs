import './_races.scss'
import { CountdownSpan } from '../CountdownSpan/CountdownSpan'
import { useState } from 'react'
import { SuperiorBar } from '../SuperiorBar.js/SuperiorBar'

export const Races = () => {
    const [nextRace, setNextRace] = useState(false)
    return (
        <section className='color1'>
            <div className='contenedorDeTodito'>
                <audio autoPlay loop controls>
                    <source src='../musica/juntosALaPar.mp3' />
                </audio>
                <div className='nextRaces'>
                    <SuperiorBar h3={"TORNEOS"} className={"superiorBar"} ruta={"torneos"} estado={true} />
                    <div className={!nextRace ? "nextRaces__carreraActual" : "nextRaces__carreraActual siguiente"} onClick={() => { setNextRace(false) }}>
                        <h5 className="nextRaces__carreraActual__fecha fecha">OCT 01</h5>
                        <h5 className="nextRaces__carreraActual__h5">A DEFINIR</h5>
                    </div>
                    <div className="nextRaces__imagenGrande">
                        {!nextRace &&
                            <> <img src='../images/fecha3.jpeg' className='nextRaces__imagenGrande__img' alt='' /> <CountdownSpan fecha={'2022-10-01 15:00:00'} /> </>
                            // :
                            // <><img src='../images/fecha3.jpeg' className='nextRaces__imagenGrande__img' alt='' /><CountdownSpan fecha={'2022-10-01 15:00:00'} /></>
                        }
                    </div>
                    {/* <div className={nextRace ? "nextRaces__siguienteCarrera actual" : "nextRaces__siguienteCarrera"} onClick={() => { setNextRace(true) }}>
                    <h5 className="nextRaces__siguienteCarrera__fecha">OCT 01</h5>
                    <h5 className="nextRaces__siguienteCarrera__h5">PREDIO CACS</h5>
                </div> */}
                </div>
            </div>
        </section>
    )
}