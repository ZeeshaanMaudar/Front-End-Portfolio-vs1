<?php
	session_start();

	if(
		isset($_POST['first_name']) 
		&& isset($_POST['last_name'])
			&& isset($_POST['email']) 
			&& isset($_POST['message'])
		){
		$first_name = $_POST['first_name']; 
		$last_name = $_POST['last_name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$to = "maudarbocus.zeeshaan@gmail.com";


		$subject = $first_name . " " . $last_name . " has messaged you from Mushroomdev.com";

		$headers = "FROM: " . $email . "\r\n";

		mail($to, $subject, $message, $headers);

		$_SESSION['mail_sent'] = "<span style='color: #e0006c; font-size: 0.8em'>Thanks for getting in touch. Your email has been recevied and I'll get back to you shortly.</span>";

		header("Location: http://mushroomdev.com/index.php#contact");

	}
?>