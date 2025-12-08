<?php
  // Ühendus andmebaasiga
 require ('config.php');
global $yhendus;
  // Uue teate salvestamine

  if (isset($_REQUEST["uusleht"]))  {
      if (!empty(trim($_REQUEST["pealkiri"]))) {
        $kask = $yhendus->prepare( "INSERT INTO lehed (pealkiri, sisu, kuupäev, autor, pilt) VALUES (?, ?, ?, ?, ?)");
        $kask->bind_param("sssss", $_REQUEST["pealkiri"], $_REQUEST["sisu"],$_REQUEST["kuupäev"],$_REQUEST["autor"], $_REQUEST["pilt"] );
        $kask->execute();
        header("Location: ".$_SERVER["PHP_SELF"]);
        $yhendus->close();
        exit();
      }
  }
  // Teate kustutamine
  if (isset($_REQUEST["kustutusid"])) {

    $kask = $yhendus->prepare("DELETE FROM lehed WHERE id=?");

    $kask->bind_param("i", $_REQUEST["kustutusid"]);

    $kask->execute();

  }
// Teate muutmine
if (isset($_REQUEST["muutmisid"])) {
    $kask = $yhendus->prepare("UPDATE lehed SET pealkiri=?, sisu=?, kuupäev=?, autor=?, pilt=? WHERE id=?");
    $kask->bind_param(
        "sssssi",
        $_REQUEST["pealkiri"],
        $_REQUEST["sisu"],
        $_REQUEST["kuupäev"],
        $_REQUEST["autor"],
        $_REQUEST["pilt"],
        $_REQUEST["muutmisid"]
    );
    $kask->execute();
}

?>

<!DOCTYPE html>

<html lang="et">

  <head>

    <meta charset="UTF-8">

    <title>Teated lehel</title>

   </head>

  <body>

    <div id="menyykiht">

      <h2>Teated</h2>

      <ul>

        <?php
        //loendi kuvamine
          $kask = $yhendus->prepare("SELECT id, pealkiri FROM lehed");

          $kask->bind_result($id, $pealkiri);

          $kask->execute();

          while ($kask->fetch()) {

            echo "<li><a href='".$_SERVER["PHP_SELF"]."?id=$id'>".

                    htmlspecialchars($pealkiri)."</a></li>";

          }

        ?>

      </ul>

      <p>

        <a href="<?=$_SERVER['PHP_SELF']?>?lisamine=jah">Lisa ...</a>

      </p>

    </div>

    <div id="sisukiht">

      <?php

        // Ühe teate kuvamine

        if (isset($_REQUEST["id"])) {
          $kask = $yhendus->prepare("SELECT id, pealkiri, sisu, kuupäev, autor, pilt FROM lehed WHERE id=?");
          $kask->bind_param("i", $_REQUEST["id"]);
          $kask->bind_result($id, $pealkiri, $sisu, $kuupäev, $autor, $pilt);
          $kask->execute();
          if ($kask->fetch()) {
            echo "<h2>".htmlspecialchars($pealkiri)."</h2>";
              echo '<br>';
            echo "Lehe sisu".nl2br(htmlspecialchars($sisu));
             echo '<br>';
              echo "Lisamise kuupäev: ".nl2br(htmlspecialchars($kuupäev));
            echo '<br>';
              echo "Autor: ".nl2br(htmlspecialchars($autor));
              echo '<br>';
              echo "Pilt: <img src='$pilt'>";

              if ($kask->fetch()) {
             if (isset($_REQUEST["muutmine"])) {
                echo "
                   <form action='".$_SERVER["PHP_SELF"]."'>
                     <input type='hidden' name='muutmisid' value='$id'/>
                     <h2>Teate muutmine</h2>
                     <dl>
                       <dt>Pealkiri:</dt>
                       <dd>
                         <input type='text' name='pealkiri' value='".
                                    htmlspecialchars($pealkiri)."'/>
                       </dd>
                       <dt>Teate sisu:</dt>
                       <dd>
                         <textarea rows='20' cols='30' name='sisu'>".
                            htmlspecialchars($sisu)."</textarea>
                       </dd>
                       <dt>Kuupäev:</dt>
                       <dd>
                         <input type='date' name='kuupäev' value='".
                                    htmlspecialchars($kuupäev)."'/>
                       </dd>
                       <dt> Autor:</dt>
                       <dd>
                         <input type='text' name='autor' value='".
                                    htmlspecialchars($autor)."'/>
                       </dd>
                       <dt> Pilt:</dt>
                       <dd>
                         <input type='text' name='pilt' value='".
                                     htmlspecialchars($pilt)."'/>
                       </dd>
                     </dl>                      
                     <input type='submit' value='Muuda' />
                   </form>
                ";
             } else {
              echo "<h2>".htmlspecialchars($pealkiri)."</h2>";
              echo htmlspecialchars($sisu);
              echo "<br /><a href='".$_SERVER["PHP_SELF"].
                   "?kustutusid=$id'>kustuta</a> ";
              echo "<a href='".$_SERVER["PHP_SELF"].
                   "?id=$id&amp;muutmine=jah'>muuda</a>";
             }
            } else {
              echo "Vigased andmed.";
            }
         }

              echo "<br /><a href='".$_SERVER["PHP_SELF"]."?kustutusid=$id'>kustuta</a>";

          } else {

            echo "Vigased andmed.";

          }
        if (isset($_REQUEST["lisamine"])) {
           ?>
        <form action="<?=$_SERVER["PHP_SELF"]?>">
            <input type="hidden" name="uusleht" value="jah" />
            <h2>Uue teate lisamine</h2>
            <dl>
                <dt>Pealkiri:</dt>
                <dd>
                    <input type="text" name="pealkiri" />
                </dd>
                <dt>Teate sisu:</dt>
                <dd>
                    <textarea rows="20" cols="30" name="sisu"></textarea>
                </dd>
                <dt>Kuupäev:</dt>
                <dd>
                    <input type="date" name="kuupäev" />
                </dd>
                <dt>Autor:</dt>
                <dd>
                    <input type="text" name="autor" />
                </dd>
                <dt>Pilt::</dt>
                <dd>
                    <input type="text" name="pilt" />
                </dd>
            </dl>
            <input type="submit" value="Sisesta" />
        </form>
        <?php
        }
        ?>
    </div>

    <div id="jalusekiht">
        Lehe tegi Georg
    </div>
  </body>
</html>
<?php
$yhendus->close();
?>