import cal1 from '../assets/calcado1.webp';
import cal2 from '../assets/calcado2.webp';
import cal3 from '../assets/calcado3.webp';
import cal4 from '../assets/calcado4.webp';
import cal5 from '../assets/calcado5.webp';
import cal6 from '../assets/calcado6.webp';

import '../Componentes/css/style.css'

function Calçados(){
    return (
        <main>
            <div className="calcados">
                <div className="calcado">
                    <img src={cal1} alt="calcado Adidas" />
                    <p>Tênis Adidas esportivo feminino</p>
                    <span>R$ 279,90</span>
                </div>

                <div className="calcado">
                    <img src={cal2} alt="calcado Fila" />
                    <p>Tênis Fila esportivo feminino</p>
                    <span>R$ 149,90</span>
                </div>

                <div className="calcado">
                    <img src={cal3} alt="calcado Nike Downshifter" />
                    <p>Tênis esportivo masculino Nike Downshifter</p>
                    <span>R$ 290,00</span>
                </div>

                <div className="calcado">
                    <img src={cal4} alt="calcado Adidas 3 stripes" />
                    <p>Tênis esportivo Adidas 3 stripes</p>
                    <span>R$ 279,00</span>
                </div>

                <div className="calcado">
                    <img src={cal5} alt="calcado puma" />
                    <p>Tênis social Puma</p>
                    <span>R$ 179,90</span>
                </div>

                <div className="calcado">
                    <img src={cal6} alt="calcado Mizuno" />
                    <p>Tênis esportivo Mizuno</p>
                    <span>R$ 89,90</span>
                </div>

            </div>
        </main>
    )
}
export default Calçados