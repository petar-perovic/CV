document.querySelector('body').addEventListener('load', mojLoader());


var myVar;
var wrapper = document.querySelector('.wrapper');
var circles = document.querySelector('.container');

wrapper.style.display = 'none';
circles.style.display = 'none';

function mojLoader() {
    myVar = setTimeout(showPage, 1950);
}

function showPage() {
    document.getElementById("loader-container").style.display = "none";
    document.querySelector('.wrapper').style.display = "flex";
    document.querySelector('.container').style.display = "flex";
}

levels = document.querySelectorAll('.show-me');
levels.forEach(element =>{
    element.style.display = 'none';
});

var parents = document.querySelectorAll('.showbtn');

parents.forEach(element => {
    element.addEventListener('click', ()=>{
        showChild(element.nextElementSibling, element.querySelector('.fa-chevron-down'));
    })
});

function showChild(child, icon){
    if (child.style.display === "none"){
        showDisplay(child, icon);
    }else{
        hideDisplay(child, icon);
    }
}

function showDisplay(level, icon) {
    icon.style.transform = "rotate(-180deg)";
    icon.style.transition = "0.5s";
    const currentAnimationName = getComputedStyle(level).animationName;
    level.style.animationName = currentAnimationName;
    level.style.display = "flex";  // Ensure the element is displayed during animation

    level.addEventListener('animationend', function handler() {
        level.style.display = "flex";
        // level.style.height = "auto";  // Reset the height to auto after animation
        level.style.animationName = '';  // Clear the animation name
        level.removeEventListener('animationend', handler);
    });
}

function hideDisplay(level, icon) {
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "0.5s";
    const currentAnimationName = getComputedStyle(level).animationName;
    level.style.animationName = currentAnimationName + "2";

    level.addEventListener('animationend', function handler() {
        level.style.display = "none";
        level.style.animationName = '';  // Clear the animation name
        level.removeEventListener('animationend', handler);
    });
}