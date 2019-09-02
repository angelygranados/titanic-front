// var testResult;
const testForm = document.getElementById('formulario');
// const modal = document.getElementById('popup');
testForm.onsubmit = function (event){
    event.preventDefault();
    const data = new FormData(document.getElementById('formulario'));
    name = data.get('nameID');
    var title = data.get('pTitles');
    var age = data.get("age");
    var gender = data.get('gender');
    var companions = data.get('companions');
    var clase = data.get('class');
    var embarqued = data.get('embarqued');
    var rate = data.get('rate');
    var url = (`http://osmandi.com/v1/titanic/${clase}/${gender}/${age}/${rate}/${embarqued}/${title}/${companions}`); 
    fetch(url)
    .then(response => response.json())
    .then(data => {
        showModal(data);        
    })
    .catch(error => errorModal());
}
var name;
const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

const $modalTitle = $modal.querySelector('h3');
const $modalImage = $modal.querySelector('img');
const $modalDescription = $modal.querySelector('h4');
const $modalShare = $modal.querySelector('p');


function showModal(data) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const message = " IF YOU TRAVEL ON THE TITANIC:"
    const resultado = data.result;
    if (resultado == "Vives"){
        $modalTitle.textContent = `${name.toUpperCase()} ${message} \n`;
       $modalDescription.textContent = `YOU LIVE\n`;
       $modalShare.textContent = `SHARE YOUR RESULT:`;
       $modal.querySelector('#twitter').setAttribute("data-title", `I traveled on the Titanic and I lived! 🤩 Try it and share your result.`);
     
    }
    else if(resultado == "Mueres"){
      $modalTitle.textContent = `${name.toUpperCase()} ${message}  \n`;
      $modalDescription.textContent = `YOU DIE\n`;
      $modalShare.textContent = `SHARE YOUR RESULT:`;
      $modal.querySelector('#twitter').setAttribute("data-title", `I traveled on the Titanic and I died! 😖 Try it and share your result.`);
    }
    
  }
  function errorModal(){
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';

  }
 