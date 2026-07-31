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
