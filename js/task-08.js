const userForm = document.querySelector(".login-form")

const userEmail = userForm.elements.email;

const userPassword = userForm.elements.password;




userForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    if (userEmail.value === "" || userPassword.value === "") {
        alert ("Всі поля мають бути заповнені")
    } else {
        const formValue = {
            email: userEmail.value,
            password: userPassword.value,
        }
        console.log(formValue)
        userForm.reset()
    }
}


