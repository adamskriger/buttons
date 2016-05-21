var bottomPopup = document.getElementById('bottom-popup')

let agreeButton = document.getElementById('agree-button')

var changeClass = function() {
     bottomPopup.classList.add('movement');

 bottomPopup.classList.add('newClass');
}

var changeBackClass = function() {
  setTimeout(function()

  {

    bottomPopup.classList.remove('newClass')
bottomPopup.classList.add('bottom-popup')
  }, 8000);

}

agreeButton.onclick = function() {
  console.log('clicked')
  changeClass();
  changeBackClass();
}
