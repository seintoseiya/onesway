<?php 

session_start();

require_once 'common.php';

$_SESSION = array();

if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time()-86400, '/onesway/042/');
}

session_destroy();

header('Location: '.'login.php');