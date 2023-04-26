import cal1 from '../assets/calcado1.webp';
import cal2 from '../assets/calcado2.webp';
import cal3 from '../assets/calcado3.webp';
import cal4 from '../assets/calcado4.webp';
import cal5 from '../assets/calcado5.webp';
import cal6 from '../assets/calcado6.webp';

import '../Componentes/css/style.css'
import Produto from './produto';

function Calçados(){
    return (
        <main>
            <div className="calcados">
            <Produto imagem={cal1} nomeProduto="Tênis Adidas esportivo feminino" preco="R$ 279,90" />
            <Produto imagem={cal2} nomeProduto="Tênis Fila esportivo feminino" preco="R$ 149,90" />
            <Produto imagem={cal3} nomeProduto="Tênis esportivo masculino Nike Downshifter" preco="R$ 290,00" />
            <Produto imagem={cal4} nomeProduto="Tênis esportivo Adidas 3 stripes" preco="R$ 279,00" />
            <Produto imagem={cal5} nomeProduto="Tênis social Puma" preco="R$ 179,90" />
            <Produto imagem={cal6} nomeProduto="Tênis esportivo Mizuno" preco="R$ 89,90" />
 
            </div>
        </main>
    )
}
export default Calçados