<?php
error_reporting(0);

$data = json_decode(file_get_contents("php://input"), true);

$firstname = $data["firstname"] ?? "";
$lastName = $data["lastName"] ?? "";
$cellphone = $data["cellphone"] ?? "";
$email = $data["email"] ?? "";

$response = array(
    "success" => true,
    "message" => "Form received successfully",
    "firstname" => $firstname,
    "lastName" => $lastName,
    "cellphone" => $cellphone,
    "email" => $email
);

header('Content-Type: application/json');
echo json_encode($response);

?>
