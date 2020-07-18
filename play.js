const title = document.getElementById('title');

title.textContent = JSON.parse(localStorage.getItem('title'))

const inputs = JSON.parse(localStorage.getItem('inputs'))

const inputForm = document.getElementById('playForm')




function load() {
    for(i=0; i<inputs.length; i++){
            let newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            newInput.setAttribute('id', i+1);
            newInput.setAttribute('placeholder', inputs[i] )
            inputForm.appendChild(newInput)
        }
    }
        
submitFinal = (e) => {

    let finalInputs = []
        localStorage.setItem('finalInputs', JSON.stringify(finalInputs))
        JSON.parse(localStorage.getItem('finalInputs'))
    
    for (let i = 1; i<inputForm.length + 1; i++){
        let inputNumber = document.getElementById(i);
        finalInputs.push(inputNumber.value)
    }
    
        localStorage.setItem('finalInputs', JSON.stringify(finalInputs))
    }
        

