<?php

header("Content-Type: application/json; charset=UTF-8");
require_once('../includes/connect.php');

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$comments = trim($_POST['message'] ?? '');

$errors = [];

if(empty($name)) {
    $errors['preferred_name'] = 'Preferred Name has to be filled in please';
}

if (empty($email)) {
    $errors['email'] = 'Email has to be filled in please.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['legit_email'] = 'Please provide an existing email. Make sure to check the spelling too in case you made a typo.';
}

if(empty($subject)) {
    $errors['subject'] = 'Subject has to be filled in please';
}

if(empty($comments)) {
    $errors['message'] = 'Message has to be filled in please';
}

$query = "INSERT INTO contacts (preferred_name, email, subject_line, comments) VALUES (:name, :email, :subject, :message)";
$stmt = $connection->prepare($query);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':subject', $subject);
$stmt->bindParam(':message', $comments);

if ($stmt->execute()) {
    $to = 'littlerootdreams@gmail.com';
    $sub = 'New Message Received';

    $emailBody = "You have received a new message on Littleroot Dreams! \n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Info: $email\n\n";
    $emailBody .= "Subject: $subject\n";
    $emailBody .= "Message: $comments\n\n";

    mail($to, $sub, $emailBody);

    echo json_encode(["message" => "Thank you for your message! We'll be in contact as soon as possible!"]);
} else {
    echo json_encode(["errors" => ["database" => "Failed to save your message. Please try again later."]]);
}

?>