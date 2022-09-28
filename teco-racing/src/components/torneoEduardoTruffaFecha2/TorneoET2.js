import './_torneoET2.scss'
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from 'react';
import { TituloFotos } from '../TitutloFotos/TitutloFotos';
import { Footer } from '../Footer/Footer'
import {Sponsor } from '../Sponsors/Sponsors'

export const TorneoEt2 = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '../images/torneoET2/carrera3-09.jpeg',
        '../images/torneoET2/ET.jpeg',
        '../images/torneoET2/ET1.jpeg',
        '../images/torneoET2/ET2.jpeg',
        '../images/torneoET2/ET3.jpeg',
        '../images/torneoET2/ET4.jpeg',
        '../images/torneoET2/ET5.jpeg',
        '../images/torneoET2/ET6.jpeg',
        '../images/torneoET2/ET7.jpeg',
        '../images/torneoET2/ET8.jpeg',
        '../images/torneoET2/ET9.jpeg',
        '../images/torneoET2/ET10.jpeg',
        '../images/torneoET2/ET11.jpeg',
        '../images/torneoET2/ET12.jpeg',
        '../images/torneoET2/ET13.jpeg',
        '../images/torneoET2/ET14.jpeg',
        '../images/torneoET2/ET15.jpeg',
        '../images/torneoET2/ET16.jpeg',
        '../images/torneoET2/ET17.jpeg',
        '../images/torneoET2/ET18.jpeg',
        '../images/torneoET2/ET19.jpeg',
        '../images/torneoET2/ET20.jpeg',
        '../images/torneoET2/ET21.jpeg',
        '../images/torneoET2/ET22.jpeg',
        '../images/torneoET2/ET23.jpeg',
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
                <TituloFotos titulo={"TORNEO EDUARDO TRUFFA FECHA 2"} />
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