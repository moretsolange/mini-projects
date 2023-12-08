const buttons = document.querySelectorAll("button");

// button.onclick = function () {};

const buttonClickHandler = () => {
  alert("Button was clicked");
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};
/*
button.onclick = buttonClickHandler;
button.onclick = anotherButtonClickHandler;



button.addEventListener("click", buttonClickHandler);

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);
*/
buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
});

/*
listItems.forEach((listItem) => {
  listItem.addEventListener("click", (event) => {
    event.target.classList.toggle("highlight");
  });
});
*/
