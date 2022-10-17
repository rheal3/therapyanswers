// import * as dotenv from 'dotenv';

// DATABASE BACKEND CODE //

const promptDisplay = document.querySelector('.prompt')
let answers = []
let alt_answers = [{"prompt":"And how does that make you feel?","category":"Question"},{"prompt":"Have you tried looking for other solutions?","category":"Question"},{"prompt":"Maybe you should be more open with your feelings?","category":"Question"},{"prompt":"Have you tried planning your day better?","category":"Question"},{"prompt":"What is the motivation behind your actions?","category":"Question"},{"prompt":"Do I really have to answer that?","category":"Question"},{"prompt":"Have you tried yoga?","category":"Question"},{"prompt":"What is the resut you wanted from that?","category":"Question"},{"prompt":"Why would you do such a thing?","category":"Question"},{"prompt":"Having you tried taking time for yourself?","category":"Question"},{"prompt":"Have you thought about a change of your surroundings?","category":"Question"},{"prompt":"Why?","category":"Question"},{"prompt":"Do you think that your obsession has turned into a fetish?","category":"Question"},{"prompt":"Have you tried exploring new hobbies?","category":"Question"},{"prompt":"Have you tried working out?","category":"Question"},{"prompt":"What do you gain from this?","category":"Question"},{"prompt":"Who are you trying to impress with this?","category":"Question"},{"prompt":"What would a younger version of you think of this?","category":"Question"},{"prompt":"Every journey begins with one step.","category":"Proverb"},{"prompt":"Each person has a cup which needs to be filled. You can only help people once your cup is full","category":"Proverb"},{"prompt":"This could be because of a poor relationship with your parents","category":"Answer"},{"prompt":"This could be because of a poor relationship with your mother","category":"Answer"},{"prompt":"This could be because of a poor relationship with your father","category":"Answer"},{"prompt":"Try reading: x therapy book","category":"Answer"},{"prompt":"Just don't do that","category":"Answer"},{"prompt":"you should try to do that differently","category":"Answer"},{"prompt":"Try cuddling, that boosts serotonin.","category":"Answer"},{"prompt":"I think you know the answer to that one.","category":"Answer"},{"prompt":"Look inside yourself for the answer.","category":"Answer"},{"prompt":"Small actions made daily will change your life in large ways","category":"Answer"},{"prompt":"You are influenced by the people you spend the most time with","category":"Answer"},{"prompt":"Make sure to take time to treat yourself.","category":"Answer"},{"prompt":"Tell me more about that.","category":"Answer"},{"prompt":"I think you need a hug.","category":"Answer"},{"prompt":"Maybe you should get out more.","category":"Answer"},{"prompt":"Nature can be a very good source of calm in your life.","category":"Answer"},{"prompt":"Exercise is very helpful to boost mental health and self confidence.","category":"Answer"},{"prompt":"You could could be hurting inside.","category":"Answer"},{"prompt":"Waiting would be good.","category":"Answer"},{"prompt":"You are the only one responsible for your happiness","category":"Answer"},{"prompt":"Your worth is still 100% and that doesn't change","category":"Answer"},{"prompt":"Go outside and touch some grass.","category":"Instruction"},{"prompt":"Look in a mirror and say three things you like about yourself","category":"Instruction"},{"prompt":"Do something for someone else this weekend","category":"Instruction"},{"prompt":"Stop thinking so much about yourself","category":"Instruction"},{"prompt":"Tell me more about that?","category":"Prompt"},{"prompt":"How does that make you feel?","category":"Prompt"},{"prompt":"Could you explain that in a different way?","category":"Prompt"},{"prompt":"What would you say that means for you going forward?","category":"Prompt"},{"prompt":"How can you change the outcome of this situation?","category":"Prompt"},{"prompt":"Are there more ways to think about this issue?","category":"Prompt"},{"prompt":"Why do you say it like that?","category":"Prompt"},{"prompt":"Why? can you explain that to me a bit more?","category":"Prompt"},{"prompt":"Okay, what are the takeaways from this?","category":"Prompt"},{"prompt":"Think of a time when you felt peace and describe it as best you can","category":"Journal"},{"prompt":"The simplest solution is often the best one","category":"Proverb"},{"prompt":"That sounds like a you problem.","category":"Answer"},{"prompt":"Are there any people who make this behavior worse? Make it better?","category":"Prompt"},{"prompt":"Are you an introvert or an extrovert? What makes you think so?","category":"Prompt"},{"prompt":"Are you doing a job that fulfills you? Why does or doesn’t it fulfill you?","category":"Prompt"},{"prompt":"Are you in a different place when this behavior ends?","category":"Prompt"},{"prompt":"Can someone I trust understand this situation in a different way?","category":"Prompt"},{"prompt":"Describe your typical daily mood. Is your mood like a roller coaster, or is it pretty steady?","category":"Prompt"},{"prompt":"Describe yourself with five words and explain why you chose them","category":"Prompt"},{"prompt":"Do you do this with everyone, or just when you are around certain people?","category":"Prompt"},{"prompt":"Do you feel a certain rush from doing this?","category":"Prompt"},{"prompt":"Do you feel mad when you don’t get your way or lose control?","category":"Prompt"},{"prompt":"Do you feel sad, mad, hopeless, stuck, or something else?","category":"Prompt"},{"prompt":"Do you have any bodily sensations after this happens, like trembling?","category":"Prompt"},{"prompt":"Do you regularly set positive goals for your work life, your relationships or health, and relaxation?","category":"Prompt"},{"prompt":"Does this behavior get you attention in some way?","category":"Prompt"},{"prompt":"Does this behavior help you avoid something you don’t want to do?","category":"Prompt"},{"prompt":"Does this help you in some way?","category":"Prompt"},{"prompt":"How do you feel about moving to music?","category":"Prompt"},{"prompt":"How do you feel immediately after this occurs?","category":"Prompt"},{"prompt":"How do you feel when a problem pops up unexpectedly?","category":"Prompt"},{"prompt":"How do you get yourself out of a bad mood?","category":"Prompt"},{"prompt":"How do you normally act right before this happens?","category":"Prompt"},{"prompt":"How do you react after this behavior occurs?","category":"Prompt"},{"prompt":"How do you see the problem?","category":"Prompt"},{"prompt":"How do you typically handle irritations, aggravations, and frustrations? Do you get mad easily? How does your anger come out?","category":"Prompt"},{"prompt":"How does the problem affect how you feel about yourself?","category":"Prompt"},{"prompt":"How does this problem typically make you feel?","category":"Prompt"},{"prompt":"How does your body feel right now?","category":"Prompt"},{"prompt":"How have you been coping with the problem? What have you tried so far?","category":"Prompt"},{"prompt":"How much fun are you having?","category":"Prompt"},{"prompt":"How often do you experience the problem?","category":"Prompt"},{"prompt":"How would you define the biggest challenge you’re facing right now?","category":"Prompt"},{"prompt":"If my automatic thought is true, what is the best thing that could happen?","category":"Prompt"},{"prompt":"If my automatic thought is true, what is the worst that could happen?","category":"Prompt"},{"prompt":"If you had to pick one song to play continuously, nonstop, in the background of your life, what would it be?","category":"Prompt"},{"prompt":"Is there an alternative way of thinking about the situation?","category":"Prompt"},{"prompt":"List three reasons why you like yourself","category":"Prompt"},{"prompt":"List three reasons why you love yourself","category":"Prompt"},{"prompt":"On a scale of 0–10, how content are you with your life?","category":"Prompt"},{"prompt":"Tell me about a time when you were not experiencing these difficulties.","category":"Prompt"},{"prompt":"Tell me about the important relationships in your life.","category":"Prompt"},{"prompt":"We all use different strategies to cope. Do you find yourself reaching for caffeine, drugs, alcohol, sex, shopping, the internet, or something else to make you feel better?","category":"Prompt"},{"prompt":"What about yourself are you proud of?","category":"Prompt"},{"prompt":"What about yourself do you hope to change?","category":"Prompt"},{"prompt":"What are the things or people in your life that are causing problems for you?","category":"Prompt"},{"prompt":"What are you doing (in as many aspects of your life as possible)?","category":"Prompt"},{"prompt":"What are you feeling?","category":"Prompt"},{"prompt":"What are you seeing and doing in this very moment?","category":"Prompt"},{"prompt":"What are you thinking?","category":"Prompt"},{"prompt":"What avenues have you pursued in the past that have worked well to solve the problem?","category":"Prompt"},{"prompt":"What brings you down or makes you feel blue?","category":"Prompt"},{"prompt":"What difference are you making in the world each day?","category":"Prompt"},{"prompt":"What do people keep doing that you dislike, and what do you wish they would change?","category":"Prompt"},{"prompt":"What do you envy about someone else and why?","category":"Prompt"},{"prompt":"What do you feel about your day today and why?","category":"Prompt"},{"prompt":"What do you feel?","category":"Prompt"},{"prompt":"What do you think about after this happens?","category":"Prompt"},{"prompt":"What do you think caused the situation to worsen?","category":"Prompt"},{"prompt":"What do your senses pick up?","category":"Prompt"},{"prompt":"What else do you feel? Tell me more.","category":"Prompt"},{"prompt":"What energizes you and makes you feel more upbeat?","category":"Prompt"},{"prompt":"What evidence is there that this thought is not true?","category":"Prompt"},{"prompt":"What evidence is there that this thought is true?","category":"Prompt"},{"prompt":"What good things happen as a result of this behavior?","category":"Prompt"},{"prompt":"What happens to you physically before this happens? Do you feel sick?","category":"Prompt"},{"prompt":"What have people close to you told you about your moods?","category":"Prompt"},{"prompt":"What have you learned to say no to?","category":"Prompt"},{"prompt":"What have you learned to say yes to?","category":"Prompt"},{"prompt":"What is a great memory from childhood?","category":"Prompt"},{"prompt":"What is a memory that sticks with you from your school days?","category":"Prompt"},{"prompt":"What is a more balanced view that more accurately reflects the facts?","category":"Prompt"},{"prompt":"What is one of your favorite funny memories?","category":"Prompt"},{"prompt":"What is one thing that you did for someone else this week and how did it make you feel?","category":"Prompt"},{"prompt":"What is something that most people don’t know about you?","category":"Prompt"},{"prompt":"What is your attitude about change?","category":"Prompt"},{"prompt":"What is your favorite memory with your father or father figure?","category":"Prompt"},{"prompt":"What is your favorite memory with your mother or mother figure?","category":"Prompt"},{"prompt":"What is your favorite sound, and what instrument makes it?","category":"Prompt"},{"prompt":"What keeps happening repeatedly that keeps you from achieving your goals?","category":"Prompt"},{"prompt":"What made you feel happy today?","category":"Prompt"},{"prompt":"What made you feel uneasy today?","category":"Prompt"},{"prompt":"What makes you feel angry and why?","category":"Prompt"},{"prompt":"What makes you feel happy and why?","category":"Prompt"},{"prompt":"What makes you feel sad and why?","category":"Prompt"},{"prompt":"What makes you feel safe and why?","category":"Prompt"},{"prompt":"What makes you feel scared and why?","category":"Prompt"},{"prompt":"What music makes you feel content and why?","category":"Prompt"},{"prompt":"What sounds do you hear around you?","category":"Prompt"},{"prompt":"What thoughts go through your mind before this happens?","category":"Prompt"},{"prompt":"What three things are you grateful for today?","category":"Prompt"},{"prompt":"What type of music do you not like?","category":"Prompt"},{"prompt":"What type of music makes you feel completely relaxed?","category":"Prompt"},{"prompt":"What type of music makes you feel energized?","category":"Prompt"},{"prompt":"What was it like growing up in your family?","category":"Prompt"},{"prompt":"What were you feeling right before you did that?","category":"Prompt"},{"prompt":"What would be your dream career and why?","category":"Prompt"},{"prompt":"What would I tell someone I loved if they were in this situation and had these thoughts?","category":"Prompt"},{"prompt":"What would you tell your 25 year old self?","category":"Prompt"},{"prompt":"What would you tell your teenage self?","category":"Prompt"},{"prompt":"What wrongs have been done to you that you haven’t forgiven?","category":"Prompt"},{"prompt":"When I think of my best friends I feel…","category":"Prompt"},{"prompt":"When I think of my father I feel…","category":"Prompt"},{"prompt":"When I think of my mother I feel…","category":"Prompt"},{"prompt":"When I think of my siblings (or lack of siblings) I feel…","category":"Prompt"},{"prompt":"When was a time where you were scared, but things turned out okay?","category":"Prompt"},{"prompt":"When you are having a tough day, what do you do to cope and why does it help?","category":"Prompt"},{"prompt":"When you tell me you feel angry, what else do you feel? Disappointed, hurt, betrayed, lonely, or something else?","category":"Prompt"},{"prompt":"Where and when does this usually happen?","category":"Prompt"},{"prompt":"Where is your favorite place to travel and why?","category":"Prompt"},{"prompt":"Who are the most important people in your life and why?","category":"Prompt"},{"prompt":"Who is someone you look up to and why?","category":"Prompt"},{"prompt":"Who is your favorite person to talk to and why?","category":"Prompt"},{"prompt":"Why is your favorite color your favorite color?","category":"Prompt"},{"prompt":"Why is your favorite movie your favorite movie?","category":"Prompt"}]
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
function getRandomAnswer(type) {
    filter = answers.filter(x => x.category == type)
    newAnswer = filter[Math.floor(Math.random()*filter.length)].prompt
    document.getElementById("answer").innerHTML = newAnswer
}



// DISCLAIMER CODE //

// const disclaimerModal = document.getElementById("disclaimerModal");
const disclaimerModal = document.getElementsByClassName("disclaimer")[0];
const disclaimerButton = document.getElementById("openDisclaimer");
const closeDisclaimer = document.getElementsByClassName("close-disclaimer")[1];
const closeXDisclaimer = document.getElementsByClassName("close-x")[0];

// HOW TO MODAL
const howToModal = document.getElementsByClassName("how-to")[0];
const howToButton = document.getElementById("openHowTo");
const closeHowTo = document.getElementsByClassName("close-how-to")[0];
const closeXHowTo = document.getElementsByClassName("close-x")[1];

// open disclaimer modal
disclaimerButton.onclick = function() {
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
    howToModal.style.display = "block";
}
closeXDisclaimer.onclick = function() {
    disclaimerModal.style.display = "none";
}

// open how to modal
howToButton.onclick = function() {
    howToModal.style.display = "block";
}

// close disclaimer modal
window.onclick = function(event) {
    if (event.target == howToModal) {
        howToModal.style.display = "none";
    }
}
closeHowTo.onclick = function() {
    howToModal.style.display = "none";
}
closeXHowTo.onclick = function() {
    howToModal.style.display = "none";
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

