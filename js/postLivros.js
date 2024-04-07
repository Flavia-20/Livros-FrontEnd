const url = "https://livrosapi.azurewebsites.net/livros"; 

/* pegando as tags do html*/
const postLivrosForm = document.querySelector('#postLivrosForm');
const nomeInput = document.querySelector('#nomeLivro');
const precoInput = document.querySelector('#precoLivro');
const categoriaLivro = document.querySelector('#categoriaLivro');

const livrosPostados = document.querySelector("#livrosPostados");

function cadastroLivros(livro) {
    /*criando as tags*/
    const div = document.createElement('div');
    const nome = document.createElement('h3');
    const preco = document.createElement('p');
    const categoria = document.createElement('p');
    const codigoCategoria = document.createElement('p');
   
    /* preenchendo as tags*/
    nome.innerHTML = `Nome do livro: ${livro.nome}`;
    preco.innerHTML = `Preço: ${livro.preco}`;
    categoria.innerHTML = `Categoria: ${livro.categoriaEntity.nomeCategoria}`;
    codigoCategoria.innerHTML = livro.categoriaEntity.codigoCategoria;

    /*aninhando as tags */
    div.appendChild(nome);
    div.appendChild(preco);
    div.appendChild(categoria);
    div.appendChild(codigoCategoria);
    livrosPostados.appendChild(div);
}
/*método para a postagem*/
async function postLivros(cadastro){
    try{
        const response = await fetch(url,{
            method:"POST",
            body: cadastro,
            headers:{
                "Content-Type":"application/json",   
            },
        });
        const data = await response.json();
        console.log("Livro cadastrado com sucesso:", data);
        cadastroLivros(data);
    } catch (error) {
        console.error('Erro:', error.message);
        throw error;
    }
   
}

/*adicionando evento no botão para cadastrar o livro */
postLivrosForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let cadastro = {
        nome: nomeInput.value,
        preco: precoInput.value,
        categoria: categoriaLivro.value,
    };

    console.log(cadastro);
    cadastro = JSON.stringify(cadastro);
    postLivros(cadastro);

})


   


