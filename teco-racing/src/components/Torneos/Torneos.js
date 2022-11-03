import { Footer } from '../Footer/Footer'
import { Sponsor } from '../Sponsors/Sponsors'
import { TorneoEdCuff } from '../TorneoEdCuf/TorneoEdCuf'
import './_torneos.scss'
import { useEffect } from 'react'
export const Torneos = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
      }, []);
    return(
        <main className='main'>
            <TorneoEdCuff/>
            <Sponsor/>
            <Footer/>
        </main>
    )
}