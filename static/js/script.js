// const testForm = document.getElementById('formulario');
// testForm.onsubmit = function(event){
//     event.preventDefault();

//     // const request = new XMLHttpRequest();
//     // request.open('POST', 'https://httpbin.org/post', async = false);

//     const formData = new FormData(document.getElementById('formulario'));
//     // request.send(formData);

//     console.log(formData);
// }

const data = new FormData(document.getElementById('formulario'));
fetch('../post.php', {
    method: 'POST',
    body: data
})
.then(function(response){
    if(response.ok){
        return response.text()
    }
    else{
        throw "Error en la llamada Ajax";
    }
})
.then(function(texto){
    console.log(texto);
})
.catch(function(err){
    console.log(err);
});