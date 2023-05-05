var nameError=document.getElementById("name");
var emailError=document.getElementById("email");
var submitError=document.getElementById("submit-error");
function validateName(){
    var name1=document.getElementById("contact-name").value;
    if (name1.length==0){
        nameError.innerHTML="name is required";
        return false;
    }
    if(!name1.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Full name";
        return false;
    }
    else{
        nameError.innerHTML="";
        return true;
}
}
function validateEmail(){
    var email1 =document.getElementById("text1").value;
    if(email1.length==0){
        emailError.innerHTML="email is required";
        return false;
    }
    if(!email1.match(/^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/)){
        emailError.innerHTML="Email is invalid";
        return false;
    }
    emailError.innerHTML="";
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail()){
        submitError.style.display='block';
        submitError.innerHTML="Please fill";
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}