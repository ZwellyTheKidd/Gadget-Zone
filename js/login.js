

function login(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email,password).then(()=>{
        location.href="index.html"
    }).catch(function(error){
      newFunction();
    })
    function newFunction(){
        swal("User not found,Please type your details correctly","","error");
    }
  
  }

function forgetPassword()
{
  var email = document.getElementById("email").value;
    auth.sendPasswordResetEmail(email).then(()=>{
    swal("Password link sent successfully")

}).catch((error)=>{
    swal(error.message)
})

}