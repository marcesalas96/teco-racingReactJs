import '../torneoEduardoTruffaFecha2/_torneoET2.scss'
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from 'react';
import { TituloFotos } from '../TitutloFotos/TitutloFotos';
import { Footer } from '../Footer/Footer'
import {Sponsor } from '../Sponsors/Sponsors'

export const Entrenamiento = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '../images/entrenamientos/entrenamiento.jpeg',
        '../images/entrenamientos/entrenamiento1.jpg',
        '../images/entrenamientos/entrenamiento2.jpeg',
        '../images/entrenamientos/entrenamiento3.jpeg',
        '../images/entrenamientos/entrenamiento4.jpeg',
        '../images/entrenamientos/entrenamiento5.jpeg',
        '../images/entrenamientos/entrenamiento6.jpeg',
        '../images/entrenamientos/entrenamiento7.jpeg',
        '../images/entrenamientos/entrenamiento8.jpeg',
        '../images/entrenamientos/entrenamiento9.jpeg',
        '../images/entrenamientos/entrenamiento10.jpeg',
        '../images/entrenamientos/entrenamiento11.jpeg',
        '../images/entrenamientos/entrenamiento12.jpeg',
        '../images/entrenamientos/entrenamiento13.jpeg',
        '../images/entrenamientos/entrenamiento14.jpeg',
        '../images/entrenamientos/entrenamiento15.jpeg',
        '../images/entrenamientos/entrenamiento16.jpeg',
        '../images/entrenamientos/entrenamiento17.jpeg',
        '../images/entrenamientos/entrenamiento18.jpeg',
        '../images/entrenamientos/entrenamiento19.jpeg',
        '../images/entrenamientos/entrenamiento20.jpeg',
        '../images/entrenamientos/entrenamiento21.jpeg',
        '../images/entrenamientos/entrenamiento22.jpeg',
        '../images/entrenamientos/entrenamiento23.jpeg',
        '../images/entrenamientos/entrenamiento24.jpeg', 
        '../images/entrenamientos/entrenamiento25.jpeg', 
    ]
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <>
            <section className='color1'>
                <TituloFotos titulo={"ENTRENAMIENTOS"} />
                <div className='galeriaContenedor'>
                    {images.map((src, index) => (
                        <div className='galeriaContenedor__div'>
                            <img
                                src={src}
                                onClick={() => openImageViewer(index)}
                                key={index}
                                alt=""
                                className='galeriaContenedor__fotos'
                                loading='lazy'
                            />
                        </div>
                    ))}

                    {isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            disableScroll={false}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                            closeOnClickOutside={true}
                        />
                    )}
                </div>
            </section>
            <Sponsor />
            <Footer />
        </>
    )
}