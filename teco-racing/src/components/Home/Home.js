import { BestMultimedia } from "../BestMultimedia/BestMultimedia"
import { CarrouselHero } from "../CarrouselHero/CarrouselHero"
import { Footer } from "../Footer/Footer"
import { Races } from "../Races/Races"
import { Sponsor } from "../Sponsors/Sponsors"
import { useEffect } from "react"

export const Home = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
      }, []);
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