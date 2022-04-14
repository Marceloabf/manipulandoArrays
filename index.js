const companyName = 'Sistema Omma'
console.log(companyName)
const listaDeReceitas = [
  {
    id: 1,
    titulo: 'Cachorro quente',
    dificuldade: 'Simples',
    ingredientes: [
      '1 pão de leite',
      ' 1 salsicha',
      ' 1 colher de batata palha'
    ],
    preparo: 'Lorem ipsum dolor sit amet, consectrtur',
    link: 'https://youtube.com',
    vegan: false
  }
]
//Função para adicionar receita recebendo as propriedades como parâmetro
const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegan
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegan
  }
  listaDeReceitas.push(novaReceita)
  console.log(`Cadastro da receita ${titulo} realizada com sucesso!`)
}
cadastrarReceita(
  2,
  'Ovo frito',
  'simples',
  ['1 ovo', ' 1 colher de azeite', ' sal a gosto'],
  'Lorem ipsum dolor amet',
  'https://google.com',
  false
)
//Console para testar
//console.log(listaDeReceitas)

//Função para exibir todas as receitas, retornando apenas determinados atributos. Ex: titulo, ingredientes, vegan

const exibirReceita = () => {
  listaDeReceitas.map(receita => {
    return console.log(
      `${receita.titulo} tem os seguintes ingredientes: ${
        receita.ingredientes
      } e ${receita.vegan ? 'é vegana' : 'não é vegana'}`
    )
  })
}
exibirReceita()

//Função para mostrar uma determinada receita, voltando apenas alguns atributos. Ex: titulo,ingredientes e vegan

const mostrarReceita = identificador => {
  const receitaMostrada = listaDeReceitas.find(receita => {
    return receita.id == identificador
  })
  console.log(
    `A receita ${receitaMostrada.titulo} possui esses ingredientes: ${
      receitaMostrada.ingredientes
    }, e ela é vegana? ${receitaMostrada.vegan ? 'sim' : 'não'}`
  )
}

//Testando
//mostrarReceita(1)

//Função para deletar a receita pelo ID
// const deletarReceita = id => {
//   for (let i = 0; i < listaDeReceitas.length; i++) {
//     if (listaDeReceitas[i].id === id) {
//       listaDeReceitas.splice(i, 1)
//       console.log('Deletada com sucesso.')
//       return
//     }
//   }
//   console.log('Receita não encontrada.')
// }
const deletarReceita = identificador => {
  if (identificador > listaDeReceitas.length || identificador == 0) {
    //checando o identificador
    console.log('Receita não encontrada. Verifique o ID')
    return
  }
  const indiceDaReceitaExcluida = listaDeReceitas.findIndex(receita => {
    return receita.id == identificador
  })
  listaDeReceitas.splice(indiceDaReceitaExcluida, 1)
}

//Realizando testes de funcionalidades
console.log(listaDeReceitas)
deletarReceita(0)
console.log(listaDeReceitas)
// exibirReceita()
