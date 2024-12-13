var Email1 = document.getElementById("LoginEmail");
var Password1 = document.getElementById("LoginPassword");
var Login_List = []


function Validation1() {
    var dataError = document.getElementById("DataError");
    if (ValidateEmail1() && ValidatePassword1() === true) {
        dataError.classList.add("d-none")
        var data = {
            email: Email1.value,
            password: Password1.value,
        };
        Login_List.push(data);

        localStorage.setItem("Login_List", JSON.stringify(Login_List))
        Clear1()

    }
    else {
        dataError.classList.remove("d-none")
    }
}

function Clear1() {
    Email1.value = "";
    Password1.value = "";
    Email1.classList.remove("is-valid");
    Password1.classList.remove("is-valid");

    document.addEventListener("click", function () {
        window.location.href = "index3.html";
    })
}

function ValidateEmail1() {
    var regexEmail = /^[a-zA-Z]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (regexEmail.test(Email1.value)) {
        Email1.classList.add("is-valid");
        Email1.classList.remove("is-invalid");
        return true;
    }
    else {
        Email1.classList.remove("is-valid");
        Email1.classList.add("is-invalid");
        return false;
    }
}
function ValidatePassword1() {
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (regexPassword.test(Password1.value)) {
        Password1.classList.add("is-valid");
        Password1.classList.remove("is-invalid");
        return true;
    }
    else {
        Password1.classList.remove("is-valid");
        Password1.classList.add("is-invalid");
        return false;
    }
}



// Validation Sign Up
var Name = document.getElementById("SignInName");
var Email2 = document.getElementById("SignInEmail");
var Password2 = document.getElementById("SignInPassword");
var SignUp_List = []


function Validation2(){
    var dataError = document.getElementById("DataError");
    var feedback = document.getElementById("FeedBack");
    if(ValidateName() && ValidateEmail2() && ValidatePassword2() === true){
        dataError.classList.add("d-none")
        var data = {
            name : Name.value,
            email: Email2.value,
            password: Password2.value,
        };
        if (localStorage.getItem("SignUp_List") === data){
            dataError.classList.remove("d-none")
        }
        else{
            SignUp_List.push(data);
            localStorage.setItem("SignUp_List", JSON.stringify(SignUp_List))
            Clear2()
            feedback.classList.remove("d-none")
        }
    }
    else{
        dataError.classList.remove("d-none")
    }
}

function Clear2(){
    Name.value = "";
    Email2.value = "";
    Password2.value = "";
    Name.classList.remove("is-valid");
    Email2.classList.remove("is-valid");
    Password2.classList.remove("is-valid");
}

function ValidateName(){
    var regexName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$|.{3,30}$/

    if(regexName.test(Name.value)){
        Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
        return true;
    }
    else{
        Name.classList.remove("is-valid");
        Name.classList.add("is-invalid");
        return false;
    }
}

function ValidateEmail2(){
    var regexEmail = /^[a-zA-Z]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(regexEmail.test(Email2.value)){
        Email2.classList.add("is-valid");
        Email2.classList.remove("is-invalid");
        return true;
    }
    else{
        Email2.classList.remove("is-valid");
        Email2.classList.add("is-invalid");
        return false;
    }
}

function ValidatePassword2(){
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(regexPassword.test(Password2.value)){
        Password2.classList.add("is-valid");
        Password2.classList.remove("is-invalid");
        return true;
    }
    else{
        Password2.classList.remove("is-valid");
        Password2.classList.add("is-invalid");
        return false;
    }
}



(function Display() {
    var mydata = " ";
    mydata += "<h1> Welcome ${Name.value} </h1>";
    document.getElementById("hello").innerHTML = mydata; 
})();
document.getElementById("ClickBTN").onclick = function() {
    window.location.href = "index.html"; 
};