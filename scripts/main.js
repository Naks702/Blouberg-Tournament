



function formValidation(){
let firstName = document.forms["sponsorForm"]["firstName"].value;
let lastName = document.forms["sponsorForm"]["lastName"].value;


// let cellphone = document.forms["sponsorForm"]["cellphone"].value;
// let email = document.forms["sponsorForm"]["email"].value;
if(firstName == ""){
    document.getElementById("validateFirstName").innerHTML ="Enter first name";
    return false;
}
if(lastName == ""){
   document.getElementById("validatelastName").innerHTML = "Enter last name";
   return false;
    
}


}


//testing if java is working



