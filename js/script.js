/*const url = fetch("https://livrosapi.azurewebsites.net/livros")
console.log(url)*/
const url = "https://livrosapi.azurewebsites.net/livros"

const livrosContainer = document.querySelector("#livrosContainer");

async function getAllLivros(){
    const response = await fetch(url);

    console.log(response);

 const dados = await response.json();
    console.log(dados)

    dados.map((livro)=>{
      
        const option = document.createElement('option')
        const categoria = document.createElement('div')
        const nome = document.createElement('h2')
        const preco = document.createElement('p')
        const data = document.createElement('p')

        categoria.innerHTML = livro.categoriaEntity;
        nome.innerHTML = livro.nome;
        preco.innerHTML = livro.preco;
        data.innerHTML = livro.creatAt;

        option.appendChild(nome);
        option.appendChild(preco);
        option.appendChild(data);

    
        livrosContainer.appendChild(option);
        
    });
}

getAllLivros()