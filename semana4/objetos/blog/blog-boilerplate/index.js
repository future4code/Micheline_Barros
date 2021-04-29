
let arrayBlog = [];
function post () {
    
    let inputTitulo = document.getElementById("titulo-post");

    let inputAutor = document.getElementById("autor-post");
    
    let inputConteudo = document.getElementById("conteudo-post");

    let conteudoDivBlog = document.getElementById("container-de-posts");
    
    let objetoPost = {
        titulo: `${inputTitulo.value}`,
        autor: `${inputAutor.value}`,
        conteudo: `${inputConteudo.value}`
    }
    arrayBlog.push(objetoPost);
    
    conteudoDivBlog.innerHTML += `<h1>${inputTitulo.value}</h1>`
    inputTitulo.value = "";
    conteudoDivBlog.innerHTML += `<h3>${inputAutor.value}</h3>`
    inputAutor.value = "";
    conteudoDivBlog.innerHTML += `<p>${inputConteudo.value}</p>`
    inputConteudo.value = "";
    console.log(arrayBlog);
}

