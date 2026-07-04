const messages = [

"I'm really sorry zisa , i wont give any excuse and i'll try to do better i promise.",

"I brought my cutest bunny to apologize. 🐰, i am really sorry",

"I know you're upset and i wish i could pull you into a hug to apologize ❤️",

"If hugs could travel through screens, I'd send a thousand. 🤍",

"I didnt want to make you sad , i am sorry , i just want you to smile even if a bit",

"I promise to keep trying until you smile. 😊",

"Even this bunny wants us to make up. 🐇",

"You are my favorite person and i'll make sure to manage my time better",

"Can smile a bit wider babe? pleaseeeee ❤️"

];

let current = 0;

const bunnyImage = document.getElementById("bunnyImage");
const message = document.getElementById("message");

function updatePage(){

    bunnyImage.src = `bunny${current+1}.jpg`;

    message.textContent = messages[current];

}

document.getElementById("noBtn").addEventListener("click",()=>{

    current++;

    if(current>=9){

        current=0;

    }

    updatePage();

});

document.getElementById("yesBtn").addEventListener("click",()=>{

    document.getElementById("mainContent").classList.add("hidden");

    document.getElementById("loveScreen").classList.remove("hidden");

});

updatePage();
