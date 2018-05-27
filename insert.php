<?php include_once("index.html"); ?>
<?php
// define variables and set to empty values
$name = $email = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$message = test_input($_POST["message"]);
	
	$myfile = fopen("form.txt", "w") or die("Unable to open file!");
	$txt = 'Message from: ' . $name . ' \r\n' . 'Email Address: ' . $email . ' \r\n' . 'Message: \r\n' . $message; exit;
	fwrite($myfile, $txt);
	fclose($myfile);
}
?>