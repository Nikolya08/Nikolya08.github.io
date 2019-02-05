<?php
    $mysgli = false;
    function connectDB () {
        global $mysgli;
        $mysgli = new mysqli("localhost", "root", "", "gala");
        $mysgli->query("SET NAMES 'utf-8'");
    }

    function closeDB () {
        global $mysgli;
        $mysgli->close ();
    }
?>