const navClose = document.querySelector(".nav-close");
const navOpen = document.querySelector("#nav-open");
const navElement = document.querySelector("nav");
const cardExpandBaisc = document.querySelector("#cardExpandBasic");
const cardCloseBasic = document.querySelector("#cardCloseBasic");
const cardExpandStandard = document.querySelector("#cardExpandStandard");
const cardCloseStandard = document.querySelector("#cardCloseStandard");
const cardExpandPremium = document.querySelector("#cardExpandPremium");
const cardClosePremium = document.querySelector("#cardClosePremium");
const packageBodyBasic = document.querySelector("#packageBodyBasic");
const packageBodyStandard = document.querySelector("#packageBodyStandard");
const packageBody = document.querySelector("#packageBodyPremium");
const ratesArea = document.querySelector(".rates-area")


navOpen.addEventListener("click", function () {
    navElement.classList.remove("hide");
    navElement.classList.add("show");
});

navClose.addEventListener("click", function () {
    navElement.classList.remove("show");
    navElement.classList.add("hide");
})

cardExpandBaisc.addEventListener('click', function () {
    cardExpandBaisc.style.display = "none";
    cardCloseBasic.style.display = "block";
    packageBodyBasic.style.display = "block";
    checkExpand();
})

cardExpandStandard.addEventListener('click', function () {
    cardExpandStandard.style.display = "none";
    cardCloseStandard.style.display = "block";
    packageBodyStandard.style.display = "block";
    checkExpand();
})

cardExpandPremium.addEventListener('click', function () {
    cardExpandPremium.style.display = "none";
    cardClosePremium.style.display = "block";
    packageBodyPremium.style.display = "block";
    checkExpand();
})

cardCloseBasic.addEventListener('click', function () {
    cardExpandBaisc.style.display = "block"
    cardCloseBasic.style.display = "none";
    packageBodyBasic.style.display = "none";
})

cardCloseStandard.addEventListener('click', function () {
    cardExpandStandard.style.display = "block";
    cardCloseStandard.style.display = "none";
    packageBodyStandard.style.display = "none";
})

cardClosePremium.addEventListener('click', function () {
    cardExpandPremium.style.display = "block";
    cardClosePremium.style.display = "none";
    packageBodyPremium.style.display = "none";
})
