const navClose = document.querySelector(".nav-close");
const navOpen = document.querySelector("#nav-open");
const navElement = document.querySelector("nav");

navOpen.addEventListener("click", function () {
    navElement.classList.remove("hide");
    navElement.classList.add("show");
});

navClose.addEventListener("click", function() {
    navElement.classList.remove("show");
    navElement.classList.add("hide");
})
