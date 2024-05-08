<?php
if(isset($_POST['register'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Format the data
    $userData = "$username,$email,$password\n";
    
    // Write data to the file
    file_put_contents('login.txt', $userData, FILE_APPEND);
    
    // Redirect back to the index page
    header("Location: index.html");
    exit();
}
?>
