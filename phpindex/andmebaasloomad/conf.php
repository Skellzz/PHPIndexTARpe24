<?php
$serverinimi="localhost";
$kasutajanimi="georgeteemus";
$parool="12345";
$andmebaasinimi="georgeteemus";
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");
