<?php
require_once('config.php');

if (!isset($_SESSION['admin'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['cv_file'])) {
        $file = $_FILES['cv_file'];
        $file_name = 'cv.pdf';
        $file_tmp = $file['tmp_name'];
        $file_type = $file['type'];
        
        if ($file_type == 'application/pdf') {
            $upload_path = CV_UPLOAD_PATH . $file_name;
            if (move_uploaded_file($file_tmp, $upload_path)) {
                $success = "CV başarıyla güncellendi!";
            } else {
                $error = "Dosya yüklenirken bir hata oluştu.";
            }
        } else {
            $error = "Lütfen sadece PDF dosyası yükleyin.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="admin-dashboard">
        <h2>CV Yönetimi</h2>
        <?php 
        if (isset($success)) echo "<p class='success'>$success</p>";
        if (isset($error)) echo "<p class='error'>$error</p>";
        ?>
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="cv_file" accept=".pdf" required>
            <button type="submit">CV'yi Güncelle</button>
        </form>
        <a href="logout.php" class="logout">Çıkış Yap</a>
    </div>
</body>
</html> 