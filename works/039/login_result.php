<?php
// 接続情報
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lesson1";
// インプット値
$i_user = (string)filter_input(INPUT_POST, 'user');
$i_pass = (string)filter_input(INPUT_POST, 'pass');

try {
  // DB接続
  $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
  // SQL発行
  $stmt = $pdo->prepare("SELECT * FROM ow_login WHERE user = ? AND pass = ?");
  $stmt->bindValue(1, $i_user);
  $stmt->bindValue(2, $i_pass);
  $stmt->execute();
  // 結果の取得
  if($row = $stmt->fetch(PDO::FETCH_ASSOC)) { 
      echo $row['user'] . " is login.";
  }else{
    echo "no user or no password";
  }
}
catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
// DB切断
$pdo = null;
?>