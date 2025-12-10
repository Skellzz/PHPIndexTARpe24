<?php
$servernimi='localhost';
$kasutajanimi='georgeteemus';
$parool='12345';
$andmebaasinimi='georgeteemus';
$yhendus=new mysqli($servernimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");
