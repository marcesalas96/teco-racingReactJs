import { Link } from 'react-router-dom'
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsFillPersonFill, BsFillEnvelopeFill } from 'react-icons/bs'
import './_footer.scss'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-div'>
                <div className='footer-container'>
                    <ul className='footer-container-list'>
                        <li className='footer-container-list-item'>
                            <Link to={'/'} className='footer-container-list-link'>
                                <span>INICIO</span>
                            </Link>
                        </li>
                        <li className='footer-container-list-item'>
                            <Link to={'/torneos'} className='footer-container-list-link'>
                                <span>TORNEOS</span>
                            </Link>
                        </li>
                        <li className='footer-container-list-item'>
                            <Link to={'/fotos'} className='footer-container-list-link'>
                                <span>FOTOS</span>
                            </Link>
                        </li>
                        <li className='footer-container-list-item'>
                            <Link to={'/escuela'} className='footer-container-list-link'>
                                <span>ESCUELA</span>
                            </Link>
                        </li>
                        <li className='footer-container-list-item'>
                            <Link to={'/nosotros'} className='footer-container-list-link'>
                                <span>NOSOTROS</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-marca'>
                    <img src='../images/logoTecoR.png' alt=""/>
                    <span className='footer-marca-span'>Pagina diseñada por <a className='footer-marca-link' href='https://www.linkedin.com/in/marcelo-salas-295b09216/' target="_blank" rel='noreferrer'>MARCELO SALAS</a></span>
                </div>
                <div className='footer-redes'>
                    <ul className='footer-redes-list'>
                        <li className='footer-redes-list-item'><BsFillPersonFill/>TECO RACING</li>
                        <li className='footer-redes-list-item'><BsFillTelephoneFill />+54 9 387 509-1282</li>
                        <li className='footer-redes-list-item'><a className='footer-redes-list-link' href='https://www.facebook.com/Teco-Racing-102172939305735/' target={"_blank"} rel="noreferrer"><BsFacebook />Teco Racing</a></li>
                        <li className='footer-redes-list-item'><a  className='footer-redes-list-link' href='https://www.instagram.com/teco.racing/?igshid=YmMyMTA2M2Y%3D' target={"_blank"} rel={"noreferrer"}><BsInstagram />teco.racing</a></li>
                        <li className='footer-redes-list-item'><a href='mailto: tecoracing2022@gmail.com?subject=Hola queria ponerme en contacto con ustedes!' target="_blank" rel='noreferrer' className='footer-redes-list-link'><BsFillEnvelopeFill />tecoracing2022@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}