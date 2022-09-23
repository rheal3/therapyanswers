const promptDisplay = document.querySelector('.prompt')

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(answer => {
            const details = `<p>` + answer.prompt + `<p>`
            console.log(answer.prompt)
            promptDisplay.insertAdjacentHTML("afterbegin", details)
        })
    })
    .catch(err => console.log(err))