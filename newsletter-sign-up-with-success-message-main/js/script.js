
const form = document.querySelector("form");
const email = document.querySelector("#email");
const strong = document.querySelector("strong");
const textEmail = document.querySelector("#textEmail");



form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    if (emailValidation(email.value) !== true) {
        email.classList.add("error");
        textEmail.textContent = "Valid email required";
        email.style.webkitTextFillColor = 'hsl(4, 100%, 67%)';
        email.style.transition = 'background-color 5000s ease-in-out 0s';     
        email.style.webkitBoxShadow = '0 0 0px 1000px hsl(4, 100%, 67%, 0.3) inset';

    } else {
        window.location.href = 'success.html';    
        localStorage.setItem('email', email.value);
    }
});


email.addEventListener('keyup', (event) => {
    if (emailValidation(email.value) === true) {
        textEmail.textContent = "";
        email.style.transition = '';
        email.removeAttribute("class");
        email.style.webkitBoxShadow = '';
        email.style.webkitTextFillColor = '';
    }
});


function emailValidation(email) {
    const emailPattern = /^(?:[a-z0-9._-]{2,})@(?:[a-z0-9]{2,})\.(?:[a-z]{2,})(?:\.[a-z]{2,})?$/
    return emailPattern.test(email);
}