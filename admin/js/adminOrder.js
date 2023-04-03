function viewOrders(){
    
    auth.onAuthStateChanged((user)=>{
        if(user){
        db.collection("Orders" ).get().then((AllRecords)=>{
        const list =document.getElementById("order")
        var div ="";
        var html ="";

        
        AllRecords.forEach((currentRecord)=>{
           
            div =`
            <tr>
            <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
            <th scope="row"><b>${currentRecord.data().OrderNo}</b></th>
            <td>
                <div class="tm-status-circle moving">
                </div>${currentRecord.data().OrderStatus}
            </td>
            <td><b>${currentRecord.data().Destination}</b></td>
            <td><b>${currentRecord.data().CustomerName}</b></td>
            <td><b>${currentRecord.data().ItemsXUnits}</b></td>
            <td>${currentRecord.data().DateOfOrder}</td>
            <td><b>${currentRecord.data().OrderGrandTotal}</b></td>
            <td>${currentRecord.data().Arrival}</td>
           
  
            <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_order('${currentRecord.id}')"></i></td>
                    
        </tr> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}
viewOrders()


function productview(id) {
    
    location.href="edit-orders.html?Order=" + id + ""

}

function editOrder()
{

    const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("Order")
    db.collection("Orders").doc(id).get().then((info)=>{
        //get values from database
    
        
        document.getElementById("arrival").value =info.data().Arrival;

        //Update
            document.getElementById("updateOrder").addEventListener("click",(e)=>{
            e.preventDefault()

            
            //validation
            if (document.querySelectorAll('input[type="radio"]:checked').length === 0) 
            swal("Please select order status", "", "error");
            
            else

            var orderstatus;
            if (document.getElementById("delstatus").checked ){
                orderstatus = "Delivered"
            }
            else  if (document.getElementById("movestatus").checked) {
                orderstatus = "On the Move"
            }
            else if (document.getElementById("arrivstatus").checked ) {
                orderstatus = "Order has arrived"
            }
    
            var proarrival=document.getElementById("arrival").value;
       

            db.collection("Orders").doc(id).update({
                OrderStatus:orderstatus,
                Arrival:proarrival

            },merge=true).then(()=>{
                swal("Success!", "Order is updated!", "success");
            })

        })
  

    })
}

function remove_order(id)
{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            willDelete = db.collection("Orders").doc(id).delete()
          swal("Poof! Order file has been deleted!", {
            icon: "success",
          }).then(function()
          {
            location.reload();
          })
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}

function viewNotification(){
    
    auth.onAuthStateChanged((user)=>{
        if(user){
        db.collection("Notifications" ).get().then((AllRecords)=>{
        const list =document.getElementById("notification")
        var div ="";
        var html ="";

        
        AllRecords.forEach((currentRecord)=>{
           
            div =`
            <div class="media tm-notification-item">
                                <div class="media-body">
                                    <p class="mb-2"><b>${currentRecord.data().notification}</b>  <a href="#"
                                            class="tm-notification-link">product updates</a>.</p>
                                    <span class="tm-small tm-text-color-secondary">${currentRecord.data().timeOfOrder} ago.</span>
                                </div>
                            </div> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}
viewNotification()