function logout()
{
  auth.signOut().then(()=>{
    swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! You are signed out!", {
            icon: "success",
          });
          setTimeout(() => {
            location.href="adminLogin.html"
        }, 5000);
        } 
        else {
          swal("Great. You're still  logged in");
        }
      });
   
  })
}