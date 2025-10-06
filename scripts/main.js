
function formValidation(){
    isValid = true;
    let firstname =  document.getElementById("firstName").value;
    let lastName =  document.getElementById("lastName").value;
    let cellphone =  document.getElementById("cellphone").value;
    let email   =  document.getElementById("email").value;
  
    if(firstname ==""){
      document.getElementById("validateFirstName").innerHTML = "enter first name"   
        isValid = false;
    }
    else if(lastName == ""){
       document.getElementById("validateLastName").innerHTML ="enter the last name";
        isValid = false;
    }
      else if(cellphone == "" || cellphone.length !=10){
      document.getElementById("validateCellphone").innerHTML ="enter  valid cellphone";
        isValid = false;
    }
      else if(email == "" || !email.includes("@") || !email.includes(".com") || email.indexOf("@") ==0 || !email.includes(".za") ){

       document.getElementById("validateEmail").innerHTML ="enter valid email";
        isValid = false;
    }
    else
    {
        
    }

    return isValid;
}




