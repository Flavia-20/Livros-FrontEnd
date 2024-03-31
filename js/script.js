/*const url = fetch("https://livrosapi.azurewebsites.net/livros")
console.log(url)*/
const url = "https://livrosapi.azurewebsites.net/livros"

const livrosContainer = document.querySelector("#livrosContainer");

async function getAllLivros(){
    try{
        const response = await fetch(url);
        console.log(response);
    
        const dados = await response.json();
        console.log(dados)
    
        dados.forEach((livro)=>{
          
            const div= document.createElement('div');
            const nome = document.createElement('h2');
            const preco = document.createElement('p');
            const data = document.createElement('p');
            //const codigoCategoria = document.createElement('p');
            const nomeCategoria = document.createElement('p');
    
            nome.innerHTML = livro.nome;
            preco.innerHTML = `Preço: R$ ${livro.preco}`;
            data.innerHTML = `Data de criação: ${livro.creatAt}`;
            //codigoCategoria.innerHTML = livro.categoriaEntity.codigoCategoria;
            nomeCategoria.innerHTML = `Nome da categoria: ${livro.categoriaEntity.nomeCategoria}`;
        

            div.appendChild(nome);
            div.appendChild(preco);
            div.appendChild(data);
            //div.appendChild(codigoCategoria);
            div.appendChild(nomeCategoria);
    
            livrosContainer.appendChild(div);
        });

    } catch (error) {
        console.error('Erro:', error.message);
    }
}

getAllLivros()