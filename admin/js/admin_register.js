function registerAdmin()
{       // Getting input from the input fields
      var username=document.getElementById("username").value;
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      var confirmpassword=document.getElementById("password2").value;
      var cellno=document.getElementById("number").value;
  
      //Validation         
      if (username =="" || email =="" || password =="" || cellno =="" || confirmpassword =="" ) 
       {
          swal("please enter all the fields correctly!");
       }
       else if ( confirmpassword !== password) 
       {
          swal("Password does not match!");
       }
       else
      // Setting up a customer collection and its properties
      auth.createUserWithEmailAndPassword(email,password,).then(()=>{
       
          db.collection("users").doc(auth.currentUser.uid).set({
              Username:username,
              Email:email,
              Cellnumbers:cellno,
              Password:password
              
  
          },merge=true).then(()=>{
             
              swal("success","Admin added successfully","success");
              setTimeout(() => {
                  location.href="adminIndex.html"
              }, 5000);
           })
       }).catch((error)=>{
          swal(error.message)
          })
       
}