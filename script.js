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

const buttonS = document.querySelector(".navButtonS")
const pNavS = document.querySelector(".pnHiddenS")
buttonS.addEventListener("click", function () {
    const mobileNav = document.querySelector(".navListContainerS")
    buttonS.classList.toggle("buttonAnimationS")
    mobileNav.classList.toggle("navAnimationS")
    pNavS.classList.toggle("pnVisibleS")
    if (document.querySelector(".navAnimationS")) {
        buttonS.innerHTML = `<button class="navButtonS"><img class="arrowNav" src="./assets/down-arrow.png"></button>`
    } else {
        buttonS.innerHTML = `<button class="navButtonS"><img src="./assets/cancel.png"></button>`
    }
})











const pSocial = document.querySelector(".pHidden")
const buttonSocial = document.querySelector(".socialsButton")
buttonSocial.addEventListener("click", function () {
    const socials = document.querySelector(".socialsList")
    buttonSocial.classList.toggle("socialButtonAnimation")
    socials.classList.toggle("socialAnimation")
    pSocial.classList.toggle("pVisible")

    if (document.querySelector(".socialAnimation")) {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/next.png"></button>`
    } else {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/cancel.png"></button>`
    }
})


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
    boxClosed.addEventListener("mouseout", function() {
        boxClosed.style.display = "none"
        boxOpen.style.opacity = "0"
        setTimeout(function () {
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
})

const buttonForm = document.querySelector(".buttonInputClear")
buttonForm.addEventListener("click", function(e) {
    e.preventDefault()
    document.querySelector(".textarea").value = ""
    document.querySelector(".nameInput").value = ""
    document.querySelector(".emailInput").value = ""
    
})
const buttonSubmit = document.querySelector(".buttonInputSend")
buttonSubmit.addEventListener("click", function(e) {
    e.preventDefault()
})


if (window.innerWidth <= 900) {
    const socials = document.querySelector(".socialsList")
    buttonSocial.classList.add("socialButtonAnimation")
    socials.classList.add("socialAnimation")
    pSocial.classList.add("pVisible")

    if (document.querySelector(".socialAnimation")) {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/next.png"></button>`
    } else {
        buttonSocial.innerHTML = `<button class="socialsButton"><img src="./assets/cancel.png"></button>`
    }

} else {

}



// const span = document.querySelector(".copyTest");

// span.onclick = function () {
//     document.execCommand("copy");
// }

// span.addEventListener("copy", function (event) {
//     event.preventDefault();
//     if (event.clipboardData) {
//         event.clipboardData.setData("text/plain", span.textContent);
//         console.log(event.clipboardData.getData("text"))
//     }
// });





// window.addEventListener('scroll', function () {
//     // scroll down

// });


// let lastScroll = 0;
// let scrollTimer = 0;
// let lastScrollFireTime = 0;

// window.addEventListener('wheel', function (e) {

//     // const minScrollTime = 5000;
//     // const now = new Date().getTime();

//     // function processScroll() {
//     //     console.log(new Date().getTime().toString());
//     //     if (lastScroll < window.pageYOffset) {
//     //         window.scrollBy(0, window.innerHeight);
//     //     }
//     //     // scroll up
//     //     else if (lastScroll > window.pageYOffset) {
//     //         window.scrollBy(0, window.innerHeight * -1);
//     //     }
//     //     lastScroll = window.pageYOffset;
//     // }

//     // if (!scrollTimer) {
//     //     if (now - lastScrollFireTime > (3 * minScrollTime)) {
//     //         processScroll();   // fire immediately on first scroll
//     //         lastScrollFireTime = now;
//     //     }
//     //     scrollTimer = setTimeout(function () {
//     //         scrollTimer = null;
//     //         lastScrollFireTime = new Date().getTime();
//     //         processScroll();
//     //     }, minScrollTime);
//     // }
//     console.log(e)
// });