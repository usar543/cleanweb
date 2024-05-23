function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var messageBody = document.getElementById("textArea").value;

  var arrangeBody = "Name: " + name + "<br/> Email: " + email + 
  "<br/> Phone: " + phone + "<br/> Message: " + messageBody;


  Email.send({
      SecureToken : "cdd0a094-bd0e-4055-a794-a8c808f9975e",
      To : 'CleaningEandM@outlook.com',
      From : "cleaning@cleaningeandm.com",
      Subject : "Email from Website",
      Body : arrangeBody
  }).then(
    message => {
      if(message=="OK"){
        swal("Thank you!", "Your email has been sent", "success");
      }
      else{
        swal("Error!", "Your email has not been sent", "error");
      }
    }
  );
}