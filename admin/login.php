<?php
require_once('config.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION['admin'] = true;
        header('Location: dashboard.php');
        exit();
    }
    $error = "Hatalı kullanıcı adı veya şifre";
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Admin Girişi</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="admin-login">
        <h2>Admin Girişi</h2>
        <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
        <form method="POST">
            <input type="text" name="username" placeholder="Kullanıcı Adı" required>
            <input type="password" name="password" placeholder="Şifre" required>
            <button type="submit">Giriş</button>
        </form>
    </div>
</body>
</html> 