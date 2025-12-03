<!DOCTYPE html>
<html lang="et">
<head>
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Mobiilimalli Konspekt</title>
    <style>
        body {
            background: #0a0e0a;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            color: #00ff41;
        }

        .container {
            margin: 0 auto;
            max-width: 1200px;
            padding: 10px;
        }

        h1 {
            font-size: 24px;
            color: #00ff41;
            text-align: center;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.6);
            border: #00cc33 2px dashed;
            padding: 15px;
            margin: 10px 5px;
            border-radius: 6px;
        }

        h2 {
            font-size: 18px;
            font-weight: bold;
            color: #00ff41;
            border: #00cc33 1px dashed;
            padding: 8px;
            margin: 15px 5px 10px 5px;
            text-shadow: 0 0 8px rgba(0, 255, 65, 0.6);
            border-radius: 4px;
        }

        h3 {
            font-size: 16px;
            color: #00ff41;
            border-bottom: #00cc33 1px solid;
            padding: 5px 0;
            margin: 15px 5px 8px 5px;
        }

        h4 {
            font-size: 14px;
            color: #00cc33;
            margin: 10px 5px 5px 5px;
        }

        p {
            text-align: left;
            font-size: 13px;
            color: #00ff41;
            margin: 5px;
            padding: 0;
            line-height: 22px;
        }

        ul, ol {
            color: #00ff41;
            font-size: 13px;
            line-height: 22px;
            margin: 10px 5px;
            padding-left: 25px;
        }

        li {
            margin: 8px 0;
        }

        pre {
            background: #0d1b0d;
            border: 1px solid #00cc33;
            border-radius: 6px;
            padding: 15px;
            margin: 10px 5px;
            overflow-x: auto;
            color: #39ff14;
            font-size: 12px;
            line-height: 18px;
            box-shadow: 0 2px 10px rgba(0, 255, 65, 0.2);
        }

        .code-section {
            background: rgba(0, 255, 65, 0.05);
            border-left: 3px solid #00cc33;
            padding: 10px;
            margin: 15px 5px;
            border-radius: 4px;
        }

        .explanation {
            background: rgba(0, 255, 65, 0.08);
            border: 1px dashed #00cc33;
            padding: 10px;
            margin: 10px 5px;
            border-radius: 4px;
            font-style: italic;
        }

        .tech-list {
            background: #0d1b0d;
            border-radius: 6px;
            padding: 15px;
            margin: 10px 5px;
            box-shadow: 0 2px 10px rgba(0, 255, 65, 0.2);
        }

        .mobile-changes {
            background: rgba(0, 255, 65, 0.1);
            border: 2px solid #00cc33;
            border-radius: 6px;
            padding: 15px;
            margin: 15px 5px;
        }

        strong {
            color: #39ff14;
            text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
        }

        @media screen and (max-width: 768px) {
            h1 {
                font-size: 20px;
                padding: 10px;
            }

            h2 {
                font-size: 16px;
            }

            h3 {
                font-size: 14px;
            }

            pre {
                font-size: 11px;
                padding: 10px;
            }

            p, ul, ol {
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Mobiilisõbraliku veebilehe loomine – Projekti konspekt</h1>

    <h2>1. Lühike sissejuhatus</h2>

    <h3>Ülesanne</h3>
    <p>Minu ülesandeks oli luua mobiilisõbralik, responsive veebileht anekdootide teemaga. Veebileht pidi kohanema erinevate ekraanisuurustega ja olema hästi loetav nii arvutis kui ka nutitelefonis.</p>

    <h3>Kasutatud tehnoloogiad</h3>
    <div class="tech-list">
        <ul>
            <li><strong>HTML5</strong> – lehe struktuuri loomiseks</li>
            <li><strong>CSS3</strong> – kujunduse ja responsive disaini jaoks</li>
            <li><strong>PHP</strong> – dünaamiliste elementide (päise ja jaluse) kaasamiseks</li>
            <li><strong>Viewport meta tag</strong> – mobiilivaate optimeerimiseks</li>
        </ul>
    </div>

    <h2>2. Koodilõigud ja selgitused</h2>

    <div class="code-section">
        <h3>2.1 Viewport meta tag (varsketeade.php)</h3>
        <pre>&lt;meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"&gt;</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> See meta tag on kriitilise tähtsusega mobiilsete seadmete jaoks. <code>width=device-width</code> tagab, et lehe laius kohaneb seadme ekraani laiusega, <code>initial-scale=1.0</code> määrab algse suurenduse taseme ja <code>maximum-scale=1.0</code> takistab kasutajal liiga palju sisse suumida, mis tagab ühtlase kasutuskogemuse.
        </div>
    </div>

    <div class="code-section">
        <h3>2.2 PHP include failide kasutamine</h3>
        <pre>&lt;?php require("../hanektoot/varsketeade.php"); ?&gt;</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Kasutasin PHP <code>require()</code> funktsiooni, et kaasata päise ja jaluse kood eraldi failidest. See võimaldab muuta navigatsiooni ja jalust ühes kohas, ilma et peaks iga anekdoodi lehte eraldi redigeerima. See teeb veebilehe haldamise palju lihtsamaks.
        </div>
    </div>

    <div class="code-section">
        <h3>2.3 Navigatsiooni menüü struktuur (varsketeade.php)</h3>
        <pre>&lt;div class="nav"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="../hanektoot/anektoot1.php"&gt;1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="../hanektoot/anektoot2.php"&gt;2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="../hanektoot/anektoot3.php"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Lõin lihtsa numbrilise navigatsiooni, mis on kompaktne ja töötab hästi väikestel ekraanidel. Kasutasin nummerdatud linke (1, 2, 3), mis võtavad vähe ruumi ja on lihtsasti klikitavad ka puuteekraanidel.
        </div>
    </div>

    <div class="code-section">
        <h3>2.4 Menüü horisontaalne paigutus (kujundus.css)</h3>
        <pre>.nav ul li{
    display:inline;
    margin:0;
    padding:0;
}

.nav ul li a{
    display:inline-block;
    color:#00ff41;
    padding:10px;
    text-decoration:none;
}</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> <code>display:inline</code> muudab menüüelemendid horisontaalseks, mis sobib hästi nii laia- kui kitsakraanilistele seadmetele. <code>padding:10px</code> annab linkidele piisavalt klikitavat pinda, mis on oluline puuteekraanide kasutajatele.
        </div>
    </div>

    <div class="code-section">
        <h3>2.5 Ümardatud nurgad ja varjud (kujundus.css)</h3>
        <pre>.nav{
    -moz-border-bottom-left-radius:6px;
    -webkit-border-bottom-left-radius:6px;
    border-bottom-left-radius:6px;
    -moz-border-bottom-right-radius:6px;
    -webkit-border-bottom-right-radius:6px;
    border-bottom-right-radius:6px;
    box-shadow:0 2px 10px rgba(0, 255, 65, 0.3);
}</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Kasutasin ümardatud nurki ja varju, et luua kaasaegne ja stiilne välimus. Brauseri prefiksid (<code>-moz-</code>, <code>-webkit-</code>) tagavad ühilduvuse vanemate mobiilsirvijatega.
        </div>
    </div>

    <div class="code-section">
        <h3>2.6 Rohelise värvipaleti kasutamine</h3>
        <pre>body{
    background:#0a0e0a;
    font-family:Arial, Helvetica, sans-serif;
}

h2{
    color:#00ff41;
    text-shadow:0 0 8px rgba(0, 255, 65, 0.6);
}</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Valisin tumeda tausta (#0a0e0a) ja helerohelise teksti (#00ff41), mis loob hea kontrasti ja on silmadele mugav ka pikal kasutamisel. Tekstivari (<code>text-shadow</code>) lisab visuaalset sügavust ja muudab lehe huvitavamaks.
        </div>
    </div>

    <div class="code-section">
        <h3>2.7 Hover efektid (kujundus.css)</h3>
        <pre>.nav ul li a:hover{
    color:#00cc33;
    background:rgba(0, 255, 65, 0.1);
}</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Hover efektid annavad kasutajale visuaalset tagasisidet, kui ta hiirt lingi kohale viib. Kuigi puuteekraanidel hover ei tööta, arvutikasutajatele see parandab kasutuskogemust märkimisväärselt.
        </div>
    </div>

    <div class="code-section">
        <h3>2.8 Responsive teksti suurus</h3>
        <pre>p{
    font-size:12px;
    line-height:20px;
    color:#00ff41;
}</pre>
        <div class="explanation">
            <strong>Selgitus:</strong> Määrasin teksti suuruseks 12px ja rea kõrguseks 20px, mis tagab hea loetavuse. <code>line-height</code> loomine suuremaks kui <code>font-size</code> annab tekstile õhku ja teeb lugemise mugavamaks nii väikestel kui suurtel ekraanidel.
        </div>
    </div>

    <h2>3. Mobiilivaade</h2>

    <h3>Ekraanitõmmis mobiilseadmes</h3>

    <div style="text-align: center; margin: 20px 5px;">
        <img src="/image/unnamed.png" alt="Mobiilivaade ekraanitõmmis" style="max-width: 300px; width: 100%; height: auto; border: 2px solid #00cc33; border-radius: 6px; box-shadow: 0 4px 15px rgba(0, 255, 65, 0.3);">
        <p style="font-size: 11px; font-style: italic; margin-top: 8px;">Joonis 1: Anekdootide lehe mobiilivaade nutitelefonis</p>
    </div>

    <p>Ülaltoodud ekraanitõmmis näitab, kuidas leht mobiilis välja näeb:</p>

    <div class="mobile-changes">
        <h4>Muutused mobiilivaates:</h4>
        <ul>
            <li><strong>Navigatsioon:</strong> Menüü jääb horisontaalseks, kuid numbrid (1, 2, 3) on kompaktselt reas ja lihtsasti puudutavad</li>
            <li><strong>Tekst:</strong> Tekst joondub üle kogu ekraanilaiuse, säilitades 5px marginaalid servadel</li>
            <li><strong>Pealkirjad:</strong> H2 ja H3 pealkirjad kohanevad automaatselt ekraanilaiusega tänu margin:0 5px seadistusele</li>
            <li><strong>Värvipalett:</strong> Roheline neoon-stiil säilib ja kontrastsus jääb heaks ka väiksemal ekraanil</li>
            <li><strong>Ümardatud elemendid:</strong> Box-shadow ja border-radius efektid säilivad, andes lehele professionaalse välimuse</li>
            <li><strong>Lugemiskogemus:</strong> Line-height 20px tagab, et tekstiread ei ole liiga kitsalt koos isegi väiksemal ekraanil</li>
        </ul>

        <h4>Viewport seadistuse mõju:</h4>
        <p>Tänu <code>width=device-width</code> seadistusele skaleerub leht õigesti ja kasutaja ei pea horisontaalselt kerides sisu lugema.</p>
    </div>

</div>
</body>
</html>