// const placeholder = document.querySelector(".placeholder")
// const editableInput = document.querySelector(".editable")
// const tweetButton = document.querySelector(".button")
// const counter = document.querySelector(".counter")
// const readonly = document.querySelector(".readonly")

// editableInput.addEventListener("click", () => {
//     placeholder.style.color = "#98a5b1"
//     placeholder.style.transition = "all .3s"
// })

// editableInput.addEventListener("blur", () => {
//     placeholder.style.color = "#333"
//     placeholder.style.transition = "all .3s"
// })

// editableInput.addEventListener("keypress", (e) => {
//     placeholder.style.display = "none"
//     inputValidate(e.target.innerText)
// })

// editableInput.addEventListener("keyup", (e) => {
//     placeholder.style.display = "none"
//     inputValidate(e.target.innerText)
// })

// const inputValidate = (tweet) => {
//     const tweetLength = tweet.length;
//     const tweetLimit = 5
//     const currentLimit = tweetLimit - tweetLength
//     if (tweetLength <= 0) {
//         placeholder.style.display = "block"
//         tweetButton.classList.remove("active")
//         counter.style.display = "none"
//     } else {
//         tweetButton.classList.add("active")
//         counter.style.display = "block"
//         counter.innerText = currentLimit
//     }
//     let newTweet;
//     if (tweetLength > tweetLimit) {
//         let overTweet = tweet.substr(tweetLimit, tweetLength)
//         let overTweetElement = `<span class="overTweet">${overTweet}</span>`
//         newTweet = tweet.substr(0, tweetLimit) + overTweetElement
//         readonly.style.zIndex = "1"
//         counter.style.color = "red"
//         tweetButton.classList.remove("active")
//     } else {
//         counter.style.color = "#333"
//         readonly.style.zIndex = "-5"
//     }
//     readonly.innerHTML = newTweet
// }


const textarea = document.querySelector(".textarea")
const button = document.querySelector(".button")
const proggress = document.querySelector('[role="progressbar"]')

textarea.addEventListener("keypress", (e) => {
    validate(e.target.value)
})

textarea.addEventListener("keyup", (e) => {
    validate(e.target.value)
})

let currentLimit = 100;

const validate = (e) => {
    const textLength = e.length

    const textLimit = 100
    currentLimit = textLimit - textLength

    if (textLength <= 0) {
        button.classList.remove("active")

    } else {
        button.classList.add("active")
        proggress.setAttribute("aria-valuenow", currentLimit)
        proggress.setAttribute("style", `--value:${currentLimit}`)
        proggress.style.background = `radial-gradient(closest-side, #232326 70%, transparent 0 99.9%, #232326 0), conic-gradient(var(--fg) calc(${currentLimit} * 1%), var(--bg) 0)`
    }
}

window.addEventListener('load', function () {
    proggress.setAttribute("style", `--value:${currentLimit}`)
    proggress.style.background = `radial-gradient(closest-side, #232326 70%, transparent 0 99.9%, #232326 0), conic-gradient(var(--fg) calc(${currentLimit} * 1%), var(--bg) 0)`
})