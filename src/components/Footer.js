import { FaFacebook, FaInstagram } from 'react-icons/fa'

import './css/style.css'

function Footer() {
    return (
        <footer>
            <ul className='rsocial'>
                <FaFacebook />
                <FaInstagram />
            </ul>
            Natan Cruz & Vitor Rubim
        </footer>
    )
}
export default Footer