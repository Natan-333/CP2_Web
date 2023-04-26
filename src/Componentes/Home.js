import React,{useState} from 'react'
import '../Componentes/css/style.css'

function Home(){    
    //criando o useState (manipula o stado da variável)
    const[nome,setNome]=useState("userName")
    const[email,setEmail] = useState()
    const[userEmail,setUserEmail] = useState()
 
    // criando a função para enviar email
    function enviarEmail(e){

        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    //criando a função limpar campo

    function limparEmail(){
        setUserEmail('')
    }



    return (
        <div className="home">
         <h1>Home</h1>
         <br/>
                        
         <h2>CADASTRE SEU EMAIL</h2>

         <input type="email" placeholder="Digite seu email"
         onChange={(e)=>setEmail(e.target.value)}/>


         <button onClick={enviarEmail}>
            Enviar
        </button>
       
 
         {userEmail && (
            <div>
                <p id="userEmail">O email do usuário é: <span>{userEmail}</span></p><br/>
                <button onClick={limparEmail}>Limpar campo</button>
            </div>
         )}


        </div>
    )
}
export default Home