// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

function toggleParagraph() {
    toggledParagraph.classList.toggle('hide');
    toggledParagraph.classList.toggle('show');
    console.log("my toggle function");
    console.log(toggledParagraph);
}

//call the fuction to hide
toggleParagraph();

//call the fuction to show
toggleParagraph();

//find the button and toggle the paragraph
const toggleButton = document.querySelector('#toggle-control');

toggleButton.addEventListener("click", toggleParagraph );




