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
                    <spam>R$ 59,90</spam>
                </div>

                <div className="camiseta">
                <img src={c2} alt="Camiseta Esportiva Coringão" />
                    <p>Camiseta Nike Corinthians</p>
                    <spam>R$ 350,00</spam>
                </div>

                <div className="camiseta">
                <img src={c3} alt="Camiseta esportiva adidas" />
                    <p>Camiseta esportiva Adidas</p>
                    <spam>R$ 35,00</spam>
                </div>

                <div className="camiseta">
                <img src={c4} alt="Camiseta  Puma" />
                    <p>Camiseta Puma</p>
                    <spam>R$ 87,50</spam>
                </div>

                <div className="camiseta">
                <img src={c5} alt="Camiseta Nike" />
                    <p>Camiseta Nike</p>
                    <spam>R$ 49,90</spam>
                </div>

                <div className="camiseta">
                <img src={c6} alt="Camiseta Esporte Legal Fresh" />
                    <p>Camiseta Esporte Legal Fresh</p>
                    <spam>R$ 70,90</spam>
                </div>

            </div>
        </main>
        </>
    )
}
export default Camisetas