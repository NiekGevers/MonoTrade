// xxxxxxxxxx Name Validation xxxxxxxxxx
function checkUserFullName(){
    var userFullName = document.getElementById("userFullName").value;
    var flag = false;
    if(userFullName === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userFullNameError").style.display = "block";
    }else{
        document.getElementById("userFullNameError").style.display = "none";
    }
}
// xxxxxxxxxx Surname Validation xxxxxxxxxx
function checkUserSurname(){
    var userSurname = document.getElementById("userSurname").value;
    var flag = false;
    if(userSurname === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userSurnameError").style.display = "block";
    }else{
        document.getElementById("userSurnameError").style.display = "none";
    }
}
// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkUserEmail(){
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = false;
    if(userEmail.value.match(userEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userEmailError").style.display = "block";
    }else{
        document.getElementById("userEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkUserPassword(box){
    var userPassword = document.getElementById("userPassword"+box);
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userPassword.value.match(userPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userPasswordError"+box).style.display = "block";
    }else{
        document.getElementById("userPasswordError"+box).style.display = "none";
    }
}
// xxxxxxxxxx Bio Validation (can be empty so does nothing) xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(userBio === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = false;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("Home").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var userPfFullName = document.getElementById("userPfFullName").innerHTML;
    var userPfSurname = document.getElementById("userPfSurname").innerHTML;
    var userPfBio = document.getElementById("userPfBio").innerHTML;
    document.getElementById("userFullName").value = userPfFullName; 
    document.getElementById("userSurname").value = userPfSurname;  
    document.getElementById("userBio").value = userPfBio; 
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("Home").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}

function toastShow(type, mess) {
    var toast_options = {
        animation : true,
        delay : 5000
    };
    var toastHTMLelem = document.getElementById("liveToast");
    var toastImg = document.getElementById("toastImg")
    document.getElementById("toastMess").innerHTML = mess
    var img_src = (type == "succes" ? "../images/check-circle-fill.svg" : "../images/x-circle-fill.svg")
    if (type == "success") {
        img_src = "../images/check-circle-fill.svg"
    } else if (type == "error") {
        img_src = "../images/x-circle-fill.svg"
    } else if (type == "warning") {
        img_src = "../images/warn-circle-fill.svg"
    } else if (type == "info") {
        img_src = "../images/info-circle-fill.svg"
    } else {
        swal({
            type: 'error',
            title: 'Error',
            text: "invalid toast image type",
        })
    }
    toastImg.setAttribute("src", img_src)

    var toastElem = new bootstrap.Toast(toastHTMLelem, toast_options);
    toastElem.show()
}