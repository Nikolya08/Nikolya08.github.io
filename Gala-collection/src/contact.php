<?php

    $name = htmlspecialchars($_POST["name"]);
    $tel = htmlspecialchars($_POST["tel"]);
    $error_name = "";
    $error_tel = "";
    $error = false;

    if (strlen($name) == 0) {
        $error_name = "Введите имя";
        $error = true;
    }
    if (strlen($tel) == 0) {
        $error_tel = "Введите номер";
        $error = true;
    }
    if (!$error) {
        $subject = "=utf-8?B?".base64_encode($subject)."?=";
        $headers = "From: $name\r\nReply-to: $tel\r\nContent-type: text/html; charset=utf-8\r\n";
        if (mail("ko_s@meta.ua", $subject, $headers, $name, $tel)) {
            echo "Сообщение отправлено";
        }
        else {
            echo "Сообщение не отправлено";
        }
    }



    $email = htmlspecialchars($_POST["email"]);
    $error_email = "";
    if ($email === "" || !preg_match("/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i", $email)) {
        $error_email = "Введите коректный email";
        $error_mail = true;
    }
    if (!$error_mail) {
        $subject = "=utf-8?B?".base64_encode($subject)."?=";
        $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
        if (mail("ko_s@meta.ua", $subject, $headers)) {
            echo "Сообщение отправлено";
        }
        else {
            echo "Сообщение не отправлено";
        }
    }

    $footerName = htmlspecialchars($_POST["footer-name"]);
    $footerEmail = htmlspecialchars($_POST["footer-email"]);
    $question = htmlspecialchars($_POST["question"]);
    $error_footerName = "";
    $error_footerEmail = "";
    $error_question = "";
    $footer_error = false;

    if (strlen($footerName) === 0) {
        $error_footerName = "Введите имя";
        $footer_error = true;
    }
    if ($footerEmail === "" || !preg_match("/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i", $email)) {
        $error_footerEmail = "Введите коректный email";
        $footer_error = true;
    }
    if (strlen($question) == 0) {
        $error_question = "Введите сообщение";
        $footer_error = true;
    }
    if (!$footer_error) {
        $subject = "=utf-8?B?".base64_encode($subject)."?=";
        $headers = "From: $footerName\r\nReply-to: $footerEmail\r\nContent-type: text/html; charset=utf-8\r\n";
        if (mail("ko_s@meta.ua", $subject, $headers, $question)) {
            echo "Сообщение отправлено";
        }
        else {
            echo "Сообщение не отправлено";
        }
    }



    exit('<meta http-equiv="refresh" content="0; url=index.php" />');
?>