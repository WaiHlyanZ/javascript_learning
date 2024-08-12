const number = document.getElementById("number");

let count = 0;

function display() {
    number.innerHTML = count

    if (count < 0) {
        number.style.color = "red";
    } else if (count > 0) {
        number.style.color = "green";
    } else {
        number.style.color = "black";
    }

};

function increase() {
    count++;
    display()
};

function decrease() {
    count--;
    display()
};

function reset() {
    count = 0;
    display()
};

