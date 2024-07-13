const input = document.getElementById("input-box");

function reverseString(text) {
    return text.split().reverse().join();
}

function isPalindorme() {
    const text = input.value;
    const reversedText = reverseString(text);

    if (text === reversedText) {
        alert("It is the Palindorme.");
    } else {
        alert("Not the Palindorme.");
    }
}