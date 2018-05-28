<?php include_once("index.html"); ?>
<?php
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_msg'];

$to = "jpetrucci49@yahoo.com";
$subject = "Form submission:";
$body = "Name: ".$name."\nEmail: ".$email."\nMessage: ".$message;
$headers = "From: " . $email;

//send email
mail($to, $subject, $body, $headers);

?>