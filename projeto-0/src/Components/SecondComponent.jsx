import React from 'react'

const SecondComponent = () => {
    const filmes = [
        {nome: 'Coraline e o Mundo Secreto', anoLancamento: 2009},
        {nome: 'O Menino e a Garça', anoLancamento: 2023},
        {nome: 'A Viagem de Chihiro', anoLancamento: 2001}
    ]

    // Cria uma cópia da lista e ordena em ordem alfabética
    const filmesOrdenados = [...filmes].sort((a, b) => a.nome > b.nome ? 1 : -1);

    return (
        <div>
            <h1>Lista de Filmes</h1>
            
            <h2>Forma Ordenada</h2>
            <ul>
                {filmes.map((filme) => (
                    <li key={filme.anoLancamento}>
                       <b>Nome do Filme:</b>  {filme.nome} <b>Ano de Lançamento:</b> {filme.anoLancamento}
                    </li>
                ))}
            </ul>
            
            <h2>Ordem Alfabética</h2>
            <ul>
                {filmesOrdenados.map((filme) => (
                    <li key={filme.anoLancamento}>
                        <b>Nome do Filme:</b> {filme.nome} <b>Ano de Lançamento:</b>{filme.anoLancamento}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SecondComponent
