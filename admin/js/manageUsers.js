

function selectAllUsers()
{
	  
    auth.onAuthStateChanged((user)=>{

        if(user){
        db.collection("users" ).get().then((AllRecords)=>{
        const list =document.getElementById("users")
      
        var div ="";
        var html ="";

        AllRecords.forEach((currentRecord)=>{
           
            div =`
			        <tr>
                    <th><i class="fa fa-edit" aria-hidden="true" onclick="productview('${currentRecord.id}')"></i></th>
                    <td>${currentRecord.data().Username}</td>
                    <td>${currentRecord.data().Email}</td>
					<td>${currentRecord.data().Cellnumbers}</td>
                    <td><i class="fa fa-trash" aria-hidden="true" onclick="remove_user('${currentRecord.id}')"></i></td>  
               
                      </tr> `
            html += div
            list.innerHTML =html
        })

    })
        }
	})

}

function productview(id) {
    
    location.href="edit-users.html?user=" + id + ""

}



function editUsers()
{

    const query = window.location.search;
        const URL = new URLSearchParams(query);
        const id = URL.get("user")
    db.collection("users").doc(id).get().then((info)=>{
        //get values from database
    

        document.getElementById("username").value =info.data().Username;
        document.getElementById("email").value =info.data().Email;
        document.getElementById("numbers").value =info.data().Cellnumbers;
        document.getElementById("password").value =info.data().Password;
        var confirmpassword=document.getElementById("password2").value;
      
        //Update
            document.getElementById("updateUser").addEventListener("click",(e)=>{
            e.preventDefault()
            var prouser=document.getElementById("username").value;
            var proemail = document.getElementById("email").value;
            var numbers=  document.getElementById("numbers").value;
            var propass =  document.getElementById("password").value;
       


            db.collection("users").doc(id).update({
                Username:prouser,
                Email:proemail,
                Cellnumbers:numbers,
                Password:propass
             

            },merge=true).then(()=>{
                swal("Sucess!", "User is updated!", "success");
            })

        })
  

    })
}

function remove_user(id)
{
    swal({
        title: "Are you sure?",
        text: "Once deleted, user will not be able to login!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            willDelete = db.collection("users").doc(id).delete()
          swal("Poof! User has been deleted!", {
            icon: "success", 
          }).then(function()
          {
            location.reload();
          })          
        }
         else {
          swal("user account is safe!");
        }
      }); 
}





///////////////////////////////////////////////////////////


function signOut()
{

    auth.signOut().then(()=>{
        location.href ="adminLogin.html";
    })
}





 