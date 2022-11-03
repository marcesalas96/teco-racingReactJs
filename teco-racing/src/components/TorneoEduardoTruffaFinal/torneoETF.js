import '../torneoEduardoTruffaFecha2/_torneoET2.scss'
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback, useEffect } from 'react';
import { TituloFotos } from '../TitutloFotos/TitutloFotos';
import { Footer } from '../Footer/Footer'
import {Sponsor } from '../Sponsors/Sponsors'

export const TorneoEduardoTruffaFinal = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
      }, []);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '../images/torneoET3/finalTorneo.png',
        '../images/torneoET3/torneoETFinal (1).jpg',
        '../images/torneoET3/torneoETFinal (2).jpg',
        '../images/torneoET3/torneoETFinal (3).jpg',
        '../images/torneoET3/torneoETFinal (4).jpg',
        '../images/torneoET3/torneoETFinal (5).jpg',
        '../images/torneoET3/torneoETFinal (6).jpg',
        '../images/torneoET3/torneoETFinal (7).jpg',
        '../images/torneoET3/torneoETFinal (8).jpg',
        '../images/torneoET3/torneoETFinal (9).jpg',
        '../images/torneoET3/torneoETFinal (10).jpg',
        '../images/torneoET3/torneoETFinal (11).jpg',
        '../images/torneoET3/torneoETFinal (12).jpg',
        '../images/torneoET3/torneoETFinal (13).jpg',
        '../images/torneoET3/torneoETFinal (14).jpg',
        '../images/torneoET3/torneoETFinal (15).jpg',
        '../images/torneoET3/torneoETFinal (16).jpg',
        '../images/torneoET3/torneoETFinal (17).jpg',
        '../images/torneoET3/torneoETFinal (18).jpg',
        '../images/torneoET3/torneoETFinal (19).jpg',
        '../images/torneoET3/torneoETFinal (20).jpg',
        '../images/torneoET3/torneoETFinal (21).jpg',
        '../images/torneoET3/torneoETFinal (22).jpg',
        '../images/torneoET3/torneoETFinal (23).jpg',
        '../images/torneoET3/torneoETFinal (24).jpg',
        '../images/torneoET3/torneoETFinal (25).jpg',
        '../images/torneoET3/torneoETFinal (26).jpg',
        '../images/torneoET3/torneoETFinal (27).jpg',
        '../images/torneoET3/torneoETFinal (28).jpg',
        '../images/torneoET3/torneoETFinal (29).jpg',
        '../images/torneoET3/torneoETFinal (30).jpg',
        '../images/torneoET3/torneoETFinal (31).jpg',
        '../images/torneoET3/torneoETFinal (32).jpg',
        '../images/torneoET3/torneoETFinal (33).jpg',
        '../images/torneoET3/torneoETFinal (34).jpg',
        '../images/torneoET3/torneoETFinal (35).jpg',
        '../images/torneoET3/torneoETFinal (36).jpg',
        '../images/torneoET3/torneoETFinal (37).jpg',
        '../images/torneoET3/torneoETFinal (38).jpg',
        '../images/torneoET3/torneoETFinal (39).jpg',
        '../images/torneoET3/torneoETFinal (40).jpg',
        '../images/torneoET3/torneoETFinal (41).jpg',
        '../images/torneoET3/torneoETFinal (42).jpg',
        '../images/torneoET3/torneoETFinal (43).jpg',
        '../images/torneoET3/torneoETFinal (44).jpg',
        '../images/torneoET3/torneoETFinal (45).jpg',
        '../images/torneoET3/torneoETFinal (46).jpg',
        '../images/torneoET3/torneoETFinal (47).jpg',
        '../images/torneoET3/torneoETFinal (48).jpg',
        '../images/torneoET3/torneoETFinal (49).jpg',
        '../images/torneoET3/torneoETFinal (50).jpg',
        '../images/torneoET3/torneoETFinal (51).jpg',
        '../images/torneoET3/torneoETFinal (52).jpg',
        '../images/torneoET3/torneoETFinal (53).jpg',
        '../images/torneoET3/torneoETFinal (54).jpg',
        '../images/torneoET3/torneoETFinal (55).jpg',
        '../images/torneoET3/torneoETFinal (56).jpg',
        '../images/torneoET3/torneoETFinal (57).jpg',
        '../images/torneoET3/torneoETFinal (58).jpg',
        '../images/torneoET3/torneoETFinal (59).jpg',
        '../images/torneoET3/torneoETFinal (60).jpg',
        '../images/torneoET3/torneoETFinal (61).jpg',
        '../images/torneoET3/torneoETFinal (62).jpg',
        '../images/torneoET3/torneoETFinal (63).jpg',
        '../images/torneoET3/torneoETFinal (64).jpg',
        '../images/torneoET3/torneoETFinal (65).jpg',
        '../images/torneoET3/torneoETFinal (66).jpg',
        '../images/torneoET3/torneoETFinal (67).jpg',
        '../images/torneoET3/torneoETFinal (68).jpg',
        '../images/torneoET3/torneoETFinal (69).jpg',
        '../images/torneoET3/torneoETFinal (70).jpg',
        '../images/torneoET3/torneoETFinal (71).jpg',
        '../images/torneoET3/torneoETFinal (72).jpg',
        '../images/torneoET3/torneoETFinal (73).jpg',
        '../images/torneoET3/torneoETFinal (74).jpg',
        '../images/torneoET3/torneoETFinal (75).jpg',
        '../images/torneoET3/torneoETFinal (76).jpg',
        '../images/torneoET3/torneoETFinal (77).jpg',
        '../images/torneoET3/torneoETFinal (78).jpg',
        '../images/torneoET3/torneoETFinal (79).jpg',
        '../images/torneoET3/torneoETFinal (80).jpg',
        '../images/torneoET3/torneoETFinal (81).jpg',
        '../images/torneoET3/torneoETFinal (82).jpg',
        '../images/torneoET3/torneoETFinal (83).jpg',
        '../images/torneoET3/torneoETFinal (84).jpg',
        '../images/torneoET3/torneoETFinal (85).jpg',
        '../images/torneoET3/torneoETFinal (86).jpg',
        '../images/torneoET3/torneoETFinal (87).jpg',
        '../images/torneoET3/torneoETFinal (88).jpg',
        '../images/torneoET3/torneoETFinal (89).jpg',
        '../images/torneoET3/torneoETFinal (90).jpg',
        '../images/torneoET3/torneoETFinal (91).jpg',
        '../images/torneoET3/torneoETFinal (92).jpg',
        '../images/torneoET3/torneoETFinal (93).jpg',
        '../images/torneoET3/torneoETFinal (94).jpg',
        '../images/torneoET3/torneoETFinal (95).jpg',
        '../images/torneoET3/torneoETFinal (96).jpg'
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
                <TituloFotos titulo={"TORNEO EDUARDO TRUFFA FINAL"} />
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