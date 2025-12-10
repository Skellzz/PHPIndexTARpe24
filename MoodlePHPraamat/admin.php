<?php
require('config.php');
global $yhendus;

// Uue arvuti lisamine
if (isset($_REQUEST["uusarvuti"])) {
    if (!empty(trim($_REQUEST["Arvutinimetus"]))) {
        $kask = $yhendus->prepare("INSERT INTO arvutid (Arvutinimetus, ArvutiHind, ArvutiPilt, arvutiGarantii, ArvutiSpecid) VALUES (?, ?, ?, ?, ?)");
        $kask->bind_param("sisss", $_REQUEST["Arvutinimetus"], $_REQUEST["ArvutiHind"], $_REQUEST["ArvutiPilt"], $_REQUEST["arvutiGarantii"], $_REQUEST["ArvutiSpecid"]);
        $kask->execute();
        header("Location: ".$_SERVER["PHP_SELF"]);
        exit();
    }
}

// Arvuti kustutamine
if (isset($_REQUEST["kustutusid"])) {
    $kask = $yhendus->prepare("DELETE FROM arvutid WHERE Id=?");
    $kask->bind_param("i", $_REQUEST["kustutusid"]);
    $kask->execute();
    header("Location: ".$_SERVER["PHP_SELF"]);
    exit();
}

// Arvuti muutmine
if (isset($_REQUEST["muutmisid"])) {
    $kask = $yhendus->prepare("UPDATE arvutid SET Arvutinimetus=?, ArvutiHind=?, ArvutiPilt=?, arvutiGarantii=?, ArvutiSpecid=? WHERE Id=?");
    $kask->bind_param("sisssi", $_REQUEST["Arvutinimetus"], $_REQUEST["ArvutiHind"], $_REQUEST["ArvutiPilt"], $_REQUEST["arvutiGarantii"], $_REQUEST["ArvutiSpecid"], $_REQUEST["muutmisid"]);
    $kask->execute();
    header("Location: ".$_SERVER["PHP_SELF"]);
    exit();
}
?>
    <!DOCTYPE html>
    <html lang="et">
    <head>
        <meta charset="UTF-8">
        <title>Admin - Kasutatud Arvutite Pood</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="header">
        <h1>ADMINISTRAATORI PANEEL</h1>
        <p>Siin saad arvuteid lisada, muuta ja kustutada</p>
    </div>

    <div class="nav">
        <a href="index.php">Avaleht</a>
        <a href="hinnakiri.php">Hinnakiri</a>
        <a href="galerii.php">Galerii</a>
        <a href="admin.php">Admin</a>
    </div>

    <div id="menyykiht">
        <h2>Arvutite nimekiri</h2>
        <ul>
            <?php
            $kask = $yhendus->prepare("SELECT Id, Arvutinimetus FROM arvutid");
            $kask->bind_result($id, $arvutinimetus);
            $kask->execute();
            while ($kask->fetch()) {
                echo "<li><a href='".$_SERVER["PHP_SELF"]."?id=$id'>".htmlspecialchars($arvutinimetus)."</a></li>";
            }
            ?>
        </ul>
        <p>
            <a href="<?=$_SERVER['PHP_SELF']?>?lisamine=jah">Lisa uus arvuti ...</a>
        </p>
    </div>

    <div id="sisukiht">
        <?php
        // Ühe arvuti kuvamine ja muutmine
        if (isset($_REQUEST["id"])) {
            $kask = $yhendus->prepare("SELECT Id, Arvutinimetus, ArvutiHind, ArvutiPilt, arvutiGarantii, ArvutiSpecid FROM arvutid WHERE Id=?");
            $kask->bind_param("i", $_REQUEST["id"]);
            $kask->bind_result($Id, $Arvutinimetus, $ArvutiHind, $ArvutiPilt, $arvutiGarantii, $ArvutiSpecid);
            $kask->execute();

            if ($kask->fetch()) {
                if (isset($_REQUEST["muutmine"])) {
                    echo "
                <form action='".$_SERVER["PHP_SELF"]."'>
                    <input type='hidden' name='muutmisid' value='$Id'/>
                    <h2>Arvuti muutmine</h2>
                    <dl>
                        <dt>Arvuti nimetus:</dt>
                        <dd>
                            <input type='text' name='Arvutinimetus' value='".htmlspecialchars($Arvutinimetus)."'/>
                        </dd>
                        <dt>Hind (eurodes):</dt>
                        <dd>
                            <input type='number' name='ArvutiHind' value='".htmlspecialchars($ArvutiHind)."'/>
                        </dd>
                        <dt>Pildi link:</dt>
                        <dd>
                            <input type='text' name='ArvutiPilt' value='".htmlspecialchars($ArvutiPilt)."'/>
                        </dd>
                        <dt>Garantii:</dt>
                        <dd>
                            <input type='text' name='arvutiGarantii' value='".htmlspecialchars($arvutiGarantii)."'/>
                        </dd>
                        <dt>Spetsifikatsioonid:</dt>
                        <dd>
                            <textarea rows='10' cols='50' name='ArvutiSpecid'>".htmlspecialchars($ArvutiSpecid)."</textarea>
                        </dd>
                    </dl>
                    <input type='submit' value='Muuda' />
                </form>
                ";
                } else {
                    echo "<h2>".htmlspecialchars($Arvutinimetus)."</h2>";
                    echo "<img src='".htmlspecialchars($ArvutiPilt)."' style='max-width: 300px;'><br>";
                    echo "<p><strong>Hind:</strong> ".htmlspecialchars($ArvutiHind)."€</p>";
                    echo "<p><strong>Garantii:</strong> ".htmlspecialchars($arvutiGarantii)."</p>";
                    echo "<p><strong>Spetsifikatsioonid:</strong><br>".nl2br(htmlspecialchars($ArvutiSpecid))."</p>";
                    echo "<br><a href='".$_SERVER["PHP_SELF"]."?kustutusid=$Id'>Kustuta</a> ";
                    echo "<a href='".$_SERVER["PHP_SELF"]."?id=$Id&muutmine=jah'>Muuda</a>";
                }
            } else {
                echo "<p>Vigased andmed.</p>";
            }
        }

        // Uue arvuti lisamise vorm
        if (isset($_REQUEST["lisamine"])) {
            ?>
            <form action="<?=$_SERVER["PHP_SELF"]?>">
                <input type="hidden" name="uusarvuti" value="jah" />
                <h2>Uue arvuti lisamine</h2>
                <dl>
                    <dt>Arvuti nimetus:</dt>
                    <dd>
                        <input type="text" name="Arvutinimetus" />
                    </dd>
                    <dt>Hind (eurodes):</dt>
                    <dd>
                        <input type="number" name="ArvutiHind" />
                    </dd>
                    <dt>Pildi link (URL):</dt>
                    <dd>
                        <input type="text" name="ArvutiPilt" />
                    </dd>
                    <dt>Garantii:</dt>
                    <dd>
                        <input type="text" name="arvutiGarantii" />
                    </dd>
                    <dt>Spetsifikatsioonid:</dt>
                    <dd>
                        <textarea rows="10" cols="50" name="ArvutiSpecid"></textarea>
                    </dd>
                </dl>
                <input type="submit" value="Lisa arvuti" />
            </form>
            <?php
        }
        ?>
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