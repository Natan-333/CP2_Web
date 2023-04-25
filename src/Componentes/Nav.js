import {Link} from 'react-router-dom'
import '../index.css'
import '../Componentes/css/style.css'

function Nav(){

    return (
    <div id="menu">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Calçados">Calçados</Link>
            </li>
            <li>
                <Link to="/Camisetas">Camisetas</Link>
            </li>
            <li>
                <Link to="/Api">Equipamentos</Link>
            </li>

        </ul>
        </div>
    )
}
export default Nav