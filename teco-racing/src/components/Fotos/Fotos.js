import './_fotos.scss'
import { Sponsor } from '../Sponsors/Sponsors'
import { Footer } from '../Footer/Footer'
import { GalleryDiv } from '../GalleryDiv/GalleryDiv'
export const Fotos = () => {
    return (
        <main className='main'>
            <section className='color1'>
                {/* <div className='contenedorDeTodito'> */}
                <div className='galeria'>
                    <h1 className='galeria__titulo'>GALERÍA DE FOTOS</h1>
                    <GalleryDiv />
                </div>
                {/* </div> */}
            </section>

            <Sponsor />
            <Footer />
        </main>
    )
}