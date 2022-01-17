const input = document.querySelector("input");
const btn = document.querySelector("button");
const span = document.querySelector(".validity");

input.addEventListener("input", validateInput);
btn.addEventListener("click", submit);
input.addEventListener("focus", () => {
    input.setAttribute("placeholder", "Go on, input your email...");
});
input.addEventListener("blur", () => {
    input.setAttribute("placeholder", "Email Address");
});

function validateInput() {
    if (input.validity.typeMismatch) {
        span.textContent = "Please provide a valid email";
    } else if (input.value.length === 0) {
        span.textContent = "Please input your email";
    } else {
        span.textContent = "";
        return true;
    }
}

function submit(e) {
    if (!validateInput()) {
        e.preventDefault();
    }
}