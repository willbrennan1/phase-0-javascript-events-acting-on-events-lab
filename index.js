// Your code here
const dodger = document.getElementById('dodger');

// console.log(dodger);

dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "100px";
// dodger.style.right = "0px";

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    });

function moveDodgerLeft() {

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}