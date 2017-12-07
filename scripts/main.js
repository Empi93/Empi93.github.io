var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

myHeading.textContent = 'Welcome!';

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }