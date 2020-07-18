const title = document.getElementById('title');
const finalText = document.getElementById('finalText');
const story = JSON.parse(localStorage.getItem('story'));
const finalInputs = JSON.parse(localStorage.getItem('finalInputs'));

title.textContent = JSON.parse(localStorage.getItem('title'));




/*

I cannot, for the life of me, figure this out. How to get the story to appear on this screen, where 
the text within the story is replaced by corresponding values in the finalInputs array. Also, is there any way
I can start the array at index 1? 

I've gotten it to do what I want to a point, but it only displays the final iteration, replacing the LAST number identified by i

As an example, currently, I have the story as a string "This is a story about 0 who 1 and 2 and 3"
and finalInputs array is 0:one 1:two 2:three 3:four
after the following for loop, finalText reads "This is a story about 0 who 1 and 2 and four"

*/

 for(i=0; i<finalInputs.length ; i++) {
    let textReplace = story.replace(i, finalInputs[i])
    //console.log(textReplace)
    finalText.innerText = textReplace
} 




