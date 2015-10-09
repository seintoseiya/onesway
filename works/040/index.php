<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
	<title>Admin DB</title>
</head>
<body>
	<div id="container">
		<h1>Admin DB</h1>
		<div id="leftArea">
			<h2>List of user</h2>
			<?php
		    // 接続情報
		    $servername = "localhost";
		    $username = "root";
		    $password = "root";
		    $dbname = "lesson1";

		    try {
		    	$pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
		        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
		        // SQL発行
		        $sql = "SELECT * FROM login";
		        print "<table border='1'><tr><th>user</th><th>password</th></tr>";
		        foreach ($pdo->query($sql) as $row) {
		        	print "<tr><td>" . $row['user'] . "</td><td>" . $row['pass'] . "</td></tr>";
		        }
		        print "</table>";
		    }
		    catch(PDOException $e) {
		        print "Connection failed: " . $e->getMessage();
		    }

		    // close the connection
		    $conn = null;
		    ?>
		</div>
		<div id="rightArea">
			<h2>Create a new user</h2>
			<form method="post" action="insert.php">
				user:<br>
				<input type="text" name="user" maxlength="50" pattern="^[0-9A-Za-z]+$" title="必須項目：半角英数字で入力してください。" required>
				<br>
				password:<br>
				<input type="password" name="pass" maxlength="100" pattern="^[0-9A-Za-z]+$" title="必須項目：半角英数字で入力してください。" required><br>
				<input type="submit" value="Create">
			</form>
			<h2>Delete a user</h2>
			<form method="post" action="delete.php">
				user:<br>
				<input type="text" name="user" pattern="^[0-9A-Za-z]+$" title="必須項目：半角英数字で入力してください。" required>
				<br>
				<input type="submit" value="Delete">
			</form>
			<h2>Change the password</h2>
			<form method="post" action="update.php">
				user:<br>
				<input type="text" name="user" name="user" pattern="^[0-9A-Za-z]+$" title="必須項目：半角英数字で入力してください。" required>
				<br>
				new password:<br>
				<input type="password" name="newpass" maxlength="100" pattern="^[0-9A-Za-z]+$" title="必須項目：半角英数字で入力してください。" required><br>
				<input type="submit" value="Change">
			</form>
		</div>
	</div>
</body>
</html>