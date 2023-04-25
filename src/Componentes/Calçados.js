import '../Componentes/css/style.css'
import cal1 from './imgCalcados/calcado1.webp';
import cal2 from './imgCalcados/calcado2.webp';
import cal3 from './imgCalcados/calcado3.webp';
import cal4 from './imgCalcados/calcado4.webp';
import cal5 from './imgCalcados/calcado5.webp';
import cal6 from './imgCalcados/calcado6.webp';

function Calçados(){
    return (
        <>
        <main>
            <div className="calcados">
                <div className="calcado">
                    <img src={cal1} alt="calcado Adidas" />
                    <p>Tênis Adidas esportivo feminino</p>
                    <spam>R$ 279,90</spam>
                </div>

                <div className="calcado">
                <img src={cal2} alt="calcado Fila" />
                    <p>Tênis Fila esportivo feminino</p>
                    <spam>R$ 149,90</spam>
                </div>

                <div className="calcado">
                <img src={cal3} alt="calcado Nike Downshifter" />
                    <p>Tênis esportivo masculino Nike Downshifter</p>
                    <spam>R$ 290,00</spam>
                </div>

                <div className="calcado">
                <img src={cal4} alt="calcado Adidas 3 stripes" />
                    <p>Tênis esportivo Adidas 3 stripes</p>
                    <spam>R$ 279,00</spam>
                </div>

                <div className="calcado">
                <img src={cal5} alt="calcado puma" />
                    <p>Tênis social Puma</p>
                    <spam>R$ 179,90</spam>
                </div>

                <div className="calcado">
                <img src={cal6} alt="calcado Mizuno" />
                    <p>Tênis esportivo Mizuno</p>
                    <spam>R$ 89,90</spam>
                </div>

            </div>
        </main>
        </>
    )
}
export default Calçados