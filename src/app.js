// import * as dotenv from 'dotenv';

// DATABASE BACKEND CODE //

const promptDisplay = document.querySelector('.prompt')
let answers = []

// database to front end startup
fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        answers = data
        // let randomAnswer = data[Math.floor(Math.random()*data.length)].prompt
        // document.getElementById("answer").innerHTML = randomAnswer
        document.getElementById("answer").innerHTML = "What's up?"
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
const closeDisclaimer = document.getElementsByClassName("close-disclaimer")[0];

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



// CONTACT CODE //
const contactModal = document.getElementsByClassName("contact")[0];
const contactButton = document.getElementById("openContact");
const closeContact = document.getElementsByClassName("close-contact")[0];

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "therapyanswers@gmail.com",
//         Password : UNAVAILABLE,
//         To : 'therapyanswers@gmail.com',
//         From : 'therapyanswers@gmail.com',
//         Subject : document.getElementById("topic").value,
//         Body : `
//                 from: ${document.getElementById("name").value} <br>
//                 email: ${document.getElementById("email").value} <br>
//                 topic: ${document.getElementById("topic").value} <br>
//                 message: <br> ${document.getElementById("message").value}`
//     }).then(
//         message => alert("Your message has been sent. \nHave a joyous day!")
//     ).then(
//         contactModal.style.display = "none"
//     )
// }

// open contact modal
contactButton.onclick = function() {
    contactModal.style.display = "block";
}

// close contact modal
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}
closeContact.onclick = function() {
    contactModal.style.display = "none";
}
