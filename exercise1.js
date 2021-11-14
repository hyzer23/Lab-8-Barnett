function checkPassword() {
    let password1 = document.getElementById("p1").value;
    let password2 = document.getElementById("p2").value;

    if(password1.length < 8 || password2.length < 8) {
        alert("Password is too short! Password length needs to be a minimum of 8 characters");
    }
    else if(password1 != password2){
        alert("Passwords do not match! Please try again.");
    }
    else {
        alert("Password accepted.");
    }
}