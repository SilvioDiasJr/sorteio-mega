import React, { useState } from 'react'

import './style.css'

const Sorteio = () => {
  const [numeros, setNumeros] = useState(['-','-','-','-','-','-'])

  function gerarSorteio() {
    var array = []
    var index = 0
    //Incluir numeros aleatorios no array
    while (index < 6) {
      array[index] = gerarNumeroAleatorio(array)
      index++
    }
    return array.sort((a, b) => a - b) // Ordenar o array do menor para o maior
  }

  function gerarNumeroAleatorio(array) {
    var numeroAleatorio = Math.floor(Math.random() * (61 - 1) + 1)
    //Verificar se numeroAletorio está contido no array, caso positivo chamar a função novamente
    return array.includes(numeroAleatorio) ? gerarNumeroAleatorio(array) : numeroAleatorio
  }

  const listaNumeros = numeros.map((numero, index)=> {
    return(
      <div key={index}>
        <h3>{numero}</h3>
      </div>
    )
  })

  return (
    <div className="container">
      <h1>Sorteio Mega</h1>
      <div className="numerosSorteados">
        {listaNumeros}
      </div>
      <button 
        onClick={e => setNumeros(gerarSorteio())}
      >
        Sortear Mega
      </button>
    </div>
  )
}

export default Sorteio