const questions = document.querySelectorAll(".questions");

const p1 = document.querySelector("#question1 p");
const img1 = document.querySelector("#question1 img");

const p2 = document.querySelector("#question2 p");
const img2 = document.querySelector("#question2 img");

const p3 = document.querySelector("#question3 p");
const img3 = document.querySelector("#question3 img");

const p4 = document.querySelector("#question4 p");
const img4 = document.querySelector("#question4 img");


questions.forEach((question) => {
    console.log(question);
    question.addEventListener("click", e => {

        const id = question.getAttribute("id");

        if(id === "question1"){
            if(p1.getAttribute("hidden")){
                p1.removeAttribute("hidden");
                img1.setAttribute("src", "assets/images/icon-minus.svg");

            }else{
                p1.setAttribute("hidden", "hidden");
                img1.setAttribute("src", "assets/images/icon-plus.svg");
            }
        }

        if(id === "question2"){
            if(p2.getAttribute("hidden")){
                p2.removeAttribute("hidden");
                img2.setAttribute("src", "assets/images/icon-minus.svg");
            }else{
                p2.setAttribute("hidden", "hidden");
                img2.setAttribute("src", "assets/images/icon-plus.svg");
            }
        }

        if(id === "question3"){
            if(p3.getAttribute("hidden")){
                p3.removeAttribute("hidden");
                img3.setAttribute("src", "assets/images/icon-minus.svg");
            }else{
                p3.setAttribute("hidden", "hidden");
                img3.setAttribute("src", "assets/images/icon-plus.svg");
            }
        }

        if(id === "question4"){
            if(p4.getAttribute("hidden")){
                p4.removeAttribute("hidden");
                img4.setAttribute("src", "assets/images/icon-minus.svg");
            }else{
                p4.setAttribute("hidden", "hidden");
                img4.setAttribute("src", "assets/images/icon-plus.svg");
            }
        }
    })
});