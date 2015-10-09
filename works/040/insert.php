<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Admin DB</title>
</head>
<body>
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
    	$pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        // SQL発行
        $stmt = $pdo->prepare("INSERT IGNORE INTO login (user, pass) VALUES (?, ?)");
        $stmt->bindValue(1, $i_user);
        $stmt->bindValue(2, $i_pass);
        $stmt->execute();
        if ($stmt->rowCount()===0) {
            print "既に存在するユーザです。";
        }else{
            print "新しいレコードを追加しました。";
        }
    }
    catch(PDOException $e) {
        print "Connection failed: " . $e->getMessage();
    }

    // close the connection
    $conn = null;
    ?>
    <a href="./"><input type="button" value="戻る"></a>
</body>
</html>