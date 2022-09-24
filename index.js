let topButton = document.getElementById('top-button');
let experienceButton = document.getElementById('experience-button');
let filmOverlay = document.getElementById('film-grain-overlay');
let symbolBG = document.getElementById('symbol-bg');
let leftDoor = document.getElementById("left-door");
let rightDoor = document.getElementById("right-door");
let loadingPageWrapper = document.getElementById("loading-page");
// let logoDoor = document.getElementById("logo-door")
// let loadMessageDoor = document.getElementById("load-message-door")

let introductionSection = document.getElementById('home');
let contactSection = document.getElementById("contact-section");
let vintageTrigger = document.getElementsByClassName("vintage-trigger");
let danceTrigger = document.getElementsByClassName("dance-trigger");
//                                          NAV                          //
let navButton = document.getElementById('nav-toggle-button');
let navTop = document.getElementById('nav-top');
let navPrimary = document.getElementById('primary-navigation');
let navMenu = document.getElementById('nav-menu');
let navOpen = false;
//                                    SECTIONS SECTIONS                 //
let worksSection = document.getElementById('works-display-section');
let illustrationSection = document.getElementById("illustration-section");
let graphicDesignSection = document.getElementById("graphic-design-section");
let threeDModellingSection = document.getElementById("3d-modelling-section");
let gameDesignSection = document.getElementById("game-design-section");
let webDevelopmentSection = document.getElementById("web-development-section");


let zoomables = document.getElementsByClassName("zoomables");
let zoomDisplay = document.getElementById("zoomDisplay");
let zoomedImage = document.getElementById("zoomed-image");
let zoomedImageWrapper = document.getElementById("zoomed-image-wrapper");
// let disciplineNames = document.getElementById("discipline-names");
let zoomCloseButton = document.getElementById("zoom-close-button");
// let illustrationSection = document.getElementById("illustration-section");
let disciplineTitles = document.getElementsByClassName("discipline");
let disciplineSections = document.getElementsByClassName("discipline-sections");


let marqueeTexts = document.getElementsByClassName("marquee");
let marqueeWrapper = document.getElementsByClassName("marquee-wrapper");
let phraseCount = 1;
let disciplineWrapper = document.getElementById("discipline-wrapper");
let waveImgWrapper = document.getElementById("wave-img-wrapper");
let introImgWrapper = document.getElementById("introduction-img-wrapper");
let waveImg = true;
let introImg = true;

let returnDisciplineText= document.getElementsByClassName('return-discipline-text');

let scrollOffsetTop = 120;

// console.log(disciplineWrapper.children[2]);
console.log('it actually worked you fucking genius. now apply microsoft');

//WHEN CLICK ON ZOOM, SHOW ZOOM DISPLAY //
for (let i = 0; i < zoomables.length; i++) {
    zoomables[i].addEventListener('click', () => {
        //display img full screen when clicked 
        zoomDisplay.setAttribute("data-visible",true);
        //change display image src to the current img
        zoomedImage.src = zoomables[i].children[0].src;
        console.log(zoomables[i].children[0].src);
        // IF WRAPPER 1, IMG DISPLAYED IS VERTICAL
        if (zoomables[i].classList.contains('img-wrapper')) {
            zoomedImageWrapper.classList.remove('img-zoom-wrapper-horizontal');
            zoomedImageWrapper.classList.add('img-zoom-wrapper-vertical');
        }
                // IF WRAPPER 1, IMG DISPLAYED IS HORIZONTAL 
        else if (zoomables[i].classList.contains('img-wrapper-2')) {
            zoomedImageWrapper.classList.remove('img-zoom-wrapper-vertical');
            zoomedImageWrapper.classList.add('img-zoom-wrapper-horizontal');
        }
    });
} // forloop

// WHEN CLICK RETURN TO DISCIPLINE, SCROLL UP AND CLOSE
for (let i = 0; i < returnDisciplineText.length; i++){
returnDisciplineText[i].addEventListener('click',()=>{
    window.scroll({ top: (worksSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
});
}

topButton.addEventListener('click',()=>{
    introductionSection.scrollIntoView({block: "start"});
});

navButton.addEventListener('click',()=>{
    if (!navOpen){
    navOpen = true;
    navTop.setAttribute("data-bg-hidden",true);
    navButton.setAttribute("aria-expanded",true);
    navPrimary.setAttribute("data-visible", true);

}
    else if (navOpen){
    navOpen = false;
    navTop.setAttribute("data-bg-hidden",false);
    navButton.setAttribute("aria-expanded",false);
    navPrimary.setAttribute("data-visible", false);
}
});

for (let i = 0; i < navMenu.children.length; i++) {  
    navMenu.children[i].addEventListener('click',()=>{
        navTop.setAttribute("data-bg-hidden",false);
        navPrimary.setAttribute("data-visible", false);
        navButton.setAttribute("aria-expanded",false);
        navOpen =false;

        if (i ==0){
            introductionSection.scrollIntoView({block: "start"});
        }else if(i ==1){
            window.scroll({ top: (worksSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
        }else if(i ==2){
            window.scroll({ top: (contactSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
        }
        
    
        
    });
}
// marqueeWrapper[0].addEventListener('click',() =>{
//     if (phraseCount ==1){
//     marqueeTexts[0].children[0].innerHTML = "grab a drink?";
//     marqueeTexts[1].children[0].innerHTML = "grab a drink?";
//     phraseCount++
//     }
//     else if(phraseCount ==2){
//         marqueeTexts[0].children[0].innerHTML = "cheers";
//         marqueeTexts[1].children[0].innerHTML = "cheers";
//         phraseCount++    
//     }
//     else if(phraseCount ==3){
//         marqueeTexts[0].children[0].innerHTML = "get in touch";
//         marqueeTexts[1].children[0].innerHTML = "get in touch";
//         phraseCount=1;  
//     }
//     // marqueeTexts[1].innerHTML = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
// });

zoomCloseButton.addEventListener('click', () => {
    zoomDisplay.setAttribute("data-visible",false);
    // zoomDisplay.classList.remove("visible");
});

for (let i = 0; i < disciplineTitles.length; i++) {
    disciplineTitles[i].addEventListener('click', () => {
        // remove disappear
        // for (let i = 0; i < disciplineWrapper.children.length; i++) {
        //     disciplineWrapper.children[i].classList.remove("down-and-disappear");
        // }
        for (let i = 0; i < disciplineSections.length; i++) {
            disciplineSections[i].classList.add("no-display");
        }
        // disciplineSections[i].classList.add("no-display");
        if (i ==0){
            disciplineSections[0].classList.remove("no-display");
            // illustrationSection.scrollIntoView({block: "start"});
            window.scroll({ top: (illustrationSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
        }   else if(i ==1){
            disciplineSections[1].classList.remove("no-display");
            window.scroll({ top: (graphicDesignSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
        }
        else if(i ==2){
            disciplineSections[2].classList.remove("no-display");
            window.scroll({ top: (threeDModellingSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
            // alert('hesad')
        }else if(i ==3){
            disciplineSections[3].classList.remove("no-display");
            window.scroll({ top: (gameDesignSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
            // alert('hesad')
        }else if(i ==4){
            disciplineSections[4].classList.remove("no-display");
            window.scroll({ top: (webDevelopmentSection.offsetTop - scrollOffsetTop), left: 0, behavior: 'smooth' });
            // alert('hesad')
        }
        // else{
        //     disciplineSections[i].classList.add("no-display");
        // }

        //show that it disappeared
        disciplineWrapper.children[i].classList.add("down-and-disappear");
        
    });
}

waveImgWrapper.addEventListener('click',() => {
    if (waveImg){
    waveImgWrapper.children[1].classList.remove('slide-in-left');
    waveImgWrapper.children[1].classList.add('slide-out-bottom');
    waveImgWrapper.children[2].classList.remove('slide-out-bottom');
    waveImgWrapper.children[2].classList.add('slide-in-left');
    waveImg = false;
    }
    else if(!waveImg){
    waveImgWrapper.children[2].classList.remove('slide-in-left');
    waveImgWrapper.children[2].classList.add('slide-out-bottom');
    waveImgWrapper.children[1].classList.remove('slide-out-bottom');
    waveImgWrapper.children[1].classList.add('slide-in-left');
    waveImg = true;
    }
});
// introImgWrapper.addEventListener('mouseover',()=>{
//         introImgWrapper.children[0].classList.add('dancing');

// });
// introImgWrapper.addEventListener('mouseout',()=>{
//         introImgWrapper.children[0].classList.remove('dancing');
// });

// function zoomImage(){
//     if (zoomables[0])
// }

// CODE FROM https://www.youtube.com/watch?v=9A9Vc0jVDLU
function slide(){
    let slideValue1 = document.getElementsByClassName("slider")[0].value;
    document.getElementsByClassName("my-img")[0].style.clipPath = "polygon(0 0," + slideValue1 + "% 0," + slideValue1 + "% 100%, 0 100%)";
    let slideValue2 = document.getElementsByClassName("slider")[1].value;
    document.getElementsByClassName("my-img")[1].style.clipPath = "polygon(0 0," + slideValue2 + "% 0," + slideValue2 + "% 100%, 0 100%)";
    // console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}



//                      MUSIC        MUSIC          MUSIC                               //
let experienceOn = false;
var boogieAudio = new Audio();
var rainSFX = new Audio("assets/sounds/rain-ambience.mp3");
var h2 = document.getElementsByTagName("h2");
var h1 = document.getElementsByTagName("h1");

var shortcut = 'assets/sounds/';
var playlist = new Array(shortcut+'AmosMilburn_BoogieWoogie_Aladdin.mp3',shortcut+'Boogie_Woogie.mp3',shortcut+'BoogieWoogieMan_PeteJohnson_AlbertAmmons.mp3',shortcut+'BoogieWoogieMan_PeteJohnson_AlbertAmmons.mp3',shortcut+"CleoBrown-BoogieWoogie.mp3");


// CODE by Arun P Johnny FROM https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files
boogieAudio.addEventListener('ended', function () {
    n = ++n < playlist.length ? n : 0;
    console.log(n);
    boogieAudio.src = playlist[n];
    boogieAudio.play();
}, true);

experienceButton.addEventListener('click',()=>{
    
    if (!experienceOn){
        // PICK RANDOM SOUND USING RANDOM FLOOR 
    n =  Math.floor(Math.random() * (playlist.length-1));
    console.log(n);
    //PLAY SOUND
    boogieAudio.volume = 0.5;
    boogieAudio.loop = false;
    boogieAudio.src = playlist[n];
    boogieAudio.play();
    boogieAudio.currentTime =0;
    rainSFX.volume =1;
    rainSFX.play();
    rainSFX.loop = true;
   
    // ADD VINTAGE EFFECT (GRAYSCALE, HIGHER CONTRAST) to nav top, primary nav, content-area, top button, background patterns
    for (let i = 0; i < vintageTrigger.length; i++) {
        vintageTrigger[i].classList.add("vintage-effect");}
        filmOverlay.classList.remove('no-display');
        introImgWrapper.children[0].classList.add('dancing');
   
    for (let i = 0; i < danceTrigger.length; i++) {
        danceTrigger[i].classList.add("shake-horizontal-2");}

    for(var i = 0; i < h2.length; i++){
        h2[i].classList.add("shake-horizontal");    }
        h1[0].classList.add("shake-horizontal-2")
    experienceButton.classList.add('shake-horizontal');
    symbolBG.classList.add('shake-horizontal-2-slow');
    experienceOn = true;
    }
    // IF NOT, PAUSE MUSIC AND REMOVE VINTAGE EFFECT
    else if (experienceOn){
        boogieAudio.pause();
        rainSFX.pause();
        for (let i = 0; i < vintageTrigger.length; i++) {
        vintageTrigger[i].classList.remove("vintage-effect");}
        filmOverlay.classList.add('no-display');
        introImgWrapper.children[0].classList.remove('dancing');

        for (let i = 0; i < danceTrigger.length; i++) {
            danceTrigger[i].classList.remove("shake-horizontal-2");}
        for(var i = 0; i < h2.length; i++){
            h2[i].classList.remove("shake-horizontal");}
            h1[0].classList.remove("shake-horizontal-2")
        experienceButton.classList.remove('shake-horizontal');
        symbolBG.classList.remove('shake-horizontal-2-slow');
        experienceOn = false;
    }
});

//     document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(()=>{
//         console.log('page is fully loaded');
//         leftDoor.classList.add("slide-out-left");
//         rightDoor.classList.add("slide-out-right");
//         loadingPageWrapper.classList.add("no-interaction");
//     },2000);
  
//   });



  window.addEventListener('load', () => {
    console.log('page is fully loaded');

    leftDoor.classList.add("slide-out-left");
    rightDoor.classList.add("slide-out-right");
    loadingPageWrapper.classList.add("no-interaction");
  });

