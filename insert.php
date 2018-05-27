<?php include_once("index.html"); ?>
<?php

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$message = test_input($_POST["message"]);
	$to = "jpetrucci49@yahoo.com";
	$subject = "Message from form submit";
	$header = "From: $email\r\n";
	$thankYou = "Thank you for your submission";
	$reply = "I appreciate your feedback, I will be in reply shortly.";
	$replyHeader = "From: $to\r\n";
	
	mail($to,$subject,$message,$header);
	mail($email,$thankYou,$reply,$replyHeader);
	
	$mylog = fopen("./assets/log/form.txt", "a") or die("Unable to open file!");
	$txt = 'Message from: ' . $name . ' \r\n' . 'Email Address: ' . $email . ' \r\n' . 'Message: \r\n' . $message . '\r\n\r\n'; exit;
	fwrite($mylog, $txt);
	fclose($myfile);
?>