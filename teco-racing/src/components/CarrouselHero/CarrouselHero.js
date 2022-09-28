import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './_carouselHero.scss'
import { SpanHero } from '../SpanHero/SpanHero';


export const CarrouselHero = () => {
    return (
        <Carousel className='carouselHero'>
            <Carousel.Item>
                    <img
                        className="carousel__img"
                        src="..\images\carouselHero\alfredoEntrenamiento.jpeg"
                        alt="First slide"
                    /> 
                    <SpanHero titulo1={'CONOCE A '} titulo2={'NUESTRO EQUIPO'} ruta={'nosotros'}/>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className="carousel__img"
                        src="../images/carouselHero/imagenCarousel2Recortada.png"
                        alt="Second slide"
                    />
                    <SpanHero titulo1={'MIRA'} titulo2={'NUESTROS TORNEOS'} ruta={'torneos'}/>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className="carousel__img"
                        src="../images/carouselHero/imagenCarousel3.jpeg"
                        alt="Third slide"
                    />
                    <SpanHero titulo1={'¿SABIAS QUE '} titulo2={'TENEMOS NUESTRA ESCUELA?'} ruta={'escuela'}/>
            </Carousel.Item>
        </Carousel >
    )
}