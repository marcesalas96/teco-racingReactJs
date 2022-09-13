import './_superiorBar.scss'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom';
export const SuperiorBar = ({ h3, className, ruta, estado }) => {
    return (
        <div className={className}>
            <h3 className={className + "__h3"} >{h3}</h3>
            {estado ?
            <Link to={`/${ruta}`} className={className + "__link"}>
                <h5 className={className + "__h5"}>VER TODOS <FaPlay /> </h5>
            </Link>
            :
            <></>
            }
        </div>
    )
}