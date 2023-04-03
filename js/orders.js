function addOrders(){

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;

        dateoforder = dateTime
        var customername = document.getElementById('customer_name2').innerHTML;
        var orderno = document.getElementById('invoice').innerHTML;
        var product = document.getElementById('product').innerHTML;
        var orderstatus ="Received"
        var arrivaldate ="Processing"
        var total = document.getElementById('grandtotal').innerHTML;
        var location = document.getElementById('province').innerHTML;
        var quantity = document.getElementById('prodsquantity').innerHTML;
        var itemsXunits = document.getElementById('prodsandquantity').innerHTML;

    auth.onAuthStateChanged((user)=>{
        if(user)
        {
           
            db.collection("Orders").add({
                OrderNo: orderno,
                CustomerName:customername,
                DateOfOrder: dateoforder,
                OrderStatus:orderstatus,
                OrderGrandTotal:total,
                Arrival:arrivaldate,
                OrderedProducts:product,
                Products_Quantity:quantity,
                ItemsXUnits: itemsXunits,
                Destination: location,
                UID:user.uid
             },merge=true).then(()=>{
                swal("success", "Your order has been succesfully added", "success").then(function(){
                    window.localStorage.clear()
                })
              }).catch((error)=>{
             swal(error.message)}) 

             db.collection("Notifications").add({
                notification: customername + " has placed an order",
                timeOfOrder:dateTime
             })
            
        }
        })
}


function retrieveOrder(){
       
    
    auth.onAuthStateChanged((user)=>{
        if(user){
         if (db.collection("users").doc(user.uid)){

            db.collection("Orders" ).where('UID','==',user.uid).get().then((AllRecords)=>{
                const list =document.getElementById("orderz")
                var div ="";
                var html ="";

                AllRecords.forEach((currentRecord)=>{
           
                    div =`
                    
                    <tbody class="table-body"
                    <tr class="cell-1">
                              
                    <td><strong>${currentRecord.data().OrderNo}</strong></td>
                    
                    <td>${currentRecord.data().OrderGrandTotal}</td>
                    <td><span class="status">${currentRecord.data().OrderStatus}</span></td>
                    <td>${currentRecord.data().DateOfOrder}</td>
                    <td>${currentRecord.data().Arrival}</td>
                    <td>${currentRecord.data().OrderedProducts}</td>
                    <td>${currentRecord.data().Products_Quantity}</td> 
                </tr>
                </tbody>
                
              
                 `
                    html += div
                    list.innerHTML =html
                })

            })
        }
    }
        })      
}
retrieveOrder()

