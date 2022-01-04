


function calc(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "add"){
        out = `Sum is ${Number(a)+Number(b)}`;
    }else{
        out = `Sub is ${Number(a)-Number(b)}`;
    }
    document.getElementById("output").innerText=out
}

function calc1(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "mul"){
        out = `The number is ${Number(a)*Number(b)}`;
    }else{
        out = `The number is ${Number(a)/Number(b)}`;
    }
    document.getElementById("output").innerText=out
}

function changeMode(){
    var mybody = document.body;
    // if body have class mydark than remove else add
    mybody.classList.toggle("mydark")
}