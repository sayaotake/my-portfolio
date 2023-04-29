//clickにカーソルを合わせるとclick!の文字が出てくる（黒文字が白文字になれば良いかと）
//Nameとかの文字を押すと指定したサイトに飛ぶようにする
//Nameのところ
const over1 = document.getElementById("over1")
const clicktext1 = document.getElementById("clicktext1")
const box1 = document.getElementById("box1")

over1.onmousemove = function(){
    clicktext1.style.color = "#fff"
    box1.style.textShadow = 
    "0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff,0 0 40px #ff00ff";

}
over1.onmouseout = function(){
    clicktext1.style.color = "#000";
    box1.style.textShadow = "0 0 #fff";
}

over1.onclick = function(){
    window.open('https://system.geek-salon.net/entries/new');
}
//Universityのところ
const over2 = document.getElementById("over2")
const clicktext2 = document.getElementById("clicktext2")
const box2 = document.getElementById("box2")
over2.onmousemove = function(){
    clicktext2.style.color = "#fff"
    box2.style.textShadow = 
    "0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0fa, 0 0 30px #0fa,0 0 40px #0fa";


}
over2.onmouseout = function(){
    clicktext2.style.color = "#000";
    box2.style.textShadow = "0 0 #fff";
}

over2.onclick = function(){
    window.open('https://www.ocha.ac.jp/');
}


const over3 = document.getElementById("over3")

over3.onclick = function(){
    window.open('https://bijutsutecho.com/artists/665');
}