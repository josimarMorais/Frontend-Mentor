const email = localStorage.getItem('email');
strong = document.querySelector("strong");
strong.textContent = email;

function deslogar( ){
    localStorage.removeItem('email');
    window.location.href = "index.html";
}