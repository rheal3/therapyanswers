// DATABASE BACKEND CODE //

const promptDisplay = document.querySelector('.prompt')
let answers = []

// database to front end startup
fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        answers = data
        let randomAnswer = data[Math.floor(Math.random()*data.length)].prompt
        document.getElementById("answer").innerHTML = randomAnswer
    })
    .catch(err => console.log(err))


// random answer from 'get prompt' button
function getRandomAnswer() {
    newAnswer = answers[Math.floor(Math.random()*answers.length)].prompt
    document.getElementById("answer").innerHTML = newAnswer
    console.log(document.getElementById("answer"))
}



// DISCLAIMER CODE //

// const disclaimerModal = document.getElementById("disclaimerModal");
const disclaimerModal = document.getElementsByClassName("disclaimer")[0];
const discalimerButton = document.getElementById("openDisclaimer");
const closeDisclaimer = document.getElementsByClassName("close")[0];

// open disclaimer modal
discalimerButton.onclick = function() {
    disclaimerModal.style.display = "block";
}

// close disclaimer modal
window.onclick = function(event) {
    if (event.target == disclaimerModal) {
        disclaimerModal.style.display = "none";
    }
}

closeDisclaimer.onclick = function() {
    disclaimerModal.style.display = "none";
}