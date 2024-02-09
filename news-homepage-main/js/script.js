fade = document.querySelector("#fade");
ul   = document.querySelector("#ul");
img  = document.querySelector("#img-menu");


const toggleModal = () => {
    [fade, ul].forEach((element) => element.classList.toggle("hide"));
    img.classList.toggle("menu");
    ul.style.transition = "0.4s";
}


[fade, img].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
})
   