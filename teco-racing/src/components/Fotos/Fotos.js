import './_fotos.scss'
import { Sponsor } from '../Sponsors/Sponsors'
import { Footer } from '../Footer/Footer'
export const Fotos = () => {
    const data = [
        {
            id: 1,
            src: "../images/bauti2Cortada.jpeg"
        },
        {
            id: 2,
            src: "../images/escuelita1.jpeg"
        },
        {
            id: 3,
            src: "../images/escuelita2.jpeg"
        },
        {
            id: 4,
            src: "../images/torneo3.jpeg"
        },
        {
            id: 5,
            src: "../images/torneo4 (2).jpeg"
        },
        {
            id: 6,
            src: "../images/baquet.jpeg"
        },
        {
            id: 7,
            src: "../images/escuelita5.jpeg"
        }]
    const data2 = [

        {
            id: 8,
            src: "../images/torneow.jpeg"
        },
        {
            id: 9,
            src: "../images/torneo12.jpeg"
        },
        {
            id: 10,
            src: "../images/relojes2.jpeg"
        },
        {
            id: 11,
            src: "../images/escuelita4.jpeg"
        },
        {
            id: 12,
            src: "../images/fiat1500.jpeg"
        },
        {
            id: 13,
            src: "../images/torneo5.jpeg"
        },
        {
            id: 14,
            src: "../images/elTecoMovil.jpeg"
        },
    ]
    return (
        <main className='main'>
            <h1 className='gallery-tittle'>GALERIA DE FOTOS</h1>
            <section className='gallery'>
                <>
                    {data.map((item, index) => {
                        return (
                            <div className='gallery__fotos' key={index}>
                                <img src={item.src} alt="" className='gallery__fotos__blanco'/>
                            </div>
                        )
                    })
                    }
                </>
            </section>
            <section className='gallery color2'>
            <>
                    {data2.map((item, index) => {
                        return (
                            <div className='gallery__fotos' key={index}>
                                <img src={item.src} alt="" className='gallery__fotos__azul'/>
                            </div>
                        )
                    })
                    }
                </>
            </section>
            <Sponsor />
            <Footer />
        </main>
    )
}