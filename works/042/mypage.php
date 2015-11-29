<?php

header("Content-Type: text/html; charset=UTF-8");
session_start();

require_once 'common.php';
require_once 'twitteroauth-0.4.1/autoloader.php';

use Abraham\TwitterOAuth\TwitterOAuth;
if(empty($_SESSION)) header( 'location: login.php' );

echo '<p><a href="logout.php">ログアウトする</a></p>';

//セッションに入れておいたさっきの配列
$access_token = $_SESSION['access_token'];

//OAuthトークンとシークレットも使って TwitterOAuth をインスタンス化
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token['oauth_token'], $access_token['oauth_token_secret']);

// APIの「GET statuses/user_timeline」を使用
$req = $connection->get('statuses/user_timeline',array('count'=>'10'));
if (isset($req) && empty($req->errors)) {
    echo '<dl>';
    foreach ($req as $val) {
        echo '<dt>' . date('Y-m-d H:i:s', strtotime($val->created_at)) . '</dt>';
        echo '<dd>' . $val->text . '';
    }
    echo '</dd></dl>';
} else {
    echo 'つぶやきはありません。';
}
