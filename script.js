// this handles my slideout nav button on larger screens
const button = document.querySelector(".navButtonContainer")
const pNav = document.querySelector(".pnHidden")
button.addEventListener("click", function () {
    const header = document.querySelector("header")
    button.classList.toggle("buttonAnimation")
    header.classList.toggle("navAnimation")
    pNav.classList.toggle("pnVisible")
    if (document.querySelector(".navAnimation")) {
        button.innerHTML = `<button class="navButton"><img src="./assets/down-arrow.png"></button>`
    } else {
        button.innerHTML = `<button class="navButton"><img src="./assets/cancel.png"></button>`
    }
})
// this handles my slideout nav button on smaller screens
const buttonS = document.querySelector(".navButtonS")
const pNavS = document.querySelector(".pnHiddenS")
buttonS.addEventListener("click", function () {
    const mobileNav = document.querySelector(".navListContainerS")
    buttonS.classList.toggle("buttonAnimationS")
    mobileNav.classList.toggle("navAnimationS")
    pNavS.classList.toggle("pnVisibleS")
    if (document.querySelector(".navAnimationS")) {
        buttonS.innerHTML = `<button class="navButtonS"><img class="arrowNav" src="./assets/leftArrow.png"></button>`
    } else {
        buttonS.innerHTML = `<button class="navButtonS"><img src="./assets/cancel.png"></button>`
    }
})
// a function that loops images to create my welcome screen image
let picNum = 1
let pic = document.querySelector('.welcomeLoop')
function loopImage() {
    if (picNum <= 21) {
        pic.src = `./assets/welcomeweb${picNum}.png`
        picNum++             
    } else {
        picNum = 1
    }
    setTimeout(loopImage, 500)
}
loopImage()

// this is for my header name/phone number
const phoneSpan = document.querySelector(".navTitle")
phoneSpan.addEventListener("click", function() {
    const navTitle = document.querySelector(".nameVisible")
    navTitle.classList.toggle("namePhone")
        if (document.querySelector(".namePhone")) {
            navTitle.innerHTML = `<span class="navPhone"><img src="./assets/pencil.png" alt=""></span>905 - 929 - 5059` 
        } else {
            navTitle.innerHTML = `<span class="navPhone"><img src="./assets/phone.png" alt=""></span>Stojanco (<span class="koki">Koki</span>) Vasileski` 
        }
})
// this handles the box animation under my skills section
const boxOpen = document.querySelector(".boxOpen")
const boxClosed = document.querySelector(".boxClosed")
const imageAccessibility = document.querySelector(".imageAc")
const imageResponsive = document.querySelector(".imageRe")
const imageDebug = document.querySelector(".imageDe")
const titleBox = document.querySelector(".titleHidden")
const paragraphBox = document.querySelector(".paragraphHidden")
const designBox = document.querySelector(".designHidden")
const arrowConnect = document.querySelector(".arrowConnect")
const boxSign = document.querySelector(".boxSign")
boxClosed.addEventListener("click", function() {
    boxSign.classList.add("boxSignHide")
    titleBox.classList.remove("hiddenBoxText")
    boxClosed.classList.add("boxFade")
    boxOpen.classList.remove("boxAppear")
    imageAccessibility.classList.add("hiddenA")
    imageResponsive.classList.add("hiddenR")
    imageDebug.classList.add("hiddenD")

        boxClosed.style.display = "none"
        setTimeout(function () {
            boxOpen.style.opacity = "0"
            paragraphBox.classList.remove("hiddenBoxText")
            designBox.classList.remove("hiddenBoxText")
            imageAccessibility.classList.add("finalA")
            imageResponsive.classList.add("finalR")
            imageDebug.classList.add("finalD")
        }, 800)
        setTimeout(function(){
            boxOpen.style.display = "none"
        }, 1000)

})

const buttonSubmit = document.querySelector(".buttonInputSend")
const nameInput = document.querySelector("input[type=name]")
const emailInput = document.querySelector("input[type=email]")
const messageInput = document.querySelector("textarea")
buttonSubmit.addEventListener("click", function(e) {

    if (nameInput.value === "") {
        e.preventDefault()
        console.log("click")
        alert("Please enter a name before submitting the form")
        console.log(nameInput)
    } else if (emailInput.value === "") {
        e.preventDefault()
        alert("Please enter your e-mail before submitting the form")
    } else if (messageInput.value === "") {
        e.preventDefault()
        alert("Please enter a message before submitting the form")
    } else {

    }
})