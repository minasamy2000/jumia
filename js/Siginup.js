
var sub=document.getElementById("submit")
sub.onclick=function(){
 var username=document.getElementById("username").value
var Email=document.getElementById("Email").value
var password=document.getElementById("password").value
var confirm=document.getElementById("confirmPass").value
var text=document.getElementById("text")
if(username=="" || Email=="" || password=="" || confirm == "")
{
    text.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert" >
    <p>Please Fill Data</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}
else if (username<=3)
{
text.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
<p>Please Enter Your Name First</p>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}

else if(Email.indexOf('@')==-1 || Email.indexOf('.com')==-1)
{
   
    text.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <P>Not Valid Email</P>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}

else if(password !=confirm)
{
    text.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
     Password Dosesnt Match
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}
else  {
    var user=[
        {
      
            userName:username,
            email:Email,
            Password:password,
            confirm:confirm
        }
    ]
    
  localStorage.setItem(localStorage.length+1,JSON.stringify(user))
  text.innerHTML=`<div class="alert alert-info alert-dismissible fade show" role="alert">
  <p>Sign Up Done</P>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
setTimeout(() => {
  window.location.href="../html/login.html"
  
}, 2000);


}


}


