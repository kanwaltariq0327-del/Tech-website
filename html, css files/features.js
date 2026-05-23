const featuresButtons = document.querySelectorAll("#button");


const arrow = document.querySelector(".down-arrow")


arrow.addEventListener("click", () => {
    featuresButtons.forEach(button => {
        button.classList.toggle("show-buttons" && "active");
        console.log(button.classList.toggle("show-buttons"));
    })
})

const parent = document.querySelector(".features-mid");
const btn = document.querySelector("#button");

btn.addEventListener('click', () => {
    parent.prepend(btn);
})
