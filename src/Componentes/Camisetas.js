import '../Componentes/css/style.css'
import c1 from './imgC/camiseta1.webp';
import c2 from './imgC/camiseta2.webp';
import c3 from './imgC/camiseta3.webp';
import c4 from './imgC/camiseta4.webp';
import c5 from './imgC/camiseta5.webp';
import c6 from './imgC/camiseta6.webp';

function Camisetas(){

    return (
        <>
        <main>
            <div className="camisetas">
                <div className="camiseta">
                    <img src={c1} alt="Camiseta Adidas" />
                    <p>Camiseta Adidas</p>
                    <span>R$ 59,90</span>
                </div>

                <div className="camiseta">
                    <img src={c2} alt="Camiseta Esportiva Coringão" />
                    <p>Camiseta Nike Corinthians</p>
                    <span>R$ 350,00</span>
                </div>

                <div className="camiseta">
                    <img src={c3} alt="Camiseta esportiva adidas" />
                    <p>Camiseta esportiva Adidas</p>
                    <span>R$ 35,00</span>
                </div>

                <div className="camiseta">
                    <img src={c4} alt="Camiseta Puma" />
                    <p>Camiseta Puma</p>
                    <span>R$ 87,50</span>
                </div>

                <div className="camiseta">
                    <img src={c5} alt="Camiseta Nike" />
                    <p>Camiseta Nike</p>
                    <span>R$ 49,90</span>
                </div>

                <div className="camiseta">
                    <img src={c6} alt="Camiseta Esporte Legal Fresh" />
                    <p>Camiseta Esporte Legal Fresh</p>
                    <span>R$ 70,90</span>
                </div>

            </div>
        </main>
        </>
    )
}
export default Camisetas