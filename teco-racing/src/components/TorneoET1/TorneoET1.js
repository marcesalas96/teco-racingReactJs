import '../torneoEduardoTruffaFecha2/_torneoET2.scss'
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from 'react';
import { TituloFotos } from '../TitutloFotos/TitutloFotos';
import { Footer } from '../Footer/Footer'
import {Sponsor } from '../Sponsors/Sponsors'

export const TorneoEt1 = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '../images/torneoET1/ET.jpeg',
        '../images/torneoET1/ET1.jpeg',
        '../images/torneoET1/ET2.jpeg',
        '../images/torneoET1/ET3.jpeg',
        '../images/torneoET1/ET4.jpeg',
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
                <TituloFotos titulo={"TORNEO EDUARDO TRUFFA FECHA 1"} />
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