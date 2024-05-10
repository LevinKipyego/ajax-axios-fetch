let getTextButton = document.querySelector('#text-btn')
getTextButton.addEventListener('click', function() {
    getTextData()
})

let getTextData = () => {
    fetch('./data/message.txt').then((response) => {
        if(!response.ok){
            console.log(`something went wrong :${response.status}`)
            return
        }
        response.text().then((data) => {
            let htmlTemplate = `<h3>${data}</h3>`
            document.querySelector('#text-message').innerHTML = htmlTemplate
        })
    })

}