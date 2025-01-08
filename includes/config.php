<?php
session_start();
$db_host = 'localhost';
$db_user = 'root';  // MySQL kullanıcı adınız
$db_pass = '';      // MySQL şifreniz
$db_name = 'portfolio';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$conn) {
    die("Bağlantı hatası: " . mysqli_connect_error());
}

// CV dosyasının yolu için sabit
define('CV_UPLOAD_PATH', '../assets/cv/');
?> 