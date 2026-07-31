const startButton = document.getElementById("startButton");
const hero = document.querySelector(".hero");
const mainContent = document.getElementById("mainContent");
const typewriter = document.getElementById("typewriter");
const messageArea = document.getElementById("messageArea");

const heartBtn = document.getElementById("heartBtn");
const fireworkBtn = document.getElementById("fireworkBtn");
const starsBtn = document.getElementById("starsBtn");
const musicBtn = document.getElementById("musicBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resizeCanvas();
addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 220; i++) {
    stars.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 2.2,
        s: Math.random() * 0.6 + 0.2
    });
}

function animateStars() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    for(const star of stars){

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();

        star.y+=star.s;

        if(star.y>innerHeight){

            star.y=-5;
            star.x=Math.random()*innerWidth;

        }

    }

    requestAnimationFrame(animateStars);

}

animateStars();

const intro =
"Hello Bubu ❤️ Welcome to your own tiny universe made specially for you...";

let i=0;

function typing(){

    if(i<intro.length){

        typewriter.innerHTML+=intro.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}

typing();

startButton.onclick=()=>{

    hero.style.display="none";

    mainContent.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

const messages=[

"🌸 You make ordinary days feel special.",
"✨ Keep smiling because it looks amazing on you.",
"💖 Friendship like this is rare.",
"🌈 You deserve happiness every single day.",
"🌙 Even stars would be jealous today.",
"🦋 Never forget how awesome you are.",
"🌹 Thank you for existing, Bubu.",
"🎀 Hope this little universe makes you smile.",
"🌼 Pgl worked hard for this 😄",
"❤️ Stay the wonderful person you are."

];

function addMessage(text){

    const box=document.createElement("div");

    box.className="message";

    box.textContent=text;

    messageArea.prepend(box);

}

heartBtn.onclick=()=>{

    addMessage(messages[Math.floor(Math.random()*messages.length)]);

    for(let i=0;i<35;i++){

        const h=document.createElement("div");

        h.className="heart";

        h.innerHTML="💖";

        h.style.left=Math.random()*100+"vw";

        h.style.animationDuration=(3+Math.random()*4)+"s";

        h.style.fontSize=(18+Math.random()*30)+"px";

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),7000);

    }

}

fireworkBtn.onclick=()=>{

    for(let i=0;i<30;i++){

        setTimeout(()=>{

            const e=document.createElement("div");

            e.innerHTML="🎆";

            e.style.position="fixed";
            e.style.left=Math.random()*100+"vw";
            e.style.top=Math.random()*100+"vh";
            e.style.fontSize=(25+Math.random()*45)+"px";
            e.style.pointerEvents="none";
            e.style.transition=".8s";

            document.body.appendChild(e);

            setTimeout(()=>{

                e.style.transform="scale(2)";
                e.style.opacity="0";

            },30);

            setTimeout(()=>e.remove(),900);

        },i*80);

    }

}

starsBtn.onclick=()=>{

    addMessage("⭐ The stars are shining a little brighter for Bubu tonight.");

}

musicBtn.onclick=()=>{

    addMessage("🎵 Music support will be added in the next update.");

}

surpriseBtn.onclick=()=>{

    addMessage("🎁 Surprise unlocked! Thank you for being an amazing friend. ❤️");

    document.body.style.transition="1s";

    document.body.style.background=
    "linear-gradient(135deg,#ff5ea8,#6c63ff,#0f172a)";

}
/* ========= PART 2 : ADD THIS AT THE END OF script.js ========= */

document.getElementById("title").classList.add("glow");

const quotes=[

"🌸 A smile from Bubu can brighten any day.",
"💖 Friendship is the best gift.",
"✨ Some people become memories, some become home.",
"🌈 You are appreciated more than you know.",
"🌙 Every star tonight celebrates this friendship.",
"🦋 Stay happy, stay crazy, stay YOU.",
"🌹 Thank you for being here.",
"🎀 You deserve endless happiness.",
"❤️ The universe is prettier with you in it."

];

setInterval(()=>{

addMessage(quotes[Math.floor(Math.random()*quotes.length)]);

},15000);

document.addEventListener("mousemove",(e)=>{

if(Math.random()>.55)return;

const s=document.createElement("div");

s.className="sparkle";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>s.remove(),2000);

});

function rainEmoji(emoji,count){

for(let i=0;i<count;i++){

const x=document.createElement("div");

x.className="heart";

x.innerHTML=emoji;

x.style.left=Math.random()*100+"vw";

x.style.fontSize=(18+Math.random()*30)+"px";

x.style.animationDuration=(3+Math.random()*5)+"s";

document.body.appendChild(x);

setTimeout(()=>x.remove(),7000);

}

}

heartBtn.addEventListener("dblclick",()=>{

rainEmoji("💖",100);

addMessage("💞 Double Love Mode Activated!");

});

starsBtn.addEventListener("dblclick",()=>{

rainEmoji("⭐",120);

addMessage("🌌 The whole sky is shining for Bubu.");

});

fireworkBtn.addEventListener("dblclick",()=>{

rainEmoji("🎆",80);

rainEmoji("✨",120);

addMessage("🎇 Celebration Mode Activated!");

});

let clicks=0;

document.body.addEventListener("click",()=>{

clicks++;

if(clicks===50){

addMessage("🥳 Secret Achievement Unlocked!");
}

if(clicks===100){

addMessage("👑 Ultimate Explorer Achievement!");
}

});

console.log("%cWelcome Bubu ❤️",
"font-size:30px;color:pink;font-weight:bold;");

console.log("%cMade with love by Pgl / Buddhu ❤️",
"font-size:18px;color:cyan;");

/* ========= PART 3 : ADD THIS AT THE END OF script.js ========= */

const memoryData = [
{
title:"🌸 A Beginning",
text:"Every beautiful friendship starts with a simple conversation. Sometimes destiny hides inside ordinary moments."
},
{
title:"✨ Smile",
text:"If this website makes you smile even once, then its purpose is fulfilled."
},
{
title:"💖 Precious",
text:"You are appreciated, respected and valued. Never forget that."
},
{
title:"🌙 Night Sky",
text:"Whenever you see stars, remember someone wished happiness for you."
},
{
title:"🦋 Friendship",
text:"Distance never decides friendship. Hearts do."
},
{
title:"🌈 Dreams",
text:"May every dream of yours slowly become reality."
}
];

const memoryBook=document.createElement("section");
memoryBook.id="memoryBook";

memoryData.forEach(item=>{

const card=document.createElement("div");

card.className="memoryCard floating";

card.innerHTML=`

<h3>${item.title}</h3>

<p>${item.text}</p>

`;

memoryBook.appendChild(card);

});

mainContent.appendChild(memoryBook);

const counter=document.createElement("section");

counter.id="counter";

counter.innerHTML=`

<div class="counterBox">

<div class="counter" id="c1">0</div>

<div class="counterTitle">Smiles</div>

</div>

<div class="counterBox">

<div class="counter" id="c2">0</div>

<div class="counterTitle">Stars</div>

</div>

<div class="counterBox">

<div class="counter" id="c3">0</div>

<div class="counterTitle">Friendship</div>

</div>

`;

mainContent.appendChild(counter);

function animateCounter(id,target){

let n=0;

const el=document.getElementById(id);

const timer=setInterval(()=>{

n++;

el.textContent=n;

if(n>=target){

clearInterval(timer);

}

},25);

}

startButton.addEventListener("click",()=>{

setTimeout(()=>{

animateCounter("c1",100);

animateCounter("c2",999);

animateCounter("c3",100);

},800);

});

const final=document.createElement("section");

final.id="finalMessage";

final.innerHTML=`

<h2>

Thank You Bubu ❤️

</h2>

<p>

No matter how many stars exist in the sky...

some people still shine brighter.

Thank you for being a wonderful friend.

Never stop smiling.

</p>

<br>

<div class="endHeart">💖</div>

`;

mainContent.appendChild(final);

let konami=[];

const secret=[
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight"
];

window.addEventListener("keydown",(e)=>{

konami.push(e.key);

if(konami.length>secret.length){

konami.shift();

}

if(konami.join()==secret.join()){

document.body.style.background=
"linear-gradient(135deg,#ff5ea8,#7b68ee,#111827)";

rainEmoji("💖",150);

rainEmoji("✨",120);

addMessage("🎉 SECRET MODE UNLOCKED!");

}

});

setInterval(()=>{

if(Math.random()<0.35){

addMessage(quotes[Math.floor(Math.random()*quotes.length)]);

}

},10000);
window.addEventListener("load", () => {

    const complimentBtn = document.getElementById("complimentBtn");
    const complimentText = document.getElementById("complimentText");

    if (complimentBtn && complimentText) {

        complimentBtn.onclick = () => {

            const compliments = [
                "You're stronger than you think. 💖",
                "Your smile deserves to stay forever. 🌸",
                "You're genuinely a wonderful person. ✨",
                "Never underestimate yourself. 🌈",
                "You make people's lives brighter. 🌙",
                "You deserve every happiness. ❤️",
                "Stay exactly the way you are. 🌸",
                "The world is better with you in it. 💕",
                "Never stop smiling. 😊",
                "You're one of a kind. ✨"
            ];

            complimentText.innerHTML =
                compliments[Math.floor(Math.random() * compliments.length)];

        };

    }

});
/* ========= HEART GAME ENGINE ========= */
/* Paste this at the END of script.js */

const heartGameBtn=document.getElementById("heartGameBtn");
const heartGame=document.getElementById("heartGame");
const heartArea=document.getElementById("heartArea");
const startHeartGame=document.getElementById("startHeartGame");
const heartScore=document.getElementById("heartScore");
const heartTime=document.getElementById("heartTime");

if(
heartGameBtn &&
heartGame &&
heartArea &&
startHeartGame &&
heartScore &&
heartTime
){

heartGameBtn.onclick=()=>{

heartGame.style.display="block";

heartGame.scrollIntoView({
behavior:"smooth"
});

};

let gameRunning=false;
let score=0;
let timeLeft=30;
let spawnInterval=null;
let timerInterval=null;

function random(min,max){

return Math.floor(Math.random()*(max-min))+min;

}

function createHeart(){

if(!gameRunning)return;

const h=document.createElement("div");

h.className="gameHeart";

const emojis=[
"❤️",
"💖",
"💕",
"💗",
"💓",
"💞"
];

h.innerHTML=emojis[random(0,emojis.length)];

h.style.left=random(10,heartArea.clientWidth-60)+"px";

h.style.top=random(10,heartArea.clientHeight-60)+"px";

h.style.fontSize=random(28,60)+"px";

heartArea.appendChild(h);

let removed=false;

const removeHeart=()=>{

if(removed)return;

removed=true;

h.remove();

};

const timeout=setTimeout(removeHeart,1500);

h.onclick=()=>{

if(!gameRunning)return;

score++;

heartScore.innerHTML=score;

clearTimeout(timeout);

removeHeart();

for(let i=0;i<8;i++){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="absolute";

s.style.left=h.style.left;

s.style.top=h.style.top;

s.style.pointerEvents="none";

s.style.fontSize=random(15,25)+"px";

s.style.transition=".8s";

heartArea.appendChild(s);

setTimeout(()=>{

s.style.transform=

`translate(${random(-80,80)}px,${random(-80,80)}px)
scale(0)`;

s.style.opacity="0";

},20);

setTimeout(()=>s.remove(),900);

}

};

}

function startGame(){

if(gameRunning)return;

gameRunning=true;

score=0;

timeLeft=30;

heartScore.innerHTML=0;

heartTime.innerHTML=30;

heartArea.innerHTML="";

spawnInterval=setInterval(()=>{

createHeart();

},500);

timerInterval=setInterval(()=>{

timeLeft--;

heartTime.innerHTML=timeLeft;

if(timeLeft<=0){

clearInterval(spawnInterval);

clearInterval(timerInterval);

gameRunning=false;

heartArea.innerHTML="";

const end=document.createElement("div");

end.style.padding="40px";

end.style.textAlign="center";

let medal="😊";

if(score>=25){

medal="🏆";

}else if(score>=18){

medal="🥇";

}else if(score>=12){

medal="🥈";

}else if(score>=6){

medal="🥉";

}

end.innerHTML=`

<h2>

Game Over!

</h2>

<br>

<h2>

${medal}

</h2>

<br>

<h2>

Your Score

${score}

</h2>

<br>

<button
class="magic"
id="playAgainHeart">

Play Again

</button>

`;

heartArea.appendChild(end);

document
.getElementById("playAgainHeart")
.onclick=startGame;

}

},1000);

}

startHeartGame.onclick=startGame;

}
/* ===========================
   BUBBLE POP GAME ENGINE
   Paste at END of script.js
=========================== */

const bubbleOpenBtn=document.getElementById("bubbleOpenBtn");
const bubbleGame=document.getElementById("bubbleGame");
const bubbleArea=document.getElementById("bubbleArea");
const bubbleStartBtn=document.getElementById("bubbleStartBtn");
const bubbleScore=document.getElementById("bubbleScore");
const bubbleTime=document.getElementById("bubbleTime");

if(
bubbleOpenBtn &&
bubbleGame &&
bubbleArea &&
bubbleStartBtn &&
bubbleScore &&
bubbleTime
){

bubbleOpenBtn.onclick=()=>{

bubbleGame.style.display="block";

bubbleGame.scrollIntoView({
behavior:"smooth"
});

};

let bubbleRunning=false;
let bubblePoints=0;
let bubbleSeconds=30;
let bubbleSpawn=null;
let bubbleClock=null;

function randomBubble(min,max){

return Math.floor(Math.random()*(max-min))+min;

}

const bubbleEmoji=[

"🫧",
"💙",
"💜",
"💚",
"💛",
"💖",
"✨"

];

function createBubble(){

if(!bubbleRunning)return;

const b=document.createElement("div");

b.className="bubble";

b.innerHTML=bubbleEmoji[randomBubble(0,bubbleEmoji.length)];

const size=randomBubble(55,95);

b.style.width=size+"px";
b.style.height=size+"px";
b.style.fontSize=(size/2)+"px";

b.style.left=randomBubble(
10,
bubbleArea.clientWidth-size-10
)+"px";

b.style.top=randomBubble(
10,
bubbleArea.clientHeight-size-10
)+"px";

bubbleArea.appendChild(b);

let removed=false;

function removeBubble(){

if(removed)return;

removed=true;

b.remove();

}

const disappear=setTimeout(removeBubble,1800);

b.onclick=()=>{

if(!bubbleRunning)return;

clearTimeout(disappear);

bubblePoints++;

bubbleScore.innerHTML=bubblePoints;

b.classList.add("pop");

for(let i=0;i<12;i++){

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="absolute";

spark.style.left=b.style.left;

spark.style.top=b.style.top;

spark.style.pointerEvents="none";

spark.style.transition=".8s";

spark.style.fontSize=randomBubble(12,22)+"px";

bubbleArea.appendChild(spark);

setTimeout(()=>{

spark.style.transform=
`translate(${randomBubble(-120,120)}px,${randomBubble(-120,120)}px) scale(0)`;

spark.style.opacity="0";

},20);

setTimeout(()=>spark.remove(),900);

}

setTimeout(removeBubble,180);

};

}

function finishBubbleGame(){

bubbleRunning=false;

clearInterval(bubbleSpawn);

clearInterval(bubbleClock);

bubbleArea.innerHTML="";

let rank="😊";

if(bubblePoints>=70){

rank="👑";

}else if(bubblePoints>=55){

rank="🏆";

}else if(bubblePoints>=40){

rank="🥇";

}else if(bubblePoints>=25){

rank="🥈";

}else if(bubblePoints>=10){

rank="🥉";

}

bubbleArea.innerHTML=`

<div style="padding:35px;text-align:center;">

<h1>${rank}</h1>

<h2>Game Over</h2>

<br>

<h2>Your Score : ${bubblePoints}</h2>

<br>

<button
class="magic"
id="bubbleReplay">

Play Again

</button>

</div>

`;

document
.getElementById("bubbleReplay")
.onclick=startBubbleGame;

}

function startBubbleGame(){

if(bubbleRunning)return;

bubbleRunning=true;

bubblePoints=0;
bubbleSeconds=30;

bubbleScore.innerHTML=0;
bubbleTime.innerHTML=30;

bubbleArea.innerHTML="";

bubbleSpawn=setInterval(()=>{

createBubble();

},350);

bubbleClock=setInterval(()=>{

bubbleSeconds--;

bubbleTime.innerHTML=bubbleSeconds;

if(bubbleSeconds<=0){

finishBubbleGame();

}

},1000);

}

bubbleStartBtn.onclick=startBubbleGame;

}
/* ========= DICE ROLL GAME ========= */

const diceBtn=document.getElementById("diceBtn");
const diceGame=document.getElementById("diceGame");
const rollDice=document.getElementById("rollDice");
const diceFace=document.getElementById("diceFace");

if(diceBtn && diceGame){

diceBtn.onclick=()=>{

diceGame.style.display="block";

diceGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(rollDice){

const dice=[
"⚀",
"⚁",
"⚂",
"⚃",
"⚄",
"⚅"
];

rollDice.onclick=()=>{

rollDice.disabled=true;

let c=0;

const spin=setInterval(()=>{

diceFace.innerHTML=
dice[Math.floor(Math.random()*6)];

c++;

if(c>18){

clearInterval(spin);

const num=Math.floor(Math.random()*6);

diceFace.innerHTML=dice[num];

const msg=document.createElement("h3");

msg.style.marginTop="20px";

msg.innerHTML=
"🎉 You rolled <b>"+(num+1)+"</b>";

diceGame.querySelectorAll("h3").forEach((e,i)=>{

if(i>0)e.remove();

});

diceGame.appendChild(msg);

rollDice.disabled=false;

}

},80);

};

}
/* ========= COIN FLIP GAME ========= */

const coinBtn=document.getElementById("coinBtn");
const coinGame=document.getElementById("coinGame");
const flipCoin=document.getElementById("flipCoin");
const coinFace=document.getElementById("coinFace");

if(coinBtn && coinGame){

coinBtn.onclick=()=>{

coinGame.style.display="block";

coinGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(flipCoin){

const faces=[
"🙂",
"👑"
];

const names=[
"Heads 👑",
"Tails 🙂"
];

flipCoin.onclick=()=>{

flipCoin.disabled=true;

let count=0;

const flip=setInterval(()=>{

coinFace.innerHTML=
faces[Math.floor(Math.random()*2)];

coinFace.style.transform=
`rotateY(${count*120}deg)`;

count++;

if(count>22){

clearInterval(flip);

const result=Math.floor(Math.random()*2);

coinFace.innerHTML=faces[result];

coinFace.style.transform="rotateY(0deg)";

let old=document.getElementById("coinResult");

if(old) old.remove();

const msg=document.createElement("h3");

msg.id="coinResult";

msg.style.marginTop="20px";

msg.innerHTML=
"🪙 Result : <b>"+names[result]+"</b>";

coinGame.appendChild(msg);

flipCoin.disabled=false;

}

},70);

};

}
/* ========= FORTUNE TELLER ========= */

const fortuneBtn=document.getElementById("fortuneBtn");
const fortuneGame=document.getElementById("fortuneGame");
const fortuneBtn2=document.getElementById("fortuneBtn2");
const fortuneText=document.getElementById("fortuneText");

if(fortuneBtn && fortuneGame){

fortuneBtn.onclick=()=>{

fortuneGame.style.display="block";

fortuneGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(fortuneBtn2 && fortuneText){

const fortunes=[

"🌸 Today is going to bring you a beautiful smile.",

"💖 Someone secretly wishes the best for you.",

"🌈 Happiness is slowly finding its way to you.",

"✨ Believe in yourself. Something good is coming.",

"🌙 Every difficult phase ends one day.",

"🦋 Your kindness makes people happier.",

"⭐ Luck is quietly standing beside you today.",

"🎁 A lovely surprise is waiting for you.",

"🌹 Never stop smiling, it suits you.",

"☀️ Today is perfect for making memories.",

"💝 Your friendship is a precious gift.",

"🎉 A happy moment is closer than you think.",

"🌼 Good things take time, keep believing.",

"🌌 The universe is cheering for you today.",

"🍀 Luck Level : 99%"

];

fortuneBtn2.onclick=()=>{

fortuneBtn2.disabled=true;

let i=0;

const loading=setInterval(()=>{

fortuneText.innerHTML=

"🔮 Reading Future"+ ".".repeat((i%3)+1);

i++;

if(i>18){

clearInterval(loading);

fortuneText.innerHTML=

fortunes[Math.floor(Math.random()*fortunes.length)];

fortuneBtn2.disabled=false;

}

},120);

};

}
/* ========= GUESS NUMBER GAME ========= */

const guessBtn=document.getElementById("guessBtn");
const guessGame=document.getElementById("guessGame");
const guessBtn2=document.getElementById("guessBtn2");
const guessInput=document.getElementById("guessInput");
const guessResult=document.getElementById("guessResult");

let secretNumber=Math.floor(Math.random()*100)+1;
let guessAttempts=0;

if(guessBtn && guessGame){

guessBtn.onclick=()=>{

guessGame.style.display="block";

guessGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(guessBtn2){

guessBtn2.onclick=()=>{

const value=parseInt(guessInput.value);

if(isNaN(value)){

guessResult.innerHTML="⚠️ Enter a number first.";

return;

}

if(value<1 || value>100){

guessResult.innerHTML="❌ Number must be between 1 and 100.";

return;

}

guessAttempts++;

if(value===secretNumber){

guessResult.innerHTML=
`🎉 Correct! Number was <b>${secretNumber}</b><br><br>Attempts : <b>${guessAttempts}</b>`;

secretNumber=Math.floor(Math.random()*100)+1;
guessAttempts=0;

guessInput.value="";

return;

}

if(value<secretNumber){

guessResult.innerHTML="📈 Too Low!";

}else{

guessResult.innerHTML="📉 Too High!";

}

guessInput.value="";

guessInput.focus();

};

}
/* ========= ROCK PAPER SCISSORS ========= */

const rockBtn=document.getElementById("rockBtn");
const rockGame=document.getElementById("rockGame");
const rockResult=document.getElementById("rockResult");

if(rockBtn && rockGame){

rockBtn.onclick=()=>{

rockGame.style.display="block";

rockGame.scrollIntoView({
behavior:"smooth"
});

};

}

const chooseButtons=document.querySelectorAll(".choose");

if(chooseButtons.length){

const emoji=["✊","✋","✌️"];

const names=["Rock","Paper","Scissors"];

chooseButtons.forEach((btn,index)=>{

btn.onclick=()=>{

const player=index;

const cpu=Math.floor(Math.random()*3);

let result="";

if(player===cpu){

result="🤝 Draw!";

}

else if(

(player===0 && cpu===2) ||

(player===1 && cpu===0) ||

(player===2 && cpu===1)

){

result="🎉 You Win!";

}

else{

result="😅 Computer Wins!";

}

rockResult.innerHTML=`

<h3>

You :
${emoji[player]}
${names[player]}

</h3>

<h3>

Computer :
${emoji[cpu]}
${names[cpu]}

</h3>

<h2>

${result}

</h2>

`;

};

});

}
/* ========= REACTION TEST GAME ========= */

const reactionBtn=document.getElementById("reactionBtn");
const reactionGame=document.getElementById("reactionGame");
const reactionBox=document.getElementById("reactionBox");
const reactionStart=document.getElementById("reactionStart");
const reactionResult=document.getElementById("reactionResult");

if(reactionBtn && reactionGame){

reactionBtn.onclick=()=>{

reactionGame.style.display="block";

reactionGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(reactionStart && reactionBox){

let waiting=false;
let startTime=0;
let timeout=null;

reactionStart.onclick=()=>{

reactionStart.disabled=true;

reactionResult.innerHTML="";

reactionBox.innerHTML="WAIT...";

reactionBox.style.background="#e53935";

waiting=true;

clearTimeout(timeout);

timeout=setTimeout(()=>{

waiting=false;

reactionBox.innerHTML="CLICK!";

reactionBox.style.background="#2ecc71";

startTime=performance.now();

},2000+Math.random()*3000);

};

reactionBox.onclick=()=>{

if(reactionStart.disabled===false)return;

if(waiting){

clearTimeout(timeout);

reactionStart.disabled=false;

reactionResult.innerHTML=

"❌ Too Early! Wait for GREEN.";

reactionBox.innerHTML="WAIT...";

reactionBox.style.background="#e53935";

return;

}

if(startTime===0)return;

const reaction=Math.floor(performance.now()-startTime);

let rank="😴";

if(reaction<180){

rank="⚡ Amazing";

}

else if(reaction<250){

rank="🔥 Great";

}

else if(reaction<350){

rank="😊 Good";

}

else{

rank="🐢 Slow";

}

reactionResult.innerHTML=

`${rank}<br><br>Your Reaction : <b>${reaction} ms</b>`;

reactionStart.disabled=false;

reactionBox.innerHTML="READY";

reactionBox.style.background="#3498db";

startTime=0;

};

}
/* ========= SPEED CLICK GAME ========= */

const clickBtn=document.getElementById("clickBtn");
const clickGame=document.getElementById("clickGame");
const clickStart=document.getElementById("clickStart");
const clickArea=document.getElementById("clickArea");
const clickTime=document.getElementById("clickTime");
const clickScore=document.getElementById("clickScore");

if(clickBtn && clickGame){

clickBtn.onclick=()=>{

clickGame.style.display="block";

clickGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(clickStart && clickArea){

let playing=false;
let score=0;
let seconds=10;
let timer=null;

function random(min,max){

return Math.floor(Math.random()*(max-min))+min;

}

function spawnTarget(){

if(!playing)return;

clickArea.innerHTML="";

const target=document.createElement("div");

target.className="clickTarget";

target.style.left=
random(10,clickArea.clientWidth-70)+"px";

target.style.top=
random(10,clickArea.clientHeight-70)+"px";

clickArea.appendChild(target);

target.onclick=()=>{

score++;

clickScore.innerHTML=score;

spawnTarget();

};

}

clickStart.onclick=()=>{

if(playing)return;

playing=true;

score=0;
seconds=10;

clickScore.innerHTML=0;
clickTime.innerHTML=10;

spawnTarget();

timer=setInterval(()=>{

seconds--;

clickTime.innerHTML=seconds;

if(seconds<=0){

clearInterval(timer);

playing=false;

clickArea.innerHTML="";

let medal="😊";

if(score>=30){

medal="👑";

}else if(score>=24){

medal="🏆";

}else if(score>=18){

medal="🥇";

}else if(score>=12){

medal="🥈";

}else if(score>=6){

medal="🥉";

}

clickArea.innerHTML=`

<div style="padding:35px;text-align:center;">

<h1>${medal}</h1>

<h2>Time's Up!</h2>

<br>

<h2>Your Score : ${score}</h2>

<br>

<button class="magic" id="clickReplay">

Play Again

</button>

</div>

`;

document.getElementById("clickReplay").onclick=()=>{

clickStart.click();

};

}

},1000);

};

}
/* ========= MEMORY MATCH GAME ========= */

const memoryBtn=document.getElementById("memoryBtn");
const memoryGame=document.getElementById("memoryGame");
const memoryGrid=document.getElementById("memoryGrid");
const memoryMoves=document.getElementById("memoryMoves");
const memoryRestart=document.getElementById("memoryRestart");

if(memoryBtn && memoryGame){

memoryBtn.onclick=()=>{

memoryGame.style.display="block";

memoryGame.scrollIntoView({
behavior:"smooth"
});

};

}

if(memoryGrid){

const icons=[

"💖","💖",
"🌸","🌸",
"⭐","⭐",
"🦋","🦋",
"🌈","🌈",
"🎀","🎀",
"🌙","🌙",
"✨","✨"

];

let first=null;
let second=null;
let lock=false;
let moves=0;

function shuffle(arr){

for(let i=arr.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[arr[i],arr[j]]=[arr[j],arr[i]];

}

}

function buildMemory(){

memoryGrid.innerHTML="";

moves=0;

memoryMoves.innerHTML=0;

first=null;

second=null;

lock=false;

const cards=[...icons];

shuffle(cards);

cards.forEach(icon=>{

const tile=document.createElement("div");

tile.className="memoryTile";

tile.dataset.icon=icon;

tile.dataset.open="0";

tile.innerHTML="❔";

memoryGrid.appendChild(tile);

tile.onclick=()=>{

if(lock)return;

if(tile.dataset.open==="1")return;

tile.innerHTML=icon;

tile.dataset.open="1";

if(!first){

first=tile;

return;

}

second=tile;

lock=true;

moves++;

memoryMoves.innerHTML=moves;

if(first.dataset.icon===second.dataset.icon){

first=null;

second=null;

lock=false;

const done=[...document.querySelectorAll(".memoryTile")]

.every(e=>e.dataset.open==="1");

if(done){

setTimeout(()=>{

alert("🎉 Congratulations!\nYou completed the Memory Game in "+moves+" moves.");

},300);

}

}

else{

setTimeout(()=>{

first.innerHTML="❔";

second.innerHTML="❔";

first.dataset.open="0";

second.dataset.open="0";

first=null;

second=null;

lock=false;

},700);

}

};

});

}

buildMemory();

memoryRestart.onclick=buildMemory;

}
/* ========= FIND THE CAT GAME ========= */

const catBtn=document.getElementById("catBtn");
const catGame=document.getElementById("catGame");
const catArea=document.getElementById("catArea");
const catResult=document.getElementById("catResult");

if(catBtn && catGame){

catBtn.onclick=()=>{

catGame.style.display="block";

catGame.scrollIntoView({
behavior:"smooth"
});

buildCatGame();

};

}

function buildCatGame(){

catArea.innerHTML="";

catResult.innerHTML="🐱 Find the hidden cat!";

const total=20;

const lucky=Math.floor(Math.random()*total);

for(let i=0;i<total;i++){

const box=document.createElement("div");

box.className="catBox";

box.innerHTML="📦";

box.onclick=()=>{

if(box.dataset.done)return;

box.dataset.done="1";

if(i===lucky){

box.innerHTML="🐱";

box.style.background="#22c55e";

catResult.innerHTML="🎉 You found Bubu's Cat!";

confettiCat();

disableBoxes();

}else{

const items=[

"🌸",
"⭐",
"🍀",
"🎀",
"💖",
"🦋",
"🌈",
"🌙"

];

box.innerHTML=

items[Math.floor(Math.random()*items.length)];

box.style.background="rgba(255,255,255,.15)";

}

};

catArea.appendChild(box);

}

}

function disableBoxes(){

document.querySelectorAll(".catBox").forEach(box=>{

box.style.pointerEvents="none";

});

}

function confettiCat(){

for(let i=0;i<80;i++){

const e=document.createElement("div");

e.innerHTML=["🐱","💖","✨","🌸"][Math.floor(Math.random()*4)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-40px";

e.style.fontSize=(18+Math.random()*25)+"px";

e.style.pointerEvents="none";

e.style.transition="4s linear";

document.body.appendChild(e);

setTimeout(()=>{

e.style.top="110vh";

e.style.transform=

`rotate(${Math.random()*720}deg)`;

e.style.opacity="0";

},50);

setTimeout(()=>{

e.remove();

},4200);

}

}
/* ========= AIM TRAINER GAME ========= */

const aimBtn=document.getElementById("aimBtn");
const aimGame=document.getElementById("aimGame");
const aimArea=document.getElementById("aimArea");
const aimHits=document.getElementById("aimHits");

if(aimBtn && aimGame){

aimBtn.onclick=()=>{

aimGame.style.display="block";

aimGame.scrollIntoView({
behavior:"smooth"
});

startAimGame();

};

}

let aimRunning=false;
let aimScore=0;
let aimTimer=null;

function randomPos(max){

return Math.floor(Math.random()*max);

}

function spawnAimTarget(){

if(!aimRunning)return;

aimArea.innerHTML="";

const target=document.createElement("div");

target.className="aimTarget";

target.style.left=
randomPos(Math.max(20,aimArea.clientWidth-80))+"px";

target.style.top=
randomPos(Math.max(20,aimArea.clientHeight-80))+"px";

target.innerHTML="🎯";

target.style.display="flex";
target.style.alignItems="center";
target.style.justifyContent="center";
target.style.fontSize="34px";

target.onclick=()=>{

aimScore++;

aimHits.innerHTML=aimScore;

target.animate([

{transform:"scale(1)"},
{transform:"scale(1.4)"},
{transform:"scale(0)"}

],{

duration:180

});

setTimeout(spawnAimTarget,170);

};

aimArea.appendChild(target);

}

function startAimGame(){

clearInterval(aimTimer);

aimRunning=true;

aimScore=0;

aimHits.innerHTML="0";

spawnAimTarget();

let time=30;

const timerText=document.createElement("h3");

timerText.id="aimTimer";

timerText.style.marginTop="20px";

timerText.innerHTML="⏳ Time : 30";

const old=document.getElementById("aimTimer");

if(old)old.remove();

aimGame.appendChild(timerText);

aimTimer=setInterval(()=>{

time--;

timerText.innerHTML="⏳ Time : "+time;

if(time<=0){

clearInterval(aimTimer);

aimRunning=false;

aimArea.innerHTML="";

let rank="😊";

if(aimScore>=40){

rank="👑 MASTER";

}else if(aimScore>=30){

rank="🏆 PRO";

}else if(aimScore>=20){

rank="🥇 GREAT";

}else if(aimScore>=10){

rank="🥈 GOOD";

}else{

rank="🥉 KEEP PRACTICING";

}

aimArea.innerHTML=`

<div style="padding:40px;text-align:center;">

<h1>${rank}</h1>

<br>

<h2>Final Score : ${aimScore}</h2>

<br>

<button class="magic" id="restartAim">

Play Again

</button>

</div>

`;

document.getElementById("restartAim").onclick=()=>{

startAimGame();

};

}

},1000);

}
/* ========= COLOR MATCH GAME ========= */

const colorBtn=document.getElementById("colorBtn");
const colorGame=document.getElementById("colorGame");
const colorGrid=document.getElementById("colorGrid");
const colorScore=document.getElementById("colorScore");

if(colorBtn && colorGame){

colorBtn.onclick=()=>{

colorGame.style.display="block";

colorGame.scrollIntoView({
behavior:"smooth"
});

startColorGame();

};

}

const colorList=[
"#ff4d6d",
"#4dabf7",
"#ffd43b",
"#51cf66",
"#845ef7",
"#ff922b",
"#22b8cf",
"#f06595"
];

let colorPoints=0;
let targetColor="";

function startColorGame(){

colorPoints=0;

updateColorScore();

newColorRound();

}

function updateColorScore(){

colorScore.innerHTML="Score : "+colorPoints;

}

function newColorRound(){

colorGrid.innerHTML="";

targetColor=colorList[Math.floor(Math.random()*colorList.length)];

const title=document.createElement("h3");

title.style.marginBottom="20px";

title.innerHTML=

`🎯 Find this color :
<span style="
display:inline-block;
width:35px;
height:35px;
border-radius:50%;
vertical-align:middle;
background:${targetColor};
border:2px solid white;
"></span>`;

colorGrid.appendChild(title);

const colors=[...colorList];

for(let i=colors.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[colors[i],colors[j]]=[colors[j],colors[i]];

}

colors.forEach(c=>{

const tile=document.createElement("div");

tile.className="colorTile";

tile.style.background=c;

tile.onclick=()=>{

if(c===targetColor){

colorPoints++;

updateColorScore();

tile.animate([

{transform:"scale(1)"},

{transform:"scale(1.2)"},

{transform:"scale(1)"}

],{

duration:250

});

setTimeout(newColorRound,250);

}

else{

tile.animate([

{transform:"translateX(0)"},

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(0)"}

],{

duration:220

});

if(colorPoints>0){

colorPoints--;

}

updateColorScore();

}

};

colorGrid.appendChild(tile);

});

}
/* ========= TREASURE HUNT GAME ========= */

const treasureBtn=document.getElementById("treasureBtn");
const treasureGame=document.getElementById("treasureGame");
const treasureArea=document.getElementById("treasureArea");
const treasureScore=document.getElementById("treasureScore");

if(treasureBtn && treasureGame){

treasureBtn.onclick=()=>{

treasureGame.style.display="block";

treasureGame.scrollIntoView({
behavior:"smooth"
});

startTreasureGame();

};

}

let treasurePoints=0;
let treasureLevel=1;

function startTreasureGame(){

treasurePoints=0;
treasureLevel=1;

treasureScore.innerHTML="0";

spawnTreasure();

}

function spawnTreasure(){

treasureArea.innerHTML="";

const total=16;

const lucky=Math.floor(Math.random()*total);

for(let i=0;i<total;i++){

const box=document.createElement("div");

box.style.width="70px";
box.style.height="70px";
box.style.display="inline-flex";
box.style.alignItems="center";
box.style.justifyContent="center";
box.style.margin="10px";
box.style.fontSize="32px";
box.style.cursor="pointer";
box.style.borderRadius="18px";
box.style.background="rgba(255,255,255,.08)";
box.innerHTML="📦";

box.onclick=()=>{

if(box.dataset.open)return;

box.dataset.open=1;

if(i===lucky){

box.innerHTML="💎";

box.style.background="#22c55e";

treasurePoints++;

treasureLevel++;

treasureScore.innerHTML=treasurePoints;

celebrateTreasure();

setTimeout(spawnTreasure,800);

}

else{

const items=[

"🪨",
"🍂",
"🌸",
"⭐",
"🥥",
"🪵",
"🍀",
"🐚"

];

box.innerHTML=

items[Math.floor(Math.random()*items.length)];

box.style.background="rgba(255,255,255,.16)";

}

};

treasureArea.appendChild(box);

}

const level=document.createElement("h3");

level.style.marginTop="25px";

level.innerHTML=

"🏝️ Level : "+treasureLevel;

treasureArea.appendChild(level);

}

function celebrateTreasure(){

for(let i=0;i<40;i++){

const gem=document.createElement("div");

gem.innerHTML=["💎","✨","🎉","🌈"][Math.floor(Math.random()*4)];

gem.style.position="fixed";

gem.style.left=Math.random()*100+"vw";

gem.style.top="-20px";

gem.style.fontSize=(18+Math.random()*20)+"px";

gem.style.pointerEvents="none";

gem.style.transition="3.5s linear";

document.body.appendChild(gem);

setTimeout(()=>{

gem.style.top="110vh";

gem.style.transform=

`rotate(${Math.random()*720}deg)`;

gem.style.opacity="0";

},30);

setTimeout(()=>{

gem.remove();

},3600);

}

}
