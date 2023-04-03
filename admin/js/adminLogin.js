function login(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email,password).then(()=>{
        location.href="adminIndex.html"
    }).catch(function(error){
      newFunction();
    })
    function newFunction(){
        swal("User not found in our database!");
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

function displayUser()
{
  auth.onAuthStateChanged((user)=>{
  if(user)
  {
       db.collection('users').doc(user.uid).get().then((info)=>{
       var username1 = info.data().Username
       document.getElementById('uname').innerHTML = username1
      })
  }
  })
}
