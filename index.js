const companyName = 'Sistema Omma'
console.log(companyName)
const listaDeReceitas = [
  {
    id: 1,
    titulo: 'Cachorro quente',
    dificuldade: 'Simples',
    ingredientes: ['1 pão de leite', '1 salsicha', '1 colher de batata palha'],
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
  console.log(`Cadastro da receita ${titulo} realizado com sucesso`)
}
cadastrarReceita(
  2,
  'Ovo frito',
  'simples',
  ['1 ovo', '1 colher de azeite', 'sal a gosto'],
  'Lorem ipsum dolor amet',
  'https://google.com',
  false
)
//Console para testar
console.log(listaDeReceitas)

//Função para exibir uma determinada receita, retornando apenas determinados atributos. Ex: titulo, ingredientes, vegan
const exibirReceita = () => {
  for (receita of listaDeReceitas) {
    console.log(
      `A receita ${receita.titulo} possui esses ingredientes: ${receita.ingredientes}, e ela é vegana? ${receita.vegan}`
    )
  }
}
//Testando
exibirReceita()

//Função para deletar a receita pelo ID
const deletarReceita = id => {
  for (let i = 0; i < listaDeReceitas.length; i++) {
    if (listaDeReceitas[i].id === id) {
      listaDeReceitas.splice(i, 1)
      console.log('Deletada com sucesso.')
      return
    }
  }
  console.log('Receita não encontrada.')
}

//Realizando testes de funcionalidades
deletarReceita(2)
exibirReceita()
