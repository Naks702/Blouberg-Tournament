
function formValidation(){
    isValid = true;
    let firstname =  document.getElementById("firstName").value;
    // let lastName =  document.getElementById("lastName").value;
    // let cellphone =  document.getElementById("cellphone").value;
    // let email   =  document.getElementById("email").value;
    let opt;
  switch(opt){
   case firstname.value;
  }
    
    if(firstname ==""){
      document.getElementById("validateFirstName").innerHTML = "enter first name"   
        isValid = false;
    }
    else if(lastName == ""){
       document.getElementById("validateLastName").innerHTML ="enter the last name";
        isValid = false;
    }
    //   if(cellphone == ""){
    //   document.getElementById("validateCellphone").innerHTML ="enter cellphone";
    //     isValid = false;
    // }
    //   if(email == ""){
    //    document.getElementById("validateEmail").innerHTML ="enter email";
    //     isValid = false;
    // }
    else
    {
        
    }

    return isValid;
}

// var form = document.getElementById("sponsorForm");
// async function formSubmit(params) {
//     params.preventDefault();
//     var status = document.getElementById("validateFirstName")
//     var data = new FormData(Event.target);
//     fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers:{
//             'Accept' : 'application/json'
//         }
//     }).then(Response =>{
//         if(Response.ok){
//             status.innerHTML ="Thank you for your submission, member of our staff will be in touch";
//         form.reset()  
//         }else{
//             Response.json().then(data =>{
//                 if(Object.hasOwn(data, "errors")){
//                  status.innerHTML = data['errors'].map(errors =>errors["message"].join(","))
//                 }else{
//                 status.innerHTML ="error submiting the form"
//                 }
//             })
//         }
      

//     }).catch(errors =>{
//         status.innerHTML ="error submiting the form"
//     })
// }
// form.addEventListener('submit', formSubmit)



