import React from 'react'

const FirstComponent = () => {
    const nome = "Raquel";
    const sobrenome = "Araujo";
    const matricula = 2314290103;
    const professor = "Felipe Batista";
    const disciplina = "Construção de Frontend"
  return (
   
    <div>
      <h1> Dados</h1>
      <p> <b>Nome:</b> {nome} {sobrenome} <b>Matrícula:</b> {matricula} <b>Professor:</b> {professor} <b>Disciplina:</b> {disciplina} </p>
    </div>
  )
}

export default FirstComponent
