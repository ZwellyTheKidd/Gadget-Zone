function displayUser(){
    auth.onAuthStateChanged((user)=>{
    if(user)
    {
         db.collection('users').doc(user.uid).get().then((info)=>{
         var username = info.data().Username
         var email = info.data().Email
         var numbers = info.data().Cellnumbers
         var Province = info.data().Province
         var city = info.data().City
         var address = info.data().Streetaddress
         var zipcode = info.data().Zipcode

         document.getElementById('customer_name').innerHTML = username;
         document.getElementById('customer_name2').innerHTML = username ;
         document.getElementById('customer_email').innerHTML = email;
         document.getElementById('customer_numbers').innerHTML = numbers;
         document.getElementById('province').innerHTML = Province + ", " + city;
         document.getElementById('address').innerHTML = address + ", " + zipcode;

        })
    }
    })
}
displayUser()

function displayDate(){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        
        document.getElementById('current_date').innerHTML = dateTime;
        
}
displayDate()

