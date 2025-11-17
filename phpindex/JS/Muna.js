function kanamunaArvutamine(kogus, hind){
    return (kogus*hind).toFixed(2)
}
const muna1hind=10.25;
const muna2hind=20.34;
const muna3hind=25.93;
const muna4hind=30.67;
const muna5hind=35.80;
function arvutaMunadeHind(){
    let vastus=document.getElementById('vastus');
    let tk=document.getElementById('tk');
    let m1=document.getElementById('m1');
    let m2=document.getElementById('m2');
    let m3=document.getElementById('m3');
    let m4=document.getElementById('m4');
    let m5=document.getElementById('m5');
    let pilt=document.getElementById('pilt');
    if(m1.checked){

        vastus.innerHTML=kanamunaArvutamine(tk.value, muna1hind)+" Euro ";
        pilt.src="image/m1.png"
    }
    if(m2.checked){
        vastus.innerHTML=kanamunaArvutamine(tk.value, muna2hind)+" Euro ";
        pilt.src="image/m2.png"
    }
    if(m3.checked){
        vastus.innerHTML=kanamunaArvutamine(tk.value, muna3hind)+" Euro ";
        pilt.src="image/m3.png"
    }
    if(m4.checked){
        vastus.innerHTML=kanamunaArvutamine(tk.value, muna4hind)+" Euro "
        pilt.src="image/m4.png"
    }
    if(m5.checked){
        vastus.innerHTML=kanamunaArvutamine(tk.value, muna5hind)+" Euro "
        pilt.src="image/m5.png"
    }
}
function pildidi(){
    //massiiv
    const pildid=[
        'image/m1.png',
        'image/m2.png',
        'image/m3.png',
        'image/m4.png',
        'image/m5.png'

    ]
    const randomM=document.getElementById("randomM");
    const juhuslikArv=Math.floor(Math.floor(Math.random()*pildid.length));

    randomM.src=pildid[juhuslikArv];
}
function piltstatus(){
    let randomM=document.getElementById("randomM");
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik");//mitu elements ühe nimega valik

    //tsükl for
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            //radio nupust võrakse value mida võrdleme pildi asukohaga

        }
    }

}