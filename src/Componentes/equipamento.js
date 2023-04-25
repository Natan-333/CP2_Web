import React from "react"
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

export default function Equipamento(){
    const {register, handleSubmit, setValue, setFocus} = useForm();
    const [frete, setFrete] = useState('$0.00');
  
    const onSubmit = (e) => {
      console.log(e);
    }
  
    const checkCep = (e) => {
      const cep = e.target.value.replace(/\D/g, '');
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => { 
          console.log(data);
          setValue('rua', data.logradouro);
          setValue('bairro', data.bairro);
          setValue('cidade', data.localidade);
          setValue('estado', data.uf);
          setFocus('numero');
        })
    }
  
    // useEffect(() => {
    //   if (register.estado.value === 'sp') {
    //     setFrete('$10.00');
    //   } else {
    //     setFrete('$0.00');
    //   }
    // }, [register.estado.value]);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Consumindo uma API</h1>
        <br />
        <label>CEP: 
          <input type="text" {...register("cep")} onBlur={checkCep} />
        </label>
  
        <label>RUA: 
          <input type="text" {...register("rua")} />
        </label>
  
        <label>NÚMERO: 
          <input type="text" {...register("numero")} />
        </label>
  
        <label>BAIRRO: 
          <input type="text" {...register("bairro")} />
        </label>
  
        <label>CIDADE: 
          <input type="text" {...register("cidade")} />
        </label>
  
        <label>ESTADO: 
          <input type="text" {...register("estado")} />
        </label>
  
        <div>Valor do frete: {frete}</div>
  
        <button type="submit" id="enviar">Enviar</button>
      </form>
    );
  }