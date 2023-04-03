function displayAllProducts()
{   
   db.collection("products").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("prod");


        info.forEach(element => {
      div=`
      <div class="box">
            <div class="image">
            <img src="${element.data().Prod_pic}" class="main-img" alt="">
            <img src="${element.data().Prod_pic}" class="hover-img" alt="">
                <div class="icons">
                <a class="fas fa-shopping-cart my-cart-btn "
                   data-id="${element.id}"
                   data-name="${element.data().Prod_name}"
                   data-summary="${element.data().Prod_description}"
                   data-price="${element.data().Prod_price}"
                   data-quantity="1"
                   data-image="${element.data().Prod_pic}"
                   ></a> 
                   <button type="button"  onclick="ViewDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view"><i class="fa fa-eye"></i></button>
                    <a href="#" class="fas fa-share"></a
                </div>
               </div>
               <div class="content">
               <h3>${element.data().Prod_name}</h3>
               <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
               </div>
            </div>
            </div> 
            

            `
        html += div ;
        list.innerHTML=html;
           
        });
    })
    
}
var viewItem =""
displayAllProducts()

function ViewDetails(id) {

    db.collection("products").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} <small class="pre-cost"><span ></span>R${element.data().Normal_Price}</small></h3>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <select class="form-control" name="select">
                                <option value="" selected="">Color</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="gold">Gold</option>
                                <option value="rose gold">Rose Gold</option>
                            </select>
                        </div>
                        <!-- end col -->
                        
                       
                    </div>
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}
function displayNewArrivals()
{   
   db.collection("products-newarrival/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("arrival_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
      </div>
      <div class="content">
      <h3>${element.data().Prod_name}</h3>
      <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
      </div>
  </div> `
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displayNewArrivals()




function displayLaptop()
{   
   db.collection("products-laptop/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("laptop_prod");


        info.forEach(element => {
      div=`
      <div class="">
            <div class="image">
            <img src="${element.data().Prod_pic}" class="main-img" alt="">
            <img src="${element.data().Prod_pic}" class="hover-img" alt="">
                <div class="icons">
                <a class="fas fa-shopping-cart my-cart-btn "
                   data-id="${element.id}"
                   data-name="${element.data().Prod_name}"
                   data-summary="${element.data().Prod_description}"
                   data-price="${element.data().Prod_price}"
                   data-quantity="1"
                   data-image="${element.data().Prod_pic}"
                   ></a> 
                   <button type="button"  onclick="ViewLaptopDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view2"><i class="fa fa-eye"></i></button>
                    <a href="#" class="fas fa-share"></a>
                </div>
               </div>
               <div class="content">
               <h3>${element.data().Prod_name}</h3>
               <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
               </div>
            </div>


            
                </div> `
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displayLaptop();

function ViewLaptopDetails(id) {

    db.collection("products-laptop").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view2').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <div><strong>Description</strong></div>
                    <p>${element.data().Prod_description}</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} </h3>
                   
                    
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                    <div class="space-ten"><strong>Ships in 5 - 7 work days</div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}

function displaySmartphones()
{
   db.collection("products-smartphone/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("smartphone_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
          <div class="icons">
          <a class="fas fa-shopping-cart my-cart-btn "
             data-id="${element.id}"
             data-name="${element.data().Prod_name}"
             data-summary="${element.data().Prod_description}"
             data-price="${element.data().Prod_price}"
             data-quantity="1"
             data-image="${element.data().Prod_pic}"
             ></a> 
             <button type="button"  onclick="ViewPhoneDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view3"><i class="fa fa-eye"></i></button>
              <a href="#" class="fas fa-share"></a>
          </div>
         </div>
         <div class="content">
         <h3>${element.data().Prod_name}</h3>
         <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
         </div>
      </div>


      
          </div> `
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displaySmartphones();

function ViewPhoneDetails(id) {

    db.collection("products-smartphone").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view3').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} </h3>
                   
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}

function displayHeadphones()
{
   db.collection("products-headphone/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("headphone_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
          <div class="icons">
          <a class="fas fa-shopping-cart my-cart-btn "
             data-id="${element.id}"
             data-name="${element.data().Prod_name}"
             data-summary="${element.data().Prod_description}"
             data-price="${element.data().Prod_price}"
             data-quantity="1"
             data-image="${element.data().Prod_pic}"
             ></a>
             <button type="button"  onclick="ViewHeadphoneDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view4"><i class="fa fa-eye"></i></button> 
              <a href="#" class="fas fa-share"></a>
          </div>
         </div>
         <div class="content">
         <h3>${element.data().Prod_name}</h3>
         <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
         </div>
      </div>


      
          </div>`
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displayHeadphones();

function ViewHeadphoneDetails(id) {

    db.collection("products-headphone").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view4').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price}</h3>
                   
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}


function displaySmartwatches()
{
   db.collection("products-smartwatch/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("smartwatch_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
          <div class="icons">
          <a class="fas fa-shopping-cart my-cart-btn "
             data-id="${element.id}"
             data-name="${element.data().Prod_name}"
             data-summary="${element.data().Prod_description}"
             data-price="${element.data().Prod_price}"
             data-quantity="1"
             data-image="${element.data().Prod_pic}"
             ></a>
             <button type="button"  onclick="ViewWatchesDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view5"><i class="fa fa-eye"></i></button>  
              <a href="#" class="fas fa-share"></a>
          </div>
         </div>
         <div class="content">
         <h3>${element.data().Prod_name}</h3>
         <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
         </div>
      </div>


      
          </div> `
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displaySmartwatches();

function ViewWatchesDetails(id) {

    db.collection("products-smartwatch").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view5').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} </h3>
                   
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}


function displayGaming()
{
   db.collection("products-gaming/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("gaming_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
          <div class="icons">
          <a class="fas fa-shopping-cart my-cart-btn "
             data-id="${element.id}"
             data-name="${element.data().Prod_name}"
             data-summary="${element.data().Prod_description}"
             data-price="${element.data().Prod_price}"
             data-quantity="1"
             data-image="${element.data().Prod_pic}"
             ></a>
             <button type="button"  onclick="ViewGameDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view6"><i class="fa fa-eye"></i></button>  
               
              <a href="#" class="fas fa-share"></a>
          </div>
         </div>
         <div class="content">
         <h3>${element.data().Prod_name}</h3>
         <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
         </div>
      </div>


      
          </div>`
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displayGaming();

function ViewGameDetails(id) {

    db.collection("products-gaming").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view6').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} </h3>
                   
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}


function displaySpeakers()
{
   db.collection("products-speaker/").onSnapshot((info)=>{
        var html=""
        var div=""
        const list = document.getElementById("speaker_prod");


        info.forEach(element => {
      div=`
      <div class="box">
      <div class="image">
      <img src="${element.data().Prod_pic}" class="main-img" alt="">
      <img src="${element.data().Prod_pic}" class="hover-img" alt="">
          <div class="icons">
          <a class="fas fa-shopping-cart my-cart-btn "
             data-id="${element.id}"
             data-name="${element.data().Prod_name}"
             data-summary="${element.data().Prod_description}"
             data-price="${element.data().Prod_price}"
             data-quantity="1"
             data-image="${element.data().Prod_pic}"
             ></a> 
             <button type="button"  onclick="ViewSpeakerDetails('${element.id}')" class="btn btn-default" data-toggle="modal" data-target="#product_view7"><i class="fa fa-eye"></i></button>  
              
              <a href="#" class="fas fa-share"></a>
          </div>
         </div>
         <div class="content">
         <h3>${element.data().Prod_name}</h3>
         <div class="price">R${element.data().Prod_price} <span>R${element.data().Normal_Price}</span></div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
         </div>
      </div>


      
          </div> `
        html += div ;
        list.innerHTML=html;
           
        });
    })
}
var viewItem =""
displaySpeakers();

function ViewSpeakerDetails(id) {

    db.collection("products-speaker").doc(id).onSnapshot((element)=>{

    document.getElementById('product_view7').innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
            <h3 class="modal-title">Product Details</h3>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6 product_img">
                    <img src="${element.data().Prod_pic}" class="img-responsive">
                </div>
                <div class="col-md-6 product_content">
                    <h4>Name: <span>${element.data().Prod_name}</span></h4>
                    <div class="rating">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        (10 reviews)
                    </div>
                    <p>${element.data().Prod_description}.</p>
                    <h3 class="cost"><span></span> R${element.data().Prod_price} </h3>
                   
                    <div class="space-ten"></div>
                    <div class="btn-ground">
                        <button type="button" class="btn btn-primary my-cart-btn"
                        data-id="${element.id}"
                        data-name="${element.data().Prod_name}"
                        data-summary="${element.data().Prod_description}"
                        data-price="${element.data().Prod_price}"
                        data-quantity="1"
                        data-image="${element.data().Prod_pic}"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
}



