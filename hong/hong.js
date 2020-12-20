const all = document.getElementById("all")
const one = document.getElementById("one")
const two = document.getElementById("two")
const con = document.getElementById("confirm")
const checked = document.getElementsByClassName("check");

one.checked = false;
two.checked = false;

//function all(){}
function allcheck(){
    if(one.checked == true && one.checked == true){
        all.checked= true;
    }
    if(all.checked == true){
        changeColor();
    }
    else{
        changeColor();
    }
}

function changeColor(){
    if(all.checked == true){
        con.style.backgroundColor = "black";
    }
    else{
        con.style.backgroundColor = "red";
    }
}

function duobleCheck(){
    if(one.checked == false || two.checked == false){
        one.checked = true;
        two.checked = true;
    }
    else{
        one.checked = false;
        two.checked = false;
    }
}

Array.from(checked).forEach(checked => checked.addEventListener("click", allcheck ))

all.addEventListener("click",duobleCheck)