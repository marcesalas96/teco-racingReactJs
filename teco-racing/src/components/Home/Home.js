import { BestMultimedia } from "../BestMultimedia/BestMultimedia"
import { CarrouselHero } from "../CarrouselHero/CarrouselHero"
import { Footer } from "../Footer/Footer"
import { Races } from "../Races/Races"
import { Sponsor } from "../Sponsors/Sponsors"

export const Home = () => {
    return (
        <main className="main">
            <CarrouselHero/>
            <Races/>
             <BestMultimedia/>
             <Sponsor/>
             <Footer/>
        </main>
    )
} 