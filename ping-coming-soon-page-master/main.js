let form = document.querySelector("form");
let label = document.querySelector("label");
let input = document.querySelector("input");
let errMessage = document.querySelector(".errMessage");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    setInputInvalid("Whoops! It looks like you forgot to add your email");
  } else if (!emailPattern.test(input.value)) {
    setInputInvalid("Please provide a valid email address");
  } else {
    form.submit();
  }
});

input.addEventListener("input", () => {
  if (emailPattern.test(input.value)) {
    setInputValid();
  }
});

function setInputInvalid(message) {
  label.classList.remove("border-blue/50");
  label.classList.add("border-light-red");

  errMessage.textContent = message;
  errMessage.classList.remove("hidden");
}

function setInputValid() {
  label.classList.remove("border-light-red");
  label.classList.add("border-blue/50");
  errMessage.classList.add("hidden");
}
