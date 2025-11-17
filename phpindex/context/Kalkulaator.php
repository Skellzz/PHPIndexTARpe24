<h1>Muna Kalkulaator</h1>
<input type="radio" name="valik" id="m1" value="images/m1.png"  onclick="arvutaMunadeHind()">
<label for="m1"> Ostad ainult 1 kana muna</label>
<br>
<input type="radio" name="valik" id="m2" value="images/m2.png"   onclick="arvutaMunadeHind()">

<label for="m2">Ostad ainult 2 kana muna</label>
<br>
<input type="radio" name="valik" id="m3" value="images/m3.png"  onclick="arvutaMunadeHind()">

<label for="m3"> Ostad 3 kana muna</label>
<br>
<input type="radio" name="valik" id="m4" value="images/m4.png"  onclick="arvutaMunadeHind()">

<label for="m4"> Ostad 4 kana muna</label>
<br>
<input type="radio" name="valik" id="m5" value="images/m5.png"  onclick="arvutaMunadeHind()">

<label for="m5"> Ostad 5 kanamuna</label>
<br>

<br>

<label for="tk">Vali kogus:</label>
<input type="number" id="tk" min="1" max="100" step="1" value="1" >

<br>
<button id="money" type="button" onclick="arvutaMunadeHind()">Arvuta</button>
<div id="vastus"></div>
<img src="" alt="" id="pilt">
