import c1 from '../assets/camiseta1.webp';
import c2 from '../assets/camiseta2.webp';
import c3 from '../assets/camiseta3.webp';
import c4 from '../assets/camiseta4.webp';
import c5 from '../assets/camiseta5.webp';
import c6 from '../assets/camiseta6.webp';

import Produto from '../components/Produto';

import '../components/css/style.css'

function Camisetas(){

    return (
        <main>
            <div className="camisetas">
                <Produto imagem={c1} nomeProduto="Camiseta Adidas" preco="R$ 59,90" />
                <Produto imagem={c2} nomeProduto="Camiseta Esportiva Coringão" preco="R$ 350,00" />
                <Produto imagem={c3} nomeProduto="Camiseta esportiva adidas" preco="R$ 35,00" />
                <Produto imagem={c4} nomeProduto="Camiseta Puma" preco="R$ 87,50" />
                <Produto imagem={c5} nomeProduto="Camiseta Nike" preco="R$ 49,90" />
                <Produto imagem={c6} nomeProduto="Camiseta Esporte Legal Fresh" preco="R$ 70,90" />
            </div>
        </main>
    )
}
export default Camisetas