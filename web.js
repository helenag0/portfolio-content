var text = document.querySelector(".jstext");
var strText = text.textContent;
var splitText = strText.split("");
var originalText = document.querySelector(".jstext");

// console.log(splitText)


// function mouseOverHeader() {
//     console.log("mouse over")
//     text.textContent = "";
//     for(let i=0; i < splitText.length; i++) {
//         text.innerHTML += "<span class='jsspan'>" + splitText[i] + "</span";
//     }
//     let char = 0;
//     let timer = setInterval(onTick, 50);

//     function onTick() {
//         const span = text.querySelectorAll('span')[char];
//         span.classList.add('fade');
//         char++
//         if(char == splitText.length) {
//             complete();
//             return;
//         }
//     }

//     function complete() {
//         clearInterval(timer);
//         timer = null;
//     }
// }

console.log("mouse over")
text.textContent = "";
for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span class='jsspan'>" + splitText[i] + "</span";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char == splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

function mouseOutHeader() {
    console.log("mouse out")
    document.querySelector(".jstext").textContent = strText;
}


text.addEventListener('click', mouseOutHeader);

// text.addEventListener('mouseover', mouseOverHeader);
// text.addEventListener('click', mouseOverHeader);
// text.addEventListener('mouseout', mouseOutHeader);
