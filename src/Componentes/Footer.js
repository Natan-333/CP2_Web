import '../Componentes/css/style.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'


function Footer(){

    return (

        <footer>
            <ul className='rsocial'>
                <li>
                   <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>

        Natan Cruz & Vitor Rubim
        
        </footer>
    
    )
}
export default Footer