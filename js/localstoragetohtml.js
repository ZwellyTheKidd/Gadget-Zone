
function viewAllProducts()
{      

    var productInfo = JSON.parse(localStorage.getItem("__mycart"))
     const list =document.getElementById("itemz")
        var div ="";
        var html ="";
         
        

        for (let i = 0; i < 1000; ++i){
            var Name = (productInfo[i].name)
            let Quantiy = (productInfo[i].quantity)
            let Price =(productInfo[i].price)
            let description =(productInfo[i].summary)
            let trimmed_desc = description.substring(0,175) + "...";
            
            let total = (Price * Quantiy);
            var prod_name = ""
            var  prodquantity =""
            var prod_name_and_quantity =""
            
            let subtotal = 0;
            
        
          
     
    
            div =`
            <tr>
            <td class="center">${i + 1}</td>
            <td class="left" id="itemName">${Name}</td>
            <td class="left" id="itemDisc" >${trimmed_desc}</td>
            <td class="center" id="itemQuantity">${Quantiy}</td>
            <td class="right" id="itemPrice">R${Price}</td>
            <td class="right" id="itemTotal">R${total}</td>
            </tr> `
           
            for (let j = 0; j <i+1; ++j) {
                prod_name +=productInfo[j].name + "<br>" 
                prodquantity += productInfo[j].quantity +" Qty <br>" 
                prod_name_and_quantity += (productInfo[j].name  + " X " +(productInfo[j].quantity)) +  "<br>" 
                subtotal += (productInfo[j].quantity)  * (productInfo[j].price) 
                
                
                document.getElementById("product").innerHTML =prod_name  
                document.getElementById("prodsquantity").innerHTML =prodquantity
                document.getElementById("subtotal").innerHTML ="R"+subtotal; 
                document.getElementById("prodsandquantity").innerHTML =prod_name_and_quantity;   
               
            
        }
        const discountPercentage = 0.07 //7%
        var discount = 0;
            if (subtotal >= 30000) {
                discount = parseInt(discountPercentage * subtotal)
               
            }
            else{
                discount = 0;
            }
            const vat = 0.15
            tax = subtotal * vat;

            var grandtotal = subtotal - discount
            document.getElementById("discount").innerHTML = "R"+discount
            document.getElementById("tax").innerHTML = "R"+tax
            document.getElementById("grandtotal").innerHTML = "R"+grandtotal
                  
          
     

            html += div
            list.innerHTML =html

           
        };
        
       

}
viewAllProducts()

