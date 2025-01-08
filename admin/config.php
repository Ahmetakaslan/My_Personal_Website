<?php
session_start();

// Admin bilgileri (güvenlik için bu bilgileri değiştirin)
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'admin123'); // Gerçek kullanımda daha güçlü bir şifre kullanın

// CV dosyası için yol
define('CV_UPLOAD_PATH', '../assets/cv/');

// Klasörü oluştur (eğer yoksa)
if (!file_exists(CV_UPLOAD_PATH)) {
    mkdir(CV_UPLOAD_PATH, 0777, true);
}
?> 