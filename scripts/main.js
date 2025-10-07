
function formValidation(){
    isValid = true;
    let firstname =  document.getElementById("firstName").value.trim();
    let lastName =  document.getElementById("lastName").value.trim();
    let cellphone =  document.getElementById("cellphone").value.trim();
    let email   =  document.getElementById("email").value.trim();

     document.getElementById("validateFirstName").innerHTML = "";
     document.getElementById("validateLastName").innerHTML ="";
     document.getElementById("validateCellphone").innerHTML = "";
     document.getElementById("validateEmail").innerHTML="";
  
    if(firstname ==""){
      document.getElementById("validateFirstName").innerHTML = "enter first name"   
        isValid = false;
    }
    else if(lastName == ""){
       document.getElementById("validateLastName").innerHTML ="enter the last name";
        isValid = false;
    }
      else if(cellphone == "" || cellphone.length !=10 || isNaN(cellphone)){
      document.getElementById("validateCellphone").innerHTML ="enter  valid cellphone";
        isValid = false;
    }
      else if(email == "" || !email.includes("@") || !email.includes(".com") || email.indexOf("@") ==0){

       document.getElementById("validateEmail").innerHTML ="enter valid email";
        isValid = false;
    }
    else
    {
        
    }

    return isValid;
}

document.getElementById("sponsorForm").addEventListener("submit", function(e){
  e.preventDefault();
  console.log("form submited")
  //if validation fail

  if(!formValidation()) return;
    let firstname =  document.getElementById("firstName").value;
    let lastName =  document.getElementById("lastName").value;
    let cellphone =  document.getElementById("cellphone").value;
    let email   =  document.getElementById("email").value;


    fetch("submit.php",{
      method: "POST", 
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        firstname:firstname,
        lastName:lastName,
        cellphone:cellphone,
        email:email,
      }),
      
    })
    .then((response) =>response.json())
    .then((data)=>{
      document.getElementById("error").innerHTML = 
      "Form was submitted successfully"+"<br>"+
      "First Name:" +data.firstname +"<br>"+
      "Last Name:" +data.lastName + "<br>"+
      "Email:" +data.email +"<br>"+
      "cellphone" + data.cellphone +"<br>"
    })
    .catch(error=>{
      document.getElementById("error").innerHTML ="error submitting your info" +error;
    })
})