<?php
echo "<h2>GIT CMD käsurida</h2>";
echo "<ul>";
echo "<li>git init - uus repo</li>";
echo '<li>
<pre>
<li>
git init - uus repo

git config --global user.name "Skellzz"
</li>
<li>
git config --global user.email "george.teemus@gmail.com"<br>

git config --global --list
</li>
</li>;
<li>
 //ssh võti loomine
 <pre>
 ssh-keygen -o -t rsa -C "george.teemus@gmail.com"
</pre>

<br>// võti salvestataks opilane/.shh kasuta
<br>//id_rsa.pub tuleb kopeerida oma Github -reposse
</li>
<li>
git add.

git commint -a -m "onloodud phpIndex"

git remote remove origin
</li>
<li>
//
<pre>
git remote add origin git@github.com:Skellzz/PHPIndexTarpe24
</pre>

git branch -M main

git push -u origin main
</li>
';
