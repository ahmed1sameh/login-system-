var welcomname = document.getElementById('welcomname');
var logoutbtn= document.getElementById('logoutbtn')
if (localStorage.getItem('username') != null) {
    
    welcomname.innerHTML=`welcom ${localStorage.getItem('username')}`
}

function logout() {
    
    window.location.href='../index.html' ;
    localStorage.removeItem('username');

}

logoutbtn.addEventListener('click',logout );