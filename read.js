const title = document.getElementById('title');
const finalText = document.getElementById('finalText');
const story = JSON.parse(localStorage.getItem('story'));
const finalInputs = JSON.parse(localStorage.getItem('finalInputs'));

title.textContent = JSON.parse(localStorage.getItem('title'));

/*
let i = 0
 function pee () {
     
    let textReplace = story.replace(i, finalInputs[i])
    console.log(textReplace)
    finalText.innerText = textReplace
    i++
} 

finalInputs.forEach(pee)

*/

let i = 0



finalText.innerText = story.replace(/\d+/g, replacer)

function replacer (match) {
    
    return finalInputs[i++]
    
}



