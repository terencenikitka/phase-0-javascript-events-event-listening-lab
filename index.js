function addingEventListener() {
   return  input.addEventListener('click', clickAlert);
}
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

addingEventListener()