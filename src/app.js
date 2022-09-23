const promptDisplay = document.querySelector('.prompt')
let answers = []

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        // data.forEach(answer => {
        //     const details = `<p>` + answer.prompt + `<p>`
        //     console.log(answer.prompt)
        //     promptDisplay.insertAdjacentHTML("afterbegin", details)
        // })
        answers = data
        let randomAnswer = data[Math.floor(Math.random()*data.length)].prompt
        // promptDisplay.insertAdjacentHTML("afterbegin", randomAnswer.prompt)
        document.getElementById("answer").innerHTML = randomAnswer
        console.log(randomAnswer)

    })
    .catch(err => console.log(err))


function getRandomAnswer() {
    newAnswer = answers[Math.floor(Math.random()*answers.length)].prompt
    document.getElementById("answer").innerHTML = newAnswer
    console.log(document.getElementById("answer"))
}