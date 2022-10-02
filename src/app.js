// import * as dotenv from 'dotenv';

// DATABASE BACKEND CODE //

const promptDisplay = document.querySelector('.prompt')
let answers = []
let alt_answers = [{"prompt":"When was a time where you were scared, but things turned out okay?","category":"Prompt"},{"prompt":"When you are having a tough day, what do you do to cope and why does it help?","category":"Prompt"},{"prompt":"When you tell me you feel angry, what else do you feel? Disappointed, hurt, betrayed, lonely, or something else?","category":"Prompt"},{"prompt":"Where and when does this usually happen?","category":"Prompt"},{"prompt":"Where is your favorite place to travel and why?","category":"Prompt"},{"prompt":"Who are the most important people in your life and why?","category":"Prompt"},{"prompt":"Who is someone you look up to and why?","category":"Prompt"},{"prompt":"Who is your favorite person to talk to and why?","category":"Prompt"},{"prompt":"Why is your favorite color your favorite color?","category":"Prompt"},{"prompt":"Why is your favorite movie your favorite movie?","category":"Prompt"}]

// database to front end startup
fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        answers = data
        document.getElementById("answer").innerHTML = "Think about a problem you're currently struggling with. <br/>Explain it to me.."
    })
    .catch(err => {
        answers = alt_answers
        document.getElementById("answer").innerHTML = "Think about a problem you're currently struggling with. <br/>Explain it to me.."
        console.log(err)
    })


// random answer from 'get prompt' button
function getRandomAnswer() {
    newAnswer = answers[Math.floor(Math.random()*answers.length)].prompt
    document.getElementById("answer").innerHTML = newAnswer
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
