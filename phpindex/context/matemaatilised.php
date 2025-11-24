<?php
function clearVarsExcept1($url, $varname){
    $url=basename($url);
    if(str_starts_with($url, "?")){
        return "?$varname=".$_REQUEST[$varname];
    }
    return strtok($url, "?")."?$varname=".$_REQUEST[$varname];
}
echo "<h2>Matemaatilised tehted/funktsioonid</h2>";
$arv1=10;
$arv2=15;
$liitmine=$arv1+$arv2;
$lahut=$arv1-$arv2;
$korrutis=$arv1*$arv2;
$jagamine=$arv1/$arv2;
echo "arv1 on ".$arv1." ja arv2 on ".$arv2."<br>";
echo "Liidame arv1 ja arv2 arv1+arv2 = ".$liitmine."<br>";
echo "Kui lahutame arv1 ja arv2 arv1-arv2 = ".$lahut."<br>";
echo "Korrutame arv1 ja arv2 arv1*arv2 = ".$korrutis."<br>";
echo "Jagame arv1 ja arv2 arv1/arv2 = ".$jagamine."<br>";
echo "<h2>Omistamise operaatorid: </h2>";
echo "<br> \$arv1++ - suurendamine ühe võrra $arv1=$arv1+1";
echo "<br>";
// $arv1++ - suurendamine ühe võrra $arv1=$arv1+1
$arv1++;
echo $arv1 ." - suurendamine ühe võrra";
echo "<br>";
$arv1=10;
// $arv1++ - vähendamine ühe võrra $arv1=$arv1-1
$arv1--;
echo $arv1 ." - vähendamine ühe võrra";
echo "<br>";
echo "<strong>Ruutjuur -sqrt </strong> = ".sqrt($arv1)."<br>";
echo "<strong>Juhuslik arv:</strong> ".rand();
echo "<br>";
echo "Piiratud juhuslik arv (1-100 vahel näiteks): ".rand(1, 100);

echo "<br>";
echo "<strong>Ümardamine</strong> - arvude ümardamiseks me kasutame round(), ceil(), või floor()";
$arv3=3.456;
echo "<br>";
echo "Arv3 on 3.456";
echo "<br>";
echo round($arv3, 2)." - arv3 ümardatuna kasutades round(\$arv3, 2)";
echo "<br>";
echo ceil($arv3)." - arv3 ümardatuna kasutades ceil()";
echo "<br>";
echo floor($arv3)." - arv3 ümardatuna kasutades floor()";
echo "<br>";
echo "<strong>Trigonomeetria</strong> - cos() ja deg2rad()";
echo "<br>";
echo cos(0.8). " - cos(0.8)";
echo "<br>";
echo deg2rad(30). " - deg2rad(30)";
echo "<br>";
echo "<strong>Leiame Pi kasutades</strong> pi()";
echo "<br>";
echo pi();
echo "<br>";
echo "<strong>Astendamine</strong>";
echo "<br>";
echo "Astendame 5 astmesse 2 (echo pow(5,2)) - ".pow(5,2);
echo "<br>";
echo "<br>";
echo "<h2>Arvu mõistatus. Arva ära kaks arvu vahemikus 0-10</h2>";
$salaarv1=9;
$salaarv2=4;
//kirjuta matemaatilise tehte või funktsioonide abil 5 vihjet
echo "<ol> <li>Kui esimene arv korrutada 5-ga, siis tuleb ".($salaarv1*5)."</li>";
echo "<li>Kui sa liidad need kokku ja siis jagad kahega, siis sa saad ".(($salaarv1+$salaarv2)/2)."</li>";
echo "<li>Kui sa need omavahel jagad, siis sa saad ".($salaarv1/$salaarv2)."</li>";
echo "<li>Kui sa korrutad arv1 ja arv2, siis sa saad ".($salaarv1*$salaarv2)."</li>";
echo "<li>Kui sa liidad need kokku ja siis paned astmesse 4, siis sa saad ".(pow(($salaarv1+$salaarv2), 4))."</li>";
echo "</ol>";
echo "<br>";
?>
<form action="<?=clearVarsExcept1($_SERVER['REQUEST_URI'], "leht")?>" method="post">
    <label for="salaarv1">Sisesta arv 1</label>
    <input type="text" id="salaarv1" name="salaarv1">
    <label for="salaarv2">Sisesta arv 2</label>
    <input type="text" id="salaarv2" name="salaarv2">
    <input type="submit" value="Kontroll">

</form>
<?php
if(isset($_REQUEST["salaarv1"]  )  )  {
    if($_REQUEST["salaarv1"]==$salaarv1){
        echo $_REQUEST["salaarv1"]." on Õige!";
    } else{
        echo$_REQUEST["salaarv1"]." on Vale!";
    }
}
if(isset($_REQUEST["salaarv2"]  )  )  {
    if($_REQUEST["salaarv2"]==$salaarv2){
        echo $_REQUEST["salaarv2"]." on Õige!";
    } else{
        echo$_REQUEST["salaarv2"]." on Vale!";
    }
}