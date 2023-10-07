(function() {
    const form = document.querySelector("form");
    const email = document.getElementById("mail");
    const zip = document.getElementById("zipCode");
    const pass = document.getElementById("password");
    const passConf = document.getElementById("confPassword");
    const emailError = document.querySelector("#mail + span.error");
    const zipError = document.querySelector("#zipCode + span.error");
    const passError = document.querySelector("#password + span.error");
    const passConfError = document.querySelector("#confPassword + span.error");

    form.addEventListener("submit", (e) => {
        if(!email.validity.valid || !zip.validity.valid || !pass.validity.valid || !pass.validity.valid) {
            showError("form")
            e.preventDefault();
        }
    })

    email.addEventListener("change", () => {
        if (email.validity.valid){
            emailError.textContent = ""
        }else{
            showError("email")
        }
    })

    zip.addEventListener("change", () => {
        if(zip.validity.valid){
            zipError.textContent = ""
        }else{
            showError("zip")
        }
    })

    pass.addEventListener("change", () =>{
        if(pass.validity.valid){
            passError.textContent = ""
        }else{
            showError("pass")
        }
    })

    passConf.addEventListener("change", () => {
        if(pass.value === passConf.value){
            passConfError.textContent = ""
        }else{
            showError("passConf")
        }
    })

    const showError = (errorType) => {
        if(errorType === "email" || errorType === "form"){
            if (email.validity.valueMissing){
                emailError.textContent = "You need to enter an email address."
            }else if (email.validity.typeMismatch){
                emailError.textContent = "Please enter a valid email address.";
            }
        }if(errorType === "zip" || errorType === "form"){
            if(zip.validity.valueMissing){
                zipError.textContent = "Please enter a Zip-Code"
            }else if(!zip.checkValidity()){
                zipError.textContent = "Please enter a valid Zip-Code"
            }
        }if (errorType === "pass" || errorType === "form"){
            if(pass.validity.valueMissing){
                passError.textContent = "Please enter a password"
            }else if (!pass.checkValidity()){
                passError.textContent = "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
            }
        }if(errorType == "passConf" || errorType === "form"){
            if(passConf.validity.valueMissing){
                passConfError.textContent = "Please re-enter password"
            }else if (pass.value !== passConf.value){
                passConfError.textContent = "Password doesn't match"
            }
        }
    } 
})();