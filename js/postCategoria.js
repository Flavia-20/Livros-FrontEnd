const url = "https://livrosapi.azurewebsites.net/categoria"; 

const cadastrarForm = document.querySelector('#cadastrarForm');
const nomeCategoria = document.querySelector('#novaCategoria');

const categoriaCadastrada = document.querySelector("#categoriaCadastrada");

function cadastroCategoria(categoriaLivro) {
    const div = document.createElement('div');
    const nome= document.createElement('p');

    nome.innerHTML = `Categoria: ${categoriaLivro.nomeCategoria}`;

    div.appendChild(nome);

    categoriaCadastrada.appendChild(div);   
}

function mensageErro(dataErro){
    const div = document.createElement('div');
    const responseErro = document.createElement('p');

    responseErro .innerHTML = dataErro;

    div.appendChild(responseErro);

    categoriaCadastrada.appendChild(div);   
}
async function postCategoria(categoria) {
        const response = await fetch(url,{
            method: "POST",
            body: categoria,
            headers:{
                "Content-Type": "application/json",   
            },
        });
        const data = await response.json();
        console.log(data);
        if(response.status != 400)
            cadastroCategoria(data);
        else{
            mensageErro(data);
        }
}

/*adicionando evento no botão para cadastrar a nova categoria */
cadastrarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let categoria = {
        nomeCategoria: nomeCategoria.value,
    };
    console.log(categoria);
    categoria = JSON.stringify(categoria)
    postCategoria(categoria);
});


