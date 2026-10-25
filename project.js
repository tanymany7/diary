

let x = document.getElementById("dwoht");
let musicbutton = document.getElementById("musicbutton");
let pausebutton = document.getElementById("pausebutton");

function changemusic(){
    x.play();
}
 function pausemusic(){
    console.log("pause clicked");
x.pause();
}

function test(){
    console.log("bruh");
}

let themers = document.getElementsByClassName("themer");
let loveTexts = document.getElementsByClassName("love-text");

function midnighttheme(){
    document.body.style.background = "linear-gradient(135deg, #121D27, #1E264C, #5A658B)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    for (let i = 0; i < themers.length; i++) {
    themers[i].style.color = "#85A7BA";

}
for (let i = 0; i < loveTexts.length; i++) {
    loveTexts[i].style.color = "#A9C7FF";
}
}

function lovertheme(){
     document.body.style.background = "linear-gradient(135deg,#FFD0E2,#E8C9EA,#A9DDF5)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    for (let i = 0; i < themers.length; i++) {
    themers[i].style.color = "rgb(233, 6, 199)";
}
for (let i = 0; i < loveTexts.length; i++) {
    loveTexts[i].style.color = "rgb(233, 6, 199)";

}
}

function reputationtheme(){
    document.body.style.background = "linear-gradient(135deg,#0B0B0C,#1A1A1D,#29292D,#111113)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    for (let i = 0; i < themers.length; i++) {
    themers[i].style.color = "#C9A227";
}
for (let i = 0; i < loveTexts.length; i++) {
    loveTexts[i].style.color = "#C9A227";

}
}

