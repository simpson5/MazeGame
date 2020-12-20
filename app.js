const maze = document.getElementById("jsMaze");
const ctx = maze.getContext("2d");
const set = document.getElementById("jsSet");
const body  =document.querySelector("body");

maze.width = 400;
maze.height = 400;

let a = 0;
let b = 0;
const c =50;

ctx.fillStyle = `rgb(50,50,50)`;
ctx.fillRect(a, b, 50, 50);
ctx.fillStyle = `rgb(50,50,50)`;
ctx.fillRect(350, 350, 50, 50);

let start = false;



function userMove(event){
    ctx.clearRect(a,b,50,50);
    if(event.keyCode == 39){
        a=a+c;
        ctx.fillStyle = `rgb(50,50,50)`;
        ctx.fillRect(a, b, 50, 50);
    }
    if(event.keyCode == 37){
        a=a-c;
        ctx.fillStyle = `rgb(50,50,50)`;
        ctx.fillRect(a, b, 50, 50);
    }
    if(event.keyCode == 38){
        b=b-c;
        ctx.fillStyle = `rgb(50,50,50)`;
        ctx.fillRect(a, b, 50, 50);
    }
    if(event.keyCode == 40){
        b=b+c;
        ctx.fillStyle = `rgb(50,50,50)`;
        ctx.fillRect(a, b, 50, 50);
    }
    ctx.fillStyle = `rgb(50,50,50)`;
    ctx.fillRect(350, 350, 50, 50);

    setTimeout(function(){
        if(a==350&&b==350){ending();}
    },100);
}

function onMouseMove(event){
    const x =event.offsetX;
    const y =event.offsetY;

    if(x<50 && y<50){
        set.innerText="시작";
    }
    else if(x>350 && y>350){
        set.innerText="도착";
    }
    else{
        set.innerText="가는 중";
    }
}

function starting(){

}

function ending(){
    alert("끝났습니다.");
}

if(maze){
    maze.addEventListener("mousemove",onMouseMove);
    maze.addEventListener("mousedown",starting);
}

document.addEventListener("keydown",userMove);






/*일단 마우스 경로
벽울 만나면 움직이지 못하게
마우스는 시작점에서 시작
도착점에 도달할시 메세지 */