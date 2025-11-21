<?php
echo "<h2>Tekstfunktsioonid</h2>";
$tekst='Veebirakendused on arvutitarkvara programm';
echo $tekst; //näitab muutaja sisu
echo "<br>";
echo "Mitu sõna on lauses -str_word_count()= ".str_word_count($tekst). "tk";
//metshein.com
echo "<br>";
echo "Kõik tähed muudab väiksemaks -strtolower()= ".strtolower($tekst);
echo "<br>";
echo "Kõik tähed muudab suuremaks -strtoupper()= ".strtoupper($tekst);
echo "<br>";
echo "loeb kokku märkide arvu tekstis -strlen()= ".strlen($tekst);
echo "<br>";
echo "loeb kokku sõnade arvu -str_word_count()= ".str_word_count($tekst);
echo "<br>";
echo "See kood eemaldab tühikud tekstist -.trim= ";echo "<pre>".trim($tekst)."</pre>";
echo "<br>";
echo "See kood eemaldab tühikud teksti eest -.ltrim()= ";echo "<pre>".ltrim($tekst)."</pre>";
echo "<br>";
echo "See kood eemalda tühikud lõppust -rtrim= ";echo"<pre>".rtrim($tekst)."</pre>";
echo "<br>";
echo "See kood eelamdab teatud tähed tekstist -trim= ";echo trim($tekst, "A, a, k, n, w");
echo "<br>";
$text = '<b>Experience</b> <a href="#">is</a> the teacher <br>of fools';
echo "See kood eemaldab html kodist -strip_tags= ";echo strip_tags($text);
echo "<br>";
echo "See kood lubab html koodi -strip_tags= ";echo strip_tags($text, '<b>, <br>');
echo "<br>";
echo "see kood määrab teksti -[0]= ".$tekst[0].$tekst[4];
echo "<br>";
echo "See kood laseb sul tekstist ainult teautud kohad välja võta -substr()= ".substr($tekst, 3, 5);
echo "<br>";
$otsitav = 'in';
echo "Selle koodiga saab leida erinevaid asju tekstist -strops()= ".$leia_tekstist = strpos($tekst, $otsitav, 0);;
echo $leia_tekstist;
echo "<br>";
$asendus = 'emme';
$otsitav_algus = 4;
$otsitav_pikkus = 4;
echo "Selle koodiga saab teksti asendada -substr_replace()".substr_replace($tekst, $asendus, $otsitav_algus, $otsitav_pikkus);
echo "<br>";
echo "<h2>MÕISTATUS - ARVA ÄRA EESTI ÖINNANIMI</h2>";
// eesmärk on ära arvata, millist Eesti linna on kirjeldatud.
// Kirjuta abiks 5-6 tekstipõhist funktsiooni eh vihjet,
// mis aitavad samm-sammult lähemale jõuda õigele linnanimele.
// funktsioonid on näiteks selliseid - esimene täht on .. jne*/
echo "<br>";
$linn="Püssi";
echo "<ol><li>linn algab ".substr($linn,0,1)." tähega</li>";
echo "<br>";
echo "<li>linn lõppeb ".substr($linn,0,5)." tähega</li>";
echo "<br>";
echo "<li>linnas on ".mb_strlen($linn)." tähte</li>";
echo "<br>";
echo "<li>linnal on ainult ".str_word_count($linn)." Ä,Ü,Õ,Ö tähte</li>";
echo "<br>";
echo "<li>linn on".substr_replace($linn, "*", 3, 4)." </li>";
?>
<form action="tekstifunktsioonid.php" method="post">
    <label for="linn">Sisesta linnanimi</label>
    <input type="text" id="linn" name="linn">
    <input type="submit" value="Kontrolli">
</form>
<?php
if(isset($_REQUEST['linn'])){
    if($_REQUEST['linn']=="Püssi"){
        echo "õige";
    }
    else {
        echo "Vale proovi uuest";
    }
}
?>











