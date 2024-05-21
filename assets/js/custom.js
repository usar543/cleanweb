function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var messageBody = document.getElementById("textArea").value;

  var arrangeBody = "Name: " + name + "<br/> Email: " + email + 
  "<br/> Phone: " + phone + "<br/> Message: " + messageBody;


  Email.send({
      SecureToken : "b297c14b-cb8e-462a-83b3-8a03cb1e4790",
      To : 'CleaningEandM@outlook.com',
      From : "CleaningEandM@outlook.com",
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