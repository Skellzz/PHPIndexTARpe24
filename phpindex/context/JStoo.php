
<h1>Joonistamine JS-ga</h1>
<canvas id="tahvel" width="300" height="250"></canvas>
<br>
<input type="button" value="Puhasta" onclick="puhasta()">
<br>
<input type="button" value="Sirge joon" onclick="sirgeJoon()">
<input type="button" value="Kolmnurk" onclick="kolmnurk()">
<label for="raadius">Raadius</label>
<input type="number" id="raadius" min="0" max="100" value="5" onchange="ring()">
<input type="button" value="Ring" onclick="ring()">
<br>
<label for="laius">Laius</label>
<input type="number" id="laius" min="0" max="100" value="5" onchange="ristkylik()">
<label for="korgus">Kõrgus</label>
<input type="number" id="korgus" min="0" max="100" value="5" onchange="ristkylik()">
<input type="button" value="Ristkülik" onclick="ristkylik()">
<br>
<input type="button" value="picsum pilt" onclick="pilt()">
<br>
<input type="button" value="Mine" onclick="roheline()">
<input type="button" value="Oota" onclick="kollane()">
<input type="button" value="Seis" onclick="punane()">

<h1>Lipud </h1>
<canvas id="lipp" width="330" height="210"></canvas>
<input type="button" value="Eesti lipp" onclick="eestiLipp()">

<input type="button" value="Indoneesia lipp" onclick="indoneesiaLipp()">
<input type="button" value="Monako lipp" onclick="monakoLipp()">
<input type="button" value="Serbia lipp" onclick="serbiaLipp()">
