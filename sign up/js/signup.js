

var signupname = document.getElementById('signupname') ;
var signupemail = document.getElementById('signupemail');
var signuppassword = document.getElementById('signuppassword');

var signupbtn = document.getElementById('signupbtn');
var paragrafOfDisplayNone = document.getElementById("paragrafOfDisplayNone")
var cartona =[]


if (localStorage.getItem("userData") != null) {
    
    cartona = JSON.parse( localStorage.getItem("userData"))
}

function signup (){

    var data = {
       
        name : signupname.value ,
        email : signupemail.value ,
        password :  signuppassword.value ,

    }

    if (chickIfInputIsEmtey() == true) {

        paragraf( "All inputs is required", "red")  ;        

    }

    else{

        if (checkemail() == true) {

            paragraf( "Email Already Exist ", "red")  ;        
            
        }else{

            cartona.push(data);
        
            localStorage.setItem("userData" , JSON.stringify(cartona)) ;
            clrform() ; 
        
            paragraf("success" , "green" )  ;

        }

    }

   
}

signupbtn.addEventListener("click" , signup ) ;


function paragraf(text,color){

    paragrafOfDisplayNone.classList.replace("d-none" ,"d-block");
    paragrafOfDisplayNone.innerHTML= text  ;
    paragrafOfDisplayNone.style.color= color ;
}

function clrform(){

    signupname.value='' ;
    signupemail.value='' ; 
    signuppassword.value='' ;


}

function chickIfInputIsEmtey(){

    if (signupname.value =='' || signupemail.value =='' || signuppassword.value =='' ) 
        return true 
    else
        return false 

    
}

function checkemail(){

    for (let i = 0; i < cartona.length; i++) {
        

        if (cartona[i].email == signupemail.value ) {

            return true ;
        }else{
            return false ;
        }
    }
}
