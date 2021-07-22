function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "jmekubo8@gmail.com",
	Password : "*******",
	To : 'johnmekubo@yahoo.com',
	From : "Email Testing",
	Subject : "<email subject>",
	Body : "Testing sssssss",
	}).then(
		message => alert("mail sent successfully")
	);
}