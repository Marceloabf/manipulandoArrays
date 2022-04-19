//Requerimento do módulo nativo fs
const fs = require('fs')

const companyName = 'Sistema Omma'
console.log(companyName)

//Salvando em variáveis a abertura e a escrita no JSON, para deixar o código mais limpo
const abrirBancoDeDados = () => {
  //Leitura dos arquivos do JSON
  const rawData = fs.readFileSync('data.json')
  //Conversão de buffer para js
  const listaDeReceitas = JSON.parse(rawData)
  return listaDeReceitas
}

const fecharBancoDeDados = listaDeReceitas => {
  //Escrever as alterações no JSON
  fs.writeFileSync('data.json', JSON.stringify(listaDeReceitas))
}

//Função para adicionar receita recebendo as propriedades como parâmetros
const cadastrarReceita = (
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegan
) => {
  const listaDeReceitas = abrirBancoDeDados()
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
  fecharBancoDeDados(listaDeReceitas)
  console.log(`Cadastro da receita ${titulo} realizada com sucesso!`)
}

//-----Testando-----//
// cadastrarReceita(
//   'Omelete',
//   'simples',
//   ['2 ovos', 'Verduras a gosto', '1 colher de azeite', 'sal a gosto'],
//   'Lorem ipsum dolor amet',
//   'https://google.com',
//   false
// )

//Função para exibir todas as receitas, retornando apenas determinados atributos. Ex: titulo, ingredientes, vegan
const exibirReceita = () => {
  const listaDeReceitas = abrirBancoDeDados()
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

//-----Testando-----//
// exibirReceita()

//Função para mostrar uma determinada receita, voltando apenas alguns atributos. Ex: titulo,ingredientes e vegan
const mostrarReceita = identificador => {
  const listaDeReceitas = abrirBancoDeDados()
  const receitaMostrada = listaDeReceitas.find(receita => {
    return receita.id == identificador
  })
  console.log(
    `A receita ${receitaMostrada.titulo} possui esses ingredientes: ${
      receitaMostrada.ingredientes
    }, e ela é vegana? ${receitaMostrada.vegan ? 'sim.' : 'não.'}`
  )
}

//-----Testando-----//
// mostrarReceita(1)

//Função para buscar uma receita por um termo no título
const buscarReceita = termo => {
  const listaDeReceitas = abrirBancoDeDados()
  const receitasEncontradas = listaDeReceitas.filter(receita => {
    return receita.titulo.includes(termo)
  })
  console.log(receitasEncontradas)
}

//-----Testando-----//
// buscarReceita('quente')

//Função para atualizar receita
const atualizarReceita = (id, receitaAtualizada = {}) => {
  const listaDeReceitas = abrirBancoDeDados()
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
  fecharBancoDeDados(listaDeReceitas)
  console.log(`Receita atualizada com sucesso!`)
}

//-----Testando-----//
// atualizarReceita(2, {
//   titulo: 'Ovo cozido',
//   ingredientes: ['Ovo', 'água'],
//   vegan: false
// })
// exibirReceita()

//Função deletar receita refatorada com metodos de array
const deletarReceita = identificador => {
  const listaDeReceitas = abrirBancoDeDados()
  //checando o identificador
  if (identificador > listaDeReceitas.length || identificador <= 0) {
    console.log('Receita não encontrada. Verifique o ID.')
    return
  }
  const indiceDaReceitaExcluida = listaDeReceitas.findIndex(receita => {
    return receita.id == identificador
  })
  listaDeReceitas.splice(indiceDaReceitaExcluida, 1)
  fecharBancoDeDados(listaDeReceitas)
}

//-----Testando-----//
// deletarReceita(4)
