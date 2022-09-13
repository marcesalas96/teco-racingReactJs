import { Footer } from '../Footer/Footer'
import { Sponsor } from '../Sponsors/Sponsors'
import { TorneoEdCuff } from '../TorneoEdCuf/TorneoEdCuf'
import './_torneos.scss'

export const Torneos = () => {
    return(
        <main className='main'>
            <TorneoEdCuff/>
            <Sponsor/>
            <Footer/>
        </main>
    )
}