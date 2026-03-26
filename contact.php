<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON input'
    ]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');
$companywebsite = trim($data['companyWebsite'] ?? '');

if (!empty($companywebsite)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Spam detected.'
    ]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Name, email, message are required.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address'
    ]);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.privateemail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['MAIL_USERNAME'] ?? '';
    $mail->Password = $_ENV['MAIL_PASSWORD'] ?? '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('admin@tumbletech.dev', 'Tumbletech Website');
    $mail->addAddress('admin@tumbletech.dev');
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'New Inquiry from Tumbletech Website';

    $mailBody = "Name: {$name}\n";
    $mailBody .= "Email: {$email}\n";
    $mailBody .= "Phone: {$phone}\n\n";
    $mailBody .= "Message:\n{$message}\n";

    $mail->Body = $mailBody;

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Your inquiry has been sent successfully'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send inquiry',
        'error' => $mail->ErrorInfo
    ]);
}