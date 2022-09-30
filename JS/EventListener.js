const view = document.querySelector("#view2");
// console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// syntax: addEventListener()
const doSomething = () => {
    alert("Doing something");
}


// h2.addEventListener("click",doSomething, false); // false is default

h2.addEventListener("click",(event) => {
    console.log(event.target);
    textContent = "Clicked";
});