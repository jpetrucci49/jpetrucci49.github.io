<?php include_once("index.html"); ?>

<?php
if(isset($_POST['email'])){
	// EDIT THE 2 LINES BELOW AS REQUIRED
	$email_to = "jpetrucci49@yahoo.com";
	$email_subject = "Form submission:";

	$first_name = $_POST['user_name']; // required
	$email_from = $_POST['user_email']; // required
	$comments = $_POST['user_msg']; // required

	$email_message = "Form details below.\n\n";

	$email_message .= "Name: ".$first_name."\n";
	$email_message .= "Email: ".$email_from."\n";
	$email_message .= "Message: ".$comments."\n";

	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n";
	@mail($email_to, $email_subject, $email_message, $headers);  
}
?>
 