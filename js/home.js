var login=document.getElementById("login")
var sign=document.getElementById("Sign")
var login1=document.getElementById("login1")
var sign1=document.getElementById("sign1")
var btn=document.getElementById("btn")
// ==========================================================
if(sessionStorage.length >1){
  login1.innerHTML=sessionStorage.getItem("Email")
  sign1.innerHTML="Welcome"
  login.innerHTML=""
  sign.innerHTML=""
  btn.style.display="block"

  btn.onclick=function(){
    sessionStorage.clear()
  }
  if(sessionStorage.length<=1)
  {
    login1.innerHTML=""
    sign1.innerHTML=""
    login.innerHTML=`<a href="../html/login.html">Login</a>`
    sign.innerHTML=`<a href="../html/Signup.html">Sign up</a`
    btn.style.display="none"
  }
}
  // =================================================================================

async function fake(){
var response=await fetch("https://fakestoreapi.com/products")
var data=await response.json()
console.log(data)
var text=""

for (var i=0;i<data.length;i++){  
var pro=document.getElementById("pro")
var txt=`<div class="card " style="width: 18rem;">
<img src="${data[i].image}" class="card-img-top" alt="..." width="100px" height="200px">
<div class="card-body">
  <p class="card-text">${data[i].title}</p>
  <p>Price:${data[i].price}$</p>
</div>
</div>`
text=text+txt
console.log(data[i].price)

}
pro.innerHTML=text
}
fake()