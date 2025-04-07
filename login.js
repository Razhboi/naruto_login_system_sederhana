document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById('loginBox');
    setTimeout(() => {
    loginBox.classList.add('show');
    }, 200);

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload halaman

    let formData = new FormData(this);

    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
        alert("✅ Login berhasil!");
          window.location.href = "dashboard.php"; // ganti dengan halaman kamu
        } else {
        alert("❌ Login gagal: " + data);
        }
    })
    .catch(error => {
        console.error("❌ Error:", error);
        alert("❌ Terjadi kesalahan saat login.");
    });
    });
});