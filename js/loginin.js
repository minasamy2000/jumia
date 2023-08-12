
  var sub = document.getElementById("submit");
  sub.onclick = function () { 
 var Email = document.getElementById("Email").value;
var password = document.getElementById("password").value;
var login=document.getElementById("login")
var Sign=document.getElementById("sign")
    if (Email == "" || password == "") {
      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert" style="font-size=10px">
    <p >Please Fill Data</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    } 
    else if (Email.indexOf("@") == -1) {
      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <P>Not Valid Email</P>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    } 

  else {
  for (var i = 1; i <= localStorage.length; i++)
  {
    var ussser = (localStorage.getItem(i));
  
  if (ussser.match(Email) && ussser.match(password))
    {
          text.innerHTML = `<div class="alert alert-info alert-dismissible fade show w-10" role="alert">
            <P>Success</P>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          sessionStorage.setItem("Email",Email)
          setTimeout(function(){
            window.location.href="../html/home.html"
          },3000)
       

    }
    else {

      text.innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-10" role="alert">
            <P>Wrong Data</P>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
    }
  }
          
         
        

        
      }
    }
    


      
      
      
      
      
    

  



