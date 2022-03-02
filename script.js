const button = document.querySelector(".navButtonContainer")
button.addEventListener("click", function () {
    const header = document.querySelector("header")
    button.classList.toggle("buttonAnimation")
    header.classList.toggle("navAnimation")
    if (document.querySelector(".navAnimation")) {
        button.innerHTML = `<button class="navButton"><img src="./assets/down-arrow.png"></button>`
    } else {
        button.innerHTML = `<button class="navButton"><img src="./assets/cancel.png"></button>`
    }
    console.log(button)
})

const buttonSocial = document.querySelector(".socialsButton")
buttonSocial.addEventListener("click", function () {
    const socials = document.querySelector(".socialsList")
    buttonSocial.classList.toggle("socialButtonAnimation")
    socials.classList.toggle("socialAnimation")
    if (document.querySelector(".socialAnimation")) {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/next.png"></button>`
    } else {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/cancel.png"></button>`
    }
})
