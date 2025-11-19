<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Irina PHP-tööde leht</title>
    <link rel="stylesheet" href="style/Style.css">
    <link rel="stylesheet" href="style/joonis.css">
          <script src="JS/Joonis.js"></script>
    <script src="JS/Muna.js"></script>
</head>
<body>
<?php
//päis
include("header.php");
?>

<?php
//navigeerimismenüü
include("nav.php");
?>
<div class="flex-container">

    <div>PHP - Skriptikeel – skript teeb oma tööd pärast seda, kui toimus mingi sündmus.
        Orienteeritud programmeerija eesmärkide saavutamiseks (mugavus on tähtsam kui vastavus standarditele).
        Serveripoolne keel.
        Platvormist sõltumatu.
        Saab kasutada nii HTML-i sees (HTML embedded), kui ka eraldiseisvana skriptina.</div>
    <div>
        <?php
        //Sisu - laetakse context kaustast
        if(isset($_GET["leht"])){
            include('context/'.$_GET["leht"]);
        }
        ?>
    </div>
    <div>

        <img src="image/php.png" alt="PHP pilt">
    </div>
</div>




<?php
//jalus
include("Footer.php");
?>
</body>
</html>
