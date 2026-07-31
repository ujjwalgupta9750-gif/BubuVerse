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
