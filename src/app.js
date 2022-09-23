const promptDisplay = document.querySelector('.prompt')

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        // data.forEach(answer => {
        //     const details = `<p>` + answer.prompt + `<p>`
        //     console.log(answer.prompt)
        //     promptDisplay.insertAdjacentHTML("afterbegin", details)
        // })

        let randomAnswer = data[Math.floor(Math.random()*data.length)]
        promptDisplay.insertAdjacentHTML("afterbegin", randomAnswer.prompt)
        console.log(randomAnswer)

    })
    .catch(err => console.log(err))