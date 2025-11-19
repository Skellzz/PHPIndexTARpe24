<div class="container">
    <div>
 <?php
echo "<h1>Ajafunktsioonid</h1>";
echo "Tänane kuupäev".date("d.m.Y");
//timezone - juhul kui timezone ei ole määratud,
// siis php kasutab aega mis on localhost'is
date_default_timezone_set("Europe/Tallinn");
echo "<br>";
echo "<a href='https://www.php.net/manual/en/timezones.europe.php'>Timezones </a>";
echo "<br>";
echo "time()- aeg sekundites". time();
echo "<br>";
echo "date() -".date("d.m.Y G:i:s", time());
echo "<pre>
date('d.m.Y G:i:s', time())
d - ? 01...31
m - 1...12
Y - neljakohane arv
G - 24h formaat
i -minutid 0...59
s - sekundid 0...59
</pre>";
 ?>
</div>
    <div>
        <?php
echo "<h2>Tehted kuupäevadega</h2>";
echo "<br>";
echo "+1min = time()+60 ".date("d.m.Y G:i:s", time()+60);
echo "<br>";
echo "+1tund = time()+60*60 ".date("d.m.Y G:i:s", time()+60*60*24);
echo "<br>";
echo "+1päev = time()+60*60*24 ".date("d.m.Y G:i:s", time()+60*60*24);
echo "<br>";
echo "<h2>Kuupäeva genereerimine</h2>";
echo "<br>";
echo"mktime(tunnid, minutid, sekundid, kuu, päev, aasta)";
echo "<br>";
$synnipaev=mktime(5, 13, 30, 7, 16, 2008);
echo"Minu sünnipäev".date("d.m.Y G:i:s", $synnipaev);
echo "<br>";
echo "Massiivi abil kuvada tänane kuu nimetus";
echo "<br>";
 ?>
    </div>
    <div>
        <?php
$kuud=array(1=>'jaanuar','veebruar', 'märts', 'april', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember');
$paev=date('d');
$aasta=date('Y');
$kuu=$kuud[date('m')]; //kuu nimega
echo "Tänanae kuupäev kuu nimega ".$paev.".".$kuu." ".$aasta."a";
//ise kirjuta oma sünnipäeva kuu nimega
echo "<br>";
        ?>
    </div>

</div>










