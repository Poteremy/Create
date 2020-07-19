const title = document.getElementById('title');
const finalText = document.getElementById('finalText');
const story = JSON.parse(localStorage.getItem('story'));
const finalInputs = JSON.parse(localStorage.getItem('finalInputs'));

title.textContent = JSON.parse(localStorage.getItem('title'));

let i = 0

finalText.innerText = story.replace(/\d+/g, replacer)

function replacer () {
    return finalInputs[i++]
}



