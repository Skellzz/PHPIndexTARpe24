<?php
require('config.php');
global $yhendus;

$kask = $yhendus->prepare("SELECT Id, Arvutinimetus, ArvutiHind, ArvutiPilt, arvutiGarantii, ArvutiSpecid FROM arvutid");
$kask->bind_result($Id, $Arvutinimetus, $ArvutiHind, $ArvutiPilt, $arvutiGarantii, $ArvutiSpecid);
$kask->execute();
?>
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Galerii - Kasutatud Arvutite Pood</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="header">
    <h1>ARVUTID</h1>
    <p>Vaata meie arvutite valikut</p>
</div>

<div class="nav">
    <a href="index.php">Avaleht</a>
    <a href="hinnakiri.php">Hinnakiri</a>
    <a href="galerii.php">Galerii</a>
    <a href="admin.php">Admin</a>
</div>

<div class="container">
    <h2>Meie arvutite galerii</h2>

    <div class="galerii">
        <?php
        $counter = 0;
        while ($kask->fetch()) {
            $counter++;
            echo '<div class="galerii-item">';
            echo '<div class="galerii-info">';
            echo '<h3>' . htmlspecialchars($Arvutinimetus) . '</h3>';
            echo '<p>' . nl2br(htmlspecialchars($ArvutiSpecid)) . '</p>';
            echo '<p class="hind">Hind: ' . htmlspecialchars($ArvutiHind) . '€</p>';
            echo '<p class="garantii">Garantii: ' . htmlspecialchars($arvutiGarantii) . '</p>';
            echo '</div>';
            echo '</div>';
        }

        ?>
    </div>
</div>

<div class="footer">
    <p>Kasutatud Arvutite Pood &copy; 2025</p>
    <p>Kontakt: george.teemus@gmail.com | Tel: 112</p>
</div>
</body>
</html>
<?php
$yhendus->close();
?>
