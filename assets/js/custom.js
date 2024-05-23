function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var messageBody = document.getElementById("textArea").value;

  var arrangeBody = "Name: " + name + "<br/> Email: " + email + 
  "<br/> Phone: " + phone + "<br/> Message: " + messageBody;


  Email.send({
      SecureToken : "041b8bb3-20b6-4a30-8bd5-3fa22be4810c",
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