'use client';

import Botao from "@/componentes/botao/";
import { useState } from "react";

export default function Sobre() {
  const [numero, setNumero] = useState(0);
  return (
    <div className="container">
      <h1>Página Sobre</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <br />
      <label>{numero}</label>
      <br />
      <button type="button" 
      onClick={() => setNumero(numero + 1)}>
        Contar</button>

      <Botao label={'Mais um botão'} acao={() => setNumero(numero + 1)} />
      <Botao label={'Alerta'} acao={() => alert('Erro!')} />
    </div>
  );
}
