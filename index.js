let subBtn = document.querySelector(".sub-btn");
let form = document.querySelector(".form-design")
let alert = document.querySelector(".alert")

form.addEventListener("submit", function(event){
    let password = document.getElementById('password').value; 
    let confirmPassword = document.getElementById('confirm-password').value;
    if(password !== confirmPassword){
        alert.textContent = `* Passwords do not match`
        event.preventDefault();
    }
})

// subBtn.addEventListener('click',matchPassword);