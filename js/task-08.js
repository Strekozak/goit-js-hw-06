const userForm = document.querySelector(".login-form")
console.dir(userForm)
const email = userForm.elements.email;
console.dir(email)

const password = userForm.lastChild.value;

userForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    
}


