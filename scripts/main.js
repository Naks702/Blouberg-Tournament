
// function formValidation(){
//     isValid = true;
//     let firstname =  document.getElementById("firstName").value;
//     let lastName =  document.getElementById("lastName").value;
//     let cellphone =  document.getElementById("cellphone").value;
//     let email   =  document.getElementById("email").value;
  
//     if(firstname ==""){
//       document.getElementById("validateFirstName").innerHTML = "enter first name"   
//         isValid = false;
//     }
//     else if(lastName == ""){
//        document.getElementById("validateLastName").innerHTML ="enter the last name";
//         isValid = false;
//     }
//       else if(cellphone == "" || cellphone.length !=10){
//       document.getElementById("validateCellphone").innerHTML ="enter  valid cellphone";
//         isValid = false;
//     }
//       else if(email == "" || !email.includes("@") || !email.includes(".com") || email.indexOf("@") ==0 || !email.includes(".za") ){

//        document.getElementById("validateEmail").innerHTML ="enter valid email";
//         isValid = false;
//     }
//     else
//     {
        
//     }

//     return isValid;
// }

document.getElementById("sponsorForm").addEventListener("submit", function(e){
  e.preventDefault();
    let firstname =  document.getElementById("firstName").value;
    let lastName =  document.getElementById("lastName").value;
    let cellphone =  document.getElementById("cellphone").value;
    let email   =  document.getElementById("email").value;


    fetch("https://jsonplaceholder.typicode.com/posts",{
      method: "POST", 
      headers:{"Content-Type":"application"},
      body:JSON.stringify({
        firstname:firstname,
        lastName:lastName,
        cellphone:cellphone,
        email:email,
      }),
      
    })
    .then((Response) =>Response.json())
    .then((data)=>{
      document.getElementById("error").innerHTML = 
      "Form was submitted successfully"+
      "First Name:" +data.firstname +"<br>"+
      "Last Name:" +data.lastName + "<br>"+
      "Email:" +data.email +"<br>"+
      "cellphone" + data.cellphone +"<br>"
    })
    .catch((error)=>{
      document.getElementById("error").innerHTML ="error submitting your info" +error;
    })
})