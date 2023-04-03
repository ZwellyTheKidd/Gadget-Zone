function sendEmail() {

    var senderName=document.getElementById("senderName").value;
    var senderEmail=document.getElementById("senderEmail").value;
    var senderNumber=document.getElementById("senderNumber").value;
    var senderSubject=document.getElementById("senderSubject").value;
    var senderBody=document.getElementById("senderBody").value;

	if (senderName =="" || senderEmail =="" || senderNumber =="" ||senderSubject =="" || senderBody =="" ) 
	{
	   swal("please enter all the fields correctly!");
	}else{
		Email.send({
			Host : "smtp.gmail.com",
			Username : "mushiana.desmond@gmail.com",
			Password : "gerson66",
			To : 'mushiana.desmond@gmail.com',
			From : senderEmail,
			Subject : senderSubject,
			Body : senderBody
		}).then(
		  message => alert(message)
		);
	}
	
}