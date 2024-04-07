const url = "https://livrosapi.azurewebsites.net/livros"; 

/* pegando as tags do html*/
const postLivrosForm = document.querySelector('#postLivrosForm');
const nomeInput = document.querySelector('#nomeLivro');
const precoInput = document.querySelector('#precoLivro');
const categoriaInput = document.querySelector('#categoriaLivro');

const livrosPostados = document.querySelector("#livrosPostados");

function cadastroLivros(livro) {
    /*criando as tags*/
    const div = document.createElement('div');
    const nomeLivro = document.createElement('h3');
    const precoLivro = document.createElement('p');
    //const categoriaLivro = document.createElement('p');
    const codigoCategoria = document.createElement('p');
   
    /* preenchendo as tags*/
    nomeLivro.innerHTML = `Nome do livro: ${livro.nome}`;
    precoLivro.innerHTML = `Preço: ${livro.preco}`;
    //categoriaLivro.innerHTML = `Categoria: ${livro.categoria}`;
    codigoCategoria.innerHTML = livro.codigo;

    /*aninhando as tags */
    div.appendChild(nomeLivro);
    div.appendChild(precoLivro);
    //div.appendChild(categoriaLivro);
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
        categoria: categoriaInput.value,
        preco: precoInput.value,
       
    };

    console.log(cadastro);
    cadastro = JSON.stringify(cadastro);
    postLivros(cadastro);

})


   


