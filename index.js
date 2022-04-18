//Requerimento do módulo nativo fs
const fs = require('fs')

const companyName = 'Sistema Omma'
console.log(companyName)

// const listaDeReceitas = [
//   {
//     id: 1,
//     titulo: 'Cachorro quente',
//     dificuldade: 'Simples',
//     ingredientes: ['1 pão de leite', '1 salsicha', '1 colher de batata palha'],
//     preparo: 'Lorem ipsum dolor sit amet, consectrtur',
//     link: 'https://youtube.com',
//     vegan: false
//   }
// ]

//Função para adicionar receita recebendo as propriedades como parâmetros
const cadastrarReceita = (
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegan
) => {
  //Leitura dos arquivos do JSON
  const rawData = fs.readFileSync('data.json')

  //Conversão de buffer para js
  const listaDeReceitas = JSON.parse(rawData)

  const novaReceita = {
    id: listaDeReceitas[listaDeReceitas.length - 1].id + 1,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegan
  }
  listaDeReceitas.push(novaReceita)

  //Escrever as alterações no JSON
  fs.writeFileSync('data.json', JSON.stringify(listaDeReceitas))

  console.log(`Cadastro da receita ${titulo} realizada com sucesso!`)
}
cadastrarReceita(
  'Omelete',
  'simples',
  ['2 ovos', 'Verduras a gosto', '1 colher de azeite', 'sal a gosto'],
  'Lorem ipsum dolor amet',
  'https://google.com',
  false
)

//Console para testar
//console.log(listaDeReceitas)

//Função para exibir todas as receitas, retornando apenas determinados atributos. Ex: titulo, ingredientes, vegan
const exibirReceita = () => {
  listaDeReceitas.forEach(receita => {
    const { titulo, ingredientes, vegan } = receita
    console.log('----------------------')
    console.log(`Título: ${titulo}`)

    console.log(`Ingredientes:`)
    ingredientes.forEach(ingrediente => {
      console.log(`- ${ingrediente}`)
    })

    console.log(`é vegana? ${vegan ? 'sim.' : 'não.'}`)
    console.log('----------------------')
  })
}

//Testando
// exibirReceita()

//Função para mostrar uma determinada receita, voltando apenas alguns atributos. Ex: titulo,ingredientes e vegan
const mostrarReceita = identificador => {
  const receitaMostrada = listaDeReceitas.find(receita => {
    return receita.id == identificador
  })
  console.log(
    `A receita ${receitaMostrada.titulo} possui esses ingredientes: ${
      receitaMostrada.ingredientes
    }, e ela é vegana? ${receitaMostrada.vegan ? 'sim.' : 'não.'}`
  )
}

//Testando
// mostrarReceita(1)

//Função para buscar uma receita por um termo no título
const buscarReceita = termo => {
  const receitasEncontradas = listaDeReceitas.filter(receita => {
    return receita.titulo.toLowerCase().indexOf(termo) != -1
  })
  console.log(receitasEncontradas)
}

//Testando
// buscarReceita('quente')

//Função para atualizar receita
const atualizarReceita = (id, receitaAtualizada = {}) => {
  const indiceDaReceita = listaDeReceitas.findIndex(receita => {
    return receita.id == id
  })
  //Verificação do identificador
  if (indiceDaReceita === -1) {
    return 'Receita não encontrada, verifique o ID'
  }
  listaDeReceitas[indiceDaReceita] = {
    ...listaDeReceitas[indiceDaReceita],
    ...receitaAtualizada
  }
  console.log(`Receita atualizada com sucesso!`)
}

//testando
// atualizarReceita(2, {
//   titulo: 'Ovo cozido',
//   ingredientes: ['Ovo', 'água'],
//   vegan: false
// })
// exibirReceita()

//Função para deletar a receita pelo ID - antes da refatoração
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

//Função deletar receita refatorada com metodos de array
const deletarReceita = identificador => {
  //checando o identificador
  if (identificador > listaDeReceitas.length || identificador <= 0) {
    console.log('Receita não encontrada. Verifique o ID.')
    return
  }
  const indiceDaReceitaExcluida = listaDeReceitas.findIndex(receita => {
    return receita.id == identificador
  })
  listaDeReceitas.splice(indiceDaReceitaExcluida, 1)
}

//Realizando testes de funcionalidades
// exibirReceita()
// deletarReceita(-1)
// exibirReceita()
