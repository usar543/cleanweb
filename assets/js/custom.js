function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var messageBody = document.getElementById("textArea").value;

  var arrangeBody = "Name: " + name + "<br/> Email: " + email + 
  "<br/> Phone: " + phone + "<br/> Message: " + messageBody;


  Email.send({
      SecureToken : "00c82493-e0c2-4bad-9b75-2f36d205d2ad",
      To : 'CleaningEandM@outlook.com',
      From : "dlicker96@gmail.com",
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