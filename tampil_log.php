<?php
include 'config.php';

$sql = "SELECT * FROM log_login ORDER BY waktu_login DESC";
$result = $conn->query($sql);

echo "<h2>Daftar Login yang Berhasil</h2>";
echo "<table border='1' cellpadding='10'>
        <tr>
            <th>Username</th>
            <th>Waktu Login</th>
        </tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>" . htmlspecialchars($row['username']) . "</td>
            <td>" . $row['waktu_login'] . "</td>
        </tr>";
}
echo "</table>";
?>
