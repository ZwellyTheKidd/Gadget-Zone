function logout()
{
  auth.signOut().then(()=>{
    swal({
      title: "Are you sure?",
      text: "Once you logout, Your cart will be cleared!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          willDelete =  window.localStorage.clear();
        swal("Poof! you are logged out, we are redirecting you to a login page", {
          icon: "success",
        }).then(function()
        {
          location.href="login.html"
        })
      } else {
        swal("Great, You are still logged in!");
      }
    });
  
   
  })
}