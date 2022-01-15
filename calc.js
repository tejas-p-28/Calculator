


// function calc(opt){
//     var a = document.getElementById("first").value;
//     var b = document.getElementById("first").value;
//     var out;
//     if(opt == "add"){
//         out = `Sum is ${Number(a)+Number(b)}`;
//     }else{
//         out = `Sub is ${Number(a)-Number(b)}`;
//     }
//     document.getElementById("output").innerText=out
// }

// function calc1(opt){
//     var a = document.getElementById("first").value;
//     var b = document.getElementById("first").value;
//     var out;
//     if(opt == "mul"){
//         out = `The number is ${Number(a)*Number(b)}`;
//     }else{
//         out = `The number is ${Number(a)/Number(b)}`;
//     }
//     document.getElementById("output").innerText=out
// }

// function changeMode(){
//     var mybody = document.body;
//     mybody.classList.toggle("mydark")
// }
document.addEventListener("DOMContentLoaded", function (event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');

    let dark_mode_btn = document.querySelector('.myDark');
    let clear = document.querySelector('#clear');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');

    let Normal_btn = document.querySelectorAll('#Normal_btn');


    let initial_value = "";

    Normal_btn.forEach((Normal_btn, index) => {
        Normal_btn.addEventListener('click', function () {
            let text = this.innerHTML;
            initial_value += text;
            result.innerHTML = initial_value;
        });
    });

    /*equal to button action*/
    equalTo.addEventListener('click', function () {
        if (result.innerHTML != "") {
            history.innerHTML = result.innerHTML;
            result.innerHTML = eval(result.innerHTML);
            initial_value = eval(result.innerHTML);
        } else {
            alert('please enter any Number');
        }
    });


    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function () {
        body.classList.toggle('dark_mode_active');
        if (dark_mode_status == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            dark_mode_status = true;
        } else {
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            dark_mode_status = false;
        }
    });


    /*clear all number*/
    clear.addEventListener('click', function () {
        result.innerHTML = "";
        initial_value = "";
    });

    /*delete single number*/
    delete_single_num.addEventListener('click', function () {
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
        initial_value = result.innerHTML;
    });

});