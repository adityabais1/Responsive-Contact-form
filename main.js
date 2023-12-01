function sendmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "adityabais.test@gmail.com",
    Password : "1D70F9AE48068538AC0DC3B7D21A4D7CD2EC",
    To : 'adityabais.test@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}