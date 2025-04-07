<?php
// Contoh sederhana login.php
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === "admin" && $password === "1234") {
    echo "success";
} else {
    echo "Username atau password salah!";
}
