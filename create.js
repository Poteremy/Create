/* Auto Resize Title Input */

const input = document.getElementById('storyTitle');
input.addEventListener('input', resizeInput); 
resizeInput.call(input); 

function resizeInput() {
  this.style.width = this.value.length+"ch";
}


/* Add New Input */

const inputForm = document.getElementById('inputForm');
let t = 1;
addNew = (e) => {
  e.preventDefault() /
t++;
let create = document.createElement('input');
create.setAttribute('type', 'text')
create.setAttribute('id', t)
create.setAttribute('placeholder', 'Word Type')
inputForm.appendChild(create)
}

/* Submit All Input Fields   */

submitWords = (e) => {
  e.preventDefault;

  const title = document.getElementById('storyTitle');
  const story = document.getElementById('story');
  localStorage.setItem('title', JSON.stringify(title.value));
  localStorage.setItem('story', JSON.stringify(story.value));
  
  let inputs = []
  localStorage.setItem('inputs', JSON.stringify(inputs))
  JSON.parse(localStorage.getItem('inputs'))

for (let i = 1; i<inputForm.length + 1; i++){
  let inputNumber = document.getElementById(i);
  inputs.push(inputNumber.value)
}

  localStorage.setItem('inputs', JSON.stringify(inputs))

     
      window.location.href="play.html";

    }



  // MODAL

  let modal = document.getElementById('myModal');
  let btn = document.getElementById('myBtn');
  let span = document.getElementsByClassName('close')[0];

window.onload = modal.style.display = "none"

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

       






