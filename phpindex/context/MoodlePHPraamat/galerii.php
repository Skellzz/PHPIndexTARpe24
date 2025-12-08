<?php
require('config.php');
global $yhendus;

// Uue pildi lisamine
if (isset($_REQUEST["uusleht"])) {
    if (!empty(($_REQUEST["Arvutinimetus"]))) {
        $kask = $yhendus->prepare("INSERT INTO arvutid ( Arvutinimetus,ArvutiHind, ArvutiPilt, arvutiGarantii, Arvutispecid) VALUES ( ?, ?, ?, ?, ?)");
        $kask->bind_param("sisss", $_REQUEST["Arvutinimetus"],$_REQUEST["ArvutiHind"], $_REQUEST["ArvutiPilt"], $_REQUEST["arvutiGarantii"], $_REQUEST["Arvutispecid"]);
        $kask->execute();
        header("Location: ".$_SERVER["PHP_SELF"]);
        exit();
    }
}

// Pildi kustutamine
if (isset($_REQUEST["kustutusid"])) {
    $kask = $yhendus->prepare("DELETE FROM arvutid WHERE id=?");
    $kask->bind_param("i", $_REQUEST["kustutusid"]);
    $kask->execute();
    header("Location: ".$_SERVER["PHP_SELF"]);
    exit();
}

// Võtame kõik pildid
$kask = $yhendus->prepare("SELECT  Arvutinimetus,ArvutiHind, ArvutiPilt, arvutiGarantii, Arvutispecid FROM arvutid");
$kask->bind_result( $Arvutinimetus,$ArvutiHind, $ArvutiPilt, $arvutiGarantii, $Arvutispecid);
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
        <h1>Arvutid</h1>
        <p>Vaata meie arvutite valikut</p>
    </div>

    <div class="nav">
        <a href="/index.php">Avaleht</a>
        <a href="/galerii.php">Galerii</a>
        <a href="/admin.php">Admin</a>
    </div>

    <div class="container">
        <h2>Meie arvutite galerii</h2>

        <p><a href="<?=$_SERVER['PHP_SELF']?>?lisamine=jah" class="button">Lisa uus Arvuti</a></p>

        <?php
        if (isset($_REQUEST["lisamine"])) {
            ?>
            <div class="admin-vorm">
                <form action="<?=$_SERVER["PHP_SELF"]?>">
                    <input type="hidden" name="uusleht" value="jah" />
                    <h3>Uue pildi lisamine</h3>

                    <label>Arvuti:</label>
                    <input type="text" name="arvutinimetus" required />

                    <label>Hind:</label>
                    <input type="number" name="arvutihind" required />

                    <label>ArvutiPilt:</label>
                    <input type="text" name="pilt" required />

                    <label>arvutiGarantii:</label>
                    <input type="text" name="garantii" required />

                    <label>ArvutiSpecid:</label>
                    <input type="text" name="arvutispecid" required />

                    <input type="submit" value="Lisa pilt" class="button" />
                </form>
            </div>
            <?php
        }
        ?>

        <div class="galerii">
            <?php
            $counter = 0;
            while ($kask->fetch()) {
                $counter++;
                echo '<div class="galerii-item">';
                echo '<img src="' . htmlspecialchars($ArvutiPilt) . '" alt="' . htmlspecialchars($Arvutinimetus) . '">';
                echo '<div class="galerii-info">';
                echo '<h3>' . htmlspecialchars($Arvutinimetus) . '</h3>';
                echo '<p>' . htmlspecialchars($Arvutispecid) . '</p>';
                echo '<p class="arvutihind">Hind: ' . htmlspecialchars($ArvutiHind) . '</p>';
                echo '<p class="garantii">Arvuti +Garantii: ' . htmlspecialchars($arvutiGarantii) . '</p>';
                echo '</div>';
                echo '</div>';
            }

            if ($counter == 0) {
                echo '<p>Pilte ei ole veel lisatud.</p>';
            }
            ?>
        </div>
    </div>

    <div class="footer">
        <p>Kasutatud Arvutite Pood &copy; 2025</p>
        <p>Kontakt: george.teemus@gmail.com| Tel: 112</p>
    </div>
    </div>
    </body>
    </html>
<?php
$yhendus->close();
?>