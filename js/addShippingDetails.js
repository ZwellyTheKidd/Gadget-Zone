function shippingDetails()
{
    // Getting input from the input fields
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var streetaddress=document.getElementById("streetaddress").value;
    var addressline=document.getElementById("addressline").value;


    var city =document.getElementById("city").value;
    var zipcode =document.getElementById("zipcode").value;
    var phonenumbers=document.getElementById("phonenumbers").value;
    var province = "";
    var select = document.getElementById('province');
    var value = select.options[select.selectedIndex].value;


    //Validation         
    if (firstname =="" || lastname =="" || streetaddress=="" || addressline=="" || city =="" || zipcode =="" || phonenumbers ==""  ) 
     {
        swal("please enter all the fields correctly!");
     }
     else if(value == 0) 
     {
       swal("Select your provinve")
     }
            else{

                if(value==1){
                    province =" Eastern Cape"
                 }
                 if(value==2){
                    province ="Free State"
                 }
                 if(value==3){
                    province ="Gauteng"
                 }
                 if(value==4){
                    province ="KwaZulu-Natal"
                 }
                 if(value==5){
                    province ="Limpopo"
                 }
                 if(value==6){
                    province ="Mpumalanga"
                 }
                 if(value==7){
                    province ="Northern Cape"
                 }
                 if(value==8){
                    province ="North West"
                 }
                 if(value==9){
                    province ="Western"
                 }
                        db.collection("users").doc(auth.currentUser.uid).update({
                        Firstname: firstname,
                        Lastname: lastname,
                        Streetaddress:streetaddress,
                        Addressline:addressline,
                        City :city,
                        Zipcode:zipcode,
                        Cellnumbers: phonenumbers,
                        Province :province,
              
            
                    },merge=true).then(function()
                     {
                       location.href="cart.html"
                     })
      }
 }

 

 function RetrieveShippingDetails()
{   
    auth.onAuthStateChanged((user)=>{
   if(user)
   {
        db.collection("users").doc(auth.currentUser.uid).get().then((info)=>{
        var firstname=info.data().Firstname
        var lastname = info.data().Lastname
        var phonenumbers =info.data().Cellnumbers
        var streetaddress  = info.data().Streetaddress
        var addressline = info.data().Addressline
        var city = info.data().City
        var zipcode  = info.data().Zipcode
        var province = info.data().Province
      
        document.getElementById("firstname").value = firstname;
        document.getElementById("lastname").value= lastname;
        document.getElementById("streetaddress").value= streetaddress;
        document.getElementById("addressline").value= addressline;
        document.getElementById("city").value= city;
        document.getElementById("zipcode").value= zipcode;
        document.getElementById("phonenumbers").value= phonenumbers;


        if ( document.getElementById("firstname").value == "undefined") {
         document.getElementById("firstname").value= "";}
         if ( document.getElementById("lastname").value == "undefined") {
            document.getElementById("lastname").value= "";}
            if ( document.getElementById("streetaddress").value == "undefined") {
               document.getElementById("streetaddress").value= "";}
               if ( document.getElementById("addressline").value == "undefined") {
                  document.getElementById("addressline").value= "";}
                  if ( document.getElementById("city").value == "undefined") {
                     document.getElementById("city").value= "";}
                     if ( document.getElementById("zipcode").value == "undefined") {
                        document.getElementById("zipcode").value= "";}
                        if ( document.getElementById("phonenumbers").value == "undefined") {
                           document.getElementById("phonenumbers").value= "";}
 
       

    
       
       })
   }
   })
}
RetrieveShippingDetails()