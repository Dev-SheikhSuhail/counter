let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const classes = evt.currentTarget.classList;
    if (classes.contains("increase")) {
      count++;
    } else if (classes.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    //Applying Colors To The Value
    if (count > 0) {
      value.style.color = "yellow";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }

    value.innerText = count;
  });
});
