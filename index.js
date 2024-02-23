const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para referenciar um elemento HTML com o id 'meuElemento' em JavaScript?",
    respostas: [
      "document.getElement('meuElemento')",
      "document.getElementById('meuElemento')",
      "document.getId('meuElemento')",
    ],
    correta:  1
  },
  {
    pergunta: "Qual é o resultado da seguinte expressão em JavaScript: '10' +   20 +   30?",
    respostas: [
      "60",
      "102030",
      "1020",
    ],
    correta:  2
  },
  {
    pergunta: "Qual é a função de um operador ternário em JavaScript?",
    respostas: [
      "Ele permite a criação de funções",
      "Ele permite a execução de uma operação baseada em uma condição",
      "Ele permite a criação de objetos",
    ],
    correta:  1
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "var nome = 'João';",
      "let nome = 'João';",
      "const nome = 'João';",
    ],
    correta:  2
  },
  {
    pergunta: "O que é uma função anônima em JavaScript?",
    respostas: [
      "Uma função sem nome",
      "Uma função que é chamada por outra função",
      "Uma função que não retorna nenhum valor",
    ],
    correta:  0
  },
  {
    pergunta: "Qual é o resultado da expressão a seguir em JavaScript: typeof 'Hello'?",
    respostas: [
      "string",
      "object",
      "undefined",
    ],
    correta:  0
  },
  {
    pergunta: "Qual é a maneira correta de criar uma função em JavaScript?",
    respostas: [
      "function minhaFuncao() {}",
      "function: minhaFuncao() {}",
      "fun minhaFuncao() {}",
    ],
    correta:  0
  },
  {
    pergunta: "O que é 'undefined' em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um valor que representa a ausência de valor",
      "Uma função",
    ],
    correta:  1
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas o valor, enquanto '===' compara o valor e o tipo",
      "'==' compara o valor e o tipo, enquanto '===' compara apenas o valor",
      "'==' e '===' são a mesma coisa",
    ],
    correta:  0
  },
  {
    pergunta: "O que é 'null' em JavaScript?",
    respostas: [
      "Um valor que representa a ausência de valor",
      "Um tipo de dado",
      "Um valor que representa um objeto vazio",
    ],
    correta:  0
  },
]
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size+ ' de ' + totalDePerguntas

//loop ou laço de repetição

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size+ ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)  
}
