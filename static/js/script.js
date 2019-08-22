const testForm = document.getElementById('formulario');
testForm.onsubmit = function(event){
    event.preventDefault();
    const data = new FormData(document.getElementById('formulario'));
    var title = data.get('pTitles');
    var age = data.get("age");
    var gender = data.get('gender');
    var companions = data.get('companions');
    var clase = data.get('class');
    var embarqued = data.get('embarqued');
    var rate = data.get('rate');
    var url = "http://3.16.15.195:5000/v1/titanic/"
    console.log(`${url}${clase}/${gender}/${age}/${rate}/${embarqued}/${title}/${companions}`)  
}
