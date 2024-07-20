document.querySelector('body').addEventListener('load', mojLoader());


var myVar;
var wrapper = document.querySelector('.wrapper');
var circles = document.querySelector('.container');

wrapper.style.display = 'none';
circles.style.display = 'none';

var stackLevel = document.getElementById('stack-level');
const skills = ['C++','C','C#','Java','Python','PHP','Javascript','Node.js','Html','CSS','PostgreSQL','MS SQL','MySQL','VS C# .NET','React','RabbitMQ'];
const images = ['C++', 'c','csharp','java','python','php','js','node','html','css','postgresql','mssql','mysql','vs','react','rabbitmq'];
const percent = [90,85,75,90,85,75,90,90,100,95,90,80,60,80,60,60];

skills.forEach((skill , index) => {
    const div = document.createElement('div');
    div.classList.add('card');
    let src = 'slike/' + images[index] + '.png';
    let name = skill;
    let prc = percent[index];
    div.innerHTML = ` <div class="box">
                            <div class="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" class="dash percent${prc}"></circle>
                                </svg>
                                <div class="number">
                                    <img src="${src}" alt="logo">
                                </div>
                            </div>
                            <h2 class="stack-text margina">${name}</h2>
                        </div>`;
    stackLevel.appendChild(div);
});




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