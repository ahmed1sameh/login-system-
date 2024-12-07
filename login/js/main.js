
var loginemail = document.getElementById("loginemail") ;
var loginpassword = document.getElementById("loginpassword") ;
var loginbtn = document.getElementById("loginbtn") ;
var paragrafOfDisplayNone =document.getElementById("paragrafOfDisplayNone");

var cartona = []


if(localStorage.getItem("userData") != null){

    cartona = JSON.parse(localStorage.getItem('userData'))
}
function loginfunction(){
    if (chickIfInputIsEmtey() ==true) {
        paragraf("All inputs Required  ", "red")

    }else{

        if(checkifEmailistrue()== true){
    
            window.location.href='home/home.html' ;
    
        }else{
    
            paragraf("Email or password not correct ", "red")
    
    
        }
    }
    

}

function paragraf(text,color){

    paragrafOfDisplayNone.classList.replace("d-none" ,"d-block");
    paragrafOfDisplayNone.innerHTML= text  ;
    paragrafOfDisplayNone.style.color= color ;
}

function checkifEmailistrue (){

    for (let i = 0; i < cartona.length; i++) {
        
        if (cartona[i].email == loginemail.value &&cartona[i].password == loginpassword.value   ) {
            localStorage.setItem("username" , cartona[i].name)
            return true ; 
        }
    }
}


loginbtn.addEventListener("click" ,loginfunction )

function chickIfInputIsEmtey(){

    if (loginemail.value =='' || loginpassword.value ==''  ) 
        return true 
    else
        return false 

    
}

