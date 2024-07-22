
var RandomNumber1=Math.floor( Math.random()*6 + 1 );
var RandomNumber2=Math.floor( Math.random()*6 + 1 );


var RandomDiceImg1="dice"+RandomNumber1+".png";
var RandomDiceImg2="dice"+RandomNumber2+".png";


var RandomImgSrc1="./images/"+RandomDiceImg1;
var RandomImgSrc2="./images/"+RandomDiceImg2;



var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",RandomImgSrc1);
img2.setAttribute("src",RandomImgSrc2);


if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";

}


