function viewAllProducts()
{  
    auth.onAuthStateChanged((user)=>{

        if(user){
        db.collection("products" ).get().then((AllRecords)=>{
        const list =document.getElementById("mixed_products")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{
           
            div =`
			        <tr>
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td> ${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>  
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteProduct('${currentRecord.id}')"></i></td>
                    </tr> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}
viewAllProducts()

function viewLaptop()
{  
    auth.onAuthStateChanged((user)=>{

        if(user){
        db.collection("products-laptop" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_laptop")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{
           
            div =`
			        <tr>
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td> ${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>  
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_laptop('${currentRecord.id}')"></i></td>
                    </tr> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}
viewLaptop();


function viewSmartphone()
{
	  auth.onAuthStateChanged((user)=>{
         if(user){
        db.collection("products-smartphone" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_smartphone")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			        <tr >
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td>${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>  
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_smartphone('${currentRecord.id}')"></i></td>
                    </tr> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}
viewSmartphone()

function viewHeadphone()
{	  
    auth.onAuthStateChanged((user)=>{
         if(user){
         db.collection("products-headphone" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_headphone")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			<tr>
            <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
            <td> ${currentRecord.data().Prod_name}</td>
            <td>R${currentRecord.data().Prod_price}</td>
			<td>${currentRecord.data().Prod_Stock}</td>
			<td>R${currentRecord.data().Normal_Price}</td>
            <td>${currentRecord.data().Category}</td> 
            <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_headphone('${currentRecord.id}')"></i></td>                  
            </tr> `
            html += div 
            list.innerHTML =html
        })

    })
        }
	})

}
viewHeadphone()


function viewSmartwatches()
{
	  
    auth.onAuthStateChanged((user)=>{

        if(user){
    db.collection("products-smartwatch" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_smartwatch")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			<tr >
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td>${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
					<td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_smartwatch('${currentRecord.id}')"></i></td>
                    
                  </tr> `
            html += div 
            list.innerHTML =html
        })

    })
        }
	})

} viewSmartwatches()



function viewGames()
{
	  
    auth.onAuthStateChanged((user)=>{

        if(user){
    db.collection("products-gaming" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_gaming")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			<tr >
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td>${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_gaming('${currentRecord.id}')"></i></td>
                  </tr> `
            html += div 
            list.innerHTML =html
        })

    })
        }
	})

}
viewGames()


function viewSpeakers()
{
	  
    auth.onAuthStateChanged((user)=>{

        if(user){
    db.collection("products-speaker" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_speaker")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			<tr>
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td> ${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					<td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_speaker('${currentRecord.id}')"></i></td>
                    
                  </tr> `
            html += div 
            list.innerHTML =html
        })

    })
        }
	})

}
viewSpeakers()


function viewArrival()
{
	  
    auth.onAuthStateChanged((user)=>{

        if(user){
    db.collection("products-newarrival" ).get().then((AllRecords)=>{
        const list =document.getElementById("product_arrival")
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{

            div =` 
			<tr>
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td> ${currentRecord.data().Prod_name}</td>
                    <td>R${currentRecord.data().Prod_price}</td>
					          <td>${currentRecord.data().Prod_Stock}</td>
                    <td>R${currentRecord.data().Normal_Price}</td>
                    <td>${currentRecord.data().Category}</td>
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_arrival('${currentRecord.id}')"></i></td>
                    
                  </tr> `
            html += div 
            list.innerHTML =html
        })

    })
        }
	})

}
viewArrival()

function productview(id) {
    
    location.href="edit-product.html?product=" + id + ""

}


function editLaptop()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-laptop").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;


   
        //Update
            document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            if(proName=="")
            {
                swal("Enter all fields before you can upload")
            }
           

            db.collection("products-laptop").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editLaptop()

function editSmartphone()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-smartphone").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-smartphone").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editSmartphone()


function editHeadphone()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-headphone").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-headphone").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editHeadphone()

function editWatches()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-smartwatch").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;
        
        

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value


            db.collection("products-smartwatch").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editWatches()

function editGaming()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-gaming").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-gaming").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editGaming()


function editSpeakers()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-speaker").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-speaker").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editSpeakers()


function editArrival()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products-newarrival").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-newarrival").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editArrival()

function editProducts()
{
        const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("product")
         db.collection("products").doc(id).get().then((info)=>{
        //get values from database
    
        document.getElementById("prod_name").value =info.data().Prod_name;
        document.getElementById("prod_price").value =info.data().Prod_price;
        document.getElementById("normal_price").value =info.data().Normal_Price;
        document.getElementById("stock").value =info.data().Prod_Stock;
        document.getElementById("description").value =info.data().Prod_description;

        //Update
        document.getElementById("updatepro").addEventListener("click",(e)=>{
            e.preventDefault()
            var proName=document.getElementById("prod_name").value;
            var proPrice = document.getElementById("prod_price").value;
            var proNormalPrice =  document.getElementById("normal_price").value;
            var prostock =  document.getElementById("stock").value
            var prodescription =  document.getElementById("description").value

            db.collection("products-newarrival").doc(id).update({
                Prod_name:proName,
                Prod_price:proPrice,
                Normal_Price:proNormalPrice,
                Prod_Stock:prostock,
                Prod_description: prodescription

            },merge=true).then(()=>{
                swal("success"," Product has been succesfully updated", "success") 
            })
        })
    })
}
editProducts()



///delete
function remove_laptop(id)
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
            willDelete = db.collection("products-laptop").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
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

function remove_smartphone(id)
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
            willDelete = db.collection("products-smartphone").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
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

function remove_headphone(id)
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
            willDelete = db.collection("products-headphone").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success", 
          }).then(function()
          {
            location.reload();
          })          
        }
         else {
          swal("Your imaginary file is safe!");
        }
      }); 
}

function remove_smartwatch(id)
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
            willDelete = db.collection("products-smartwatch").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          }).then(function()
          {
            location.reload();
          })
        }
         else {
          swal("Your imaginary file is safe!");
        }
      });
}

function remove_gaming(id)
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
            willDelete = db.collection("products-gaming").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
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

function remove_speaker(id)
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
            willDelete = db.collection("products-speaker").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
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

function remove_arrival(id)
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
            willDelete = db.collection("products-newarrival").doc(id).delete()
          swal("Poof! Your imaginary file has been deleted!", {
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

function deleteProduct(id)
{
    swal({
        title: "Are you sure?",
        text: "Once deleted, customers cannot order it!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {

        
        if (willDelete) {
            willDelete=db.collection("products").doc(id).delete()
          swal("Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Product not deleted");
        }
      });
}