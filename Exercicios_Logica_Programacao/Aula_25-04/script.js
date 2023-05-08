//post02
const secundPost = document.getElementById("post02");
//formulário aproveitei o id na section
const form = document.getElementById("formulario");
//section com ambos os comentários
const posts = document.getElementById("posts");
//data dos posts
const date = document.getElementsByClassName("post-data");
// textos dos posts
const comments = document.getElementsByClassName("post-texto");
//listas com links das redes sociais
const social_media = document.getElementsByClassName("lista_redes");
const lista_redes_item = document.getElementsByClassName("lista_redes_item");
/*
console.log(secundPost.innerText);
console.log(form.innerText);
console.log(posts.innerText);
console.log(date[0].innerHTML);
console.log(date[1].innerText);
console.log(comments[0]);
console.log(comments[1]);
console.log(social_media);
*/
function printListText(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].innerHTML);
    };
};

printListText(lista_redes_item);