function addProduct()
{  
    //uploading Laptop products Only 
    var p_name = document.getElementById("product-name").value;
    var p_stock = document.getElementById("stock").value;
    var price = document.getElementById("product-price").value;
    var description = document.getElementById("product-description").value;
    var normal_price = document.getElementById("normal_price").value;
    var select = document.getElementById('category');
    var value = select.options[select.selectedIndex].value;
   
    var category;

    //validation
    if(p_name==""||price=="" ||normal_price=="" ||p_stock=="" ||description=="")
    {
        swal("Enter all fields before you can upload")
    }
    else if(value == 0) 
    {
      swal("Select the category")
    }
    else if(document.getElementById("uploaded-product").value =="")
    {
      swal("Select an Image ")
    }

    if (value ==1) 
    {
      category = "Laptop"
      const storage = firebase.storage().ref("products-laptop/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your laptop " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-laptop/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                //Clearing the inputs
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''
            
                  swal("success", "Laptop Product has been succesfully added", "success") 
                 
              })
  
  }) 
    }



    if (value ==2) 
    {
      category = "Smartphone"
      const storage = firebase.storage().ref("products-smartphone/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your smartphone " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-smartphone/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{

                //Clearing the inputs
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''
            
                  swal("success", "Smartphone Product has been succesfully added", "success") 
              })
  
  }) 
    }


    if (value ==3)   
    {
      category = "Headphone"
      const storage = firebase.storage().ref("products-headphone/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your headphone " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-headphone/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                 //Clearing the inputs
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''
            
                  swal("success", "HeadphoneProduct has been succesfully added", "success") 
              })
  
  }) 
    }



    if (value ==4) 
     {
      category = "Smartwatch"
      const storage = firebase.storage().ref("products-smartwatch/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your smartwatch" + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-smartwatch/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{

                //Clearing the inputs
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''
            
                  swal("success", "Smartwatch Product has been succesfully added", "success") 
              })
              
  }) 
    }





    if (value ==5)   
    {
      category = "Gaming"
      const storage = firebase.storage().ref("products-gaming/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your gaming " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-gaming/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                //Clearing the inputs
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''
            
                  swal("success", "Gaming Product has been succesfully added", "success") 
              })
  
  }) 
    }



    if (value ==6)  
    {
      category = "Speaker"
      const storage = firebase.storage().ref("products-speaker/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your speaker " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-speaker/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''

                swal("success", "Speaker Product has been succesfully added", "success") 
             
              })
  
  }) 
    }

    if (value ==7)  
    {
      category = "New arrival"
      const storage = firebase.storage().ref("products-newarrival/")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your new arrival " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products-newarrival/").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''

                swal("success", "New arrival Product has been succesfully added", "success") 
             
              })
  
  }) 
    }
    if (value ==8)  
    {
      category = "Allproducts"
      const storage = firebase.storage().ref("products")
      const file = document.getElementById("uploaded-product").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {contentType: file.type};
      const task = storage.child(name).put(file,metadata);

      task.on("state_changed", function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)* 100;
      //  document.getElementById("progress-status").value=percentage;
        document.getElementById("upProgress").innerHTML="Uploading your new product " + percentage+"%";
    })
    task.then((snapshot)=>snapshot.ref.getDownloadURL()).then((URL)=>{
        console.log(URL)
                  db.collection("products").add({
                  Prod_name: p_name,
                  Prod_price: price,
                  Prod_Stock:p_stock,
                  Prod_description:description,
                  Category:category,
                  Normal_Price:normal_price,
                  Prod_pic: URL
              }).then(()=>{
                document.getElementById("product-name").value="";
                document.getElementById("category").value=""
                document.getElementById("stock").value="";
                document.getElementById("product-description").value="";
                document.getElementById("product-price").value="";
                document.getElementById("normal_price").value="";
                document.getElementById('category').value="0";
                document.getElementById("uploaded-product").value =""
                document.getElementById("upProgress").innerHTML=''

                swal("success", "New Product has been succesfully added", "success") 
             
              })
  
  }) 
    }
   
   
}


