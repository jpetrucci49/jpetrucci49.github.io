<?php include_once("index.html"); ?>
<?php
// process.php
	$errors = array();// array to hold validation errors
	$data = array();// array to pass back data

// validate the variables ======================================================
// if any of these variables don't exist, add an error to our $errors array
	if (empty($_POST['user_name']))
		$errors['user_name'] = 'Name is required.';
	if (empty($_POST['user_email']))
		$errors['user_email'] = 'Email is required.';
	if (empty($_POST['user_msg']))
		$errors['user_msg'] = 'Superhero alias is required.';

// return a response ===========================================================
// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		// if there are no errors process our form, then return a message
		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
		
		$name = $_POST['user_name'];
		$email = $_POST['user_email'];
		$message = $_POST['user_msg'];

		$to = "jpetrucci49@yahoo.com";
		$subject = "Form submission:";
		$body = "Name: ".$name."\nEmail: ".$email."\nMessage: ".$message;
		$headers = "From: " . $email;

	}
	//send email
	mail($to, $subject, $body, $headers);
	// return all our data to an AJAX call
	echo json_encode($data);
?>