const summary = document.querySelector("#summary");
const button  = document.querySelector("#summary button");

console.log(summary);


async function datas() {
    
    const response = await fetch('../data.json');
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.map((cat) => {

        const div     = document.createElement("div");
        const strong  = document.createElement("strong");
        const span1   = document.createElement("span");
        const span2   = document.createElement("span");
        const p       = document.createElement("p");
        const img     = document.createElement("img");
        const space   = document.createElement("div");
        
        div.id  = (`${cat.category}`).toLowerCase();
        div.classList = "categories";
        
        img.setAttribute("src", `${cat.icon}`);
        
        strong.innerText = cat.category;
        
        space.classList = `space`;
        
        span1.innerText = cat.score;
        span1.classList = "spanColor";

        span2.innerText = ` / 100 `;
        

        p.appendChild(span1);
        p.appendChild(span2);

        div.appendChild(img);
        div.appendChild(strong);
        div.appendChild(space);
        div.appendChild(p)
        
        summary.insertBefore(div, button);
    });
 }

datas();
