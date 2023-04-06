<?php

// Hello! welcome to the settings page.
// Here's your two steps guide:

// FIRST:
// Instead of newsletter@test.com put the email address of the mailing list,
// (the same that SendBlaster uses in Manage Subscriptions Section)
// ... please pay attention to the  ' ' apostrophes, they must remain around the email address.

$emailmanager = 'edsleeps+phpformsubmit@gmail.com';

// SECOND:
// save this file, and close it. Thank you!


error_reporting(0);


$msg = '';
foreach ($_POST as $k => $v) { $msg .= $k.': '.$v."\n\n"; }

$email = trim($_POST['email']);
$Ok = ereg("^([a-zA-Z0-9_\.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", $email);

$headers  = 'From: ' . $email . "\n";
$headers .= 'MIME-Version: 1.0' ."\n";
$headers .= 'Content-Type: text/plain; charset=iso-8859-1' ."\n";
$headers .= 'Content-Transfer-Encoding: 8bit'. "\n\n";

if ($Ok) {
	mail($emailmanager,'[hanglinegame.com] Message from user',$msg,$headers);
?>
<script language = 'javascript'>
	alert('Thank you, your message has been sent');
	history.go(-1);
	</script>
	<?
} else {
	?>
	<script language = 'javascript'>
	alert('Please provide a valid Email address.');
	history.go(-1);
	</script>
	<?
}


?>
