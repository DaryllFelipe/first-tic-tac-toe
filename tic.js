const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

one.addEventListener("click", tictac1)
two.addEventListener("click", tictac2)
three.addEventListener("click", tictac3)
four.addEventListener("click", tictac4)
five.addEventListener("click", tictac5)
six.addEventListener("click", tictac6)
seven.addEventListener("click", tictac7)
eight.addEventListener("click", tictac8)
nine.addEventListener("click", tictac9)


let text;
let txt1;
let txt2;
let txt3;
let txt4;
let txt5;
let txt6;
let txt7;
let txt8;
let txt9;
let start = true;
let fill1 = false;
let fill2 = false;
let fill3 = false;
let fill4 = false;
let fill5 = false;
let fill6 = false;
let fill7 = false;
let fill8 = false;
let fill9 = false;

function tictac1(){
    if(fill1){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            one.appendChild(span);
            txt1 = one.querySelector("span").innerText;
            start = false;
            fill1 = true;  
            return{
                text,
                txt1,
                start,
                fill1
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            one.appendChild(span);
            txt1 = one.querySelector("span").innerText;
            fill1 = true;
            ticVictory();
            return{
                text,
                txt1,
                fill1
                };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                one.appendChild(span);
                txt1 = one.querySelector("span").innerText;
                fill1 = true;
                ticVictory();
                return{
                    text,
                    txt1,
                    fill1
                };
            }
        }
    }
}
function tictac2(){
    if(fill2){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            two.appendChild(span);
            txt2 = two.querySelector("span").innerText;
            start = false;
            fill2 = true;  
            return{
                text,
                txt2,
                start,
                fill2
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            two.appendChild(span);
            txt2 = two.querySelector("span").innerText;
            fill2 = true;
            ticVictory();
            return{
                text,
                txt2,
                fill2
                };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
            span.classList.add('texto');
            span.innerText = text;
            two.appendChild(span);
            txt2 = two.querySelector("span").innerText;
            fill2 = true;
            ticVictory();
            return{
                text,
                txt2,
                fill2
                };
            }
        }
    }
}
function tictac3(){
    if(fill3){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            three.appendChild(span);
            txt3 = three.querySelector("span").innerText;
            start = false;
            fill3 = true;  
            return{
                text,
                txt3,
                start,
                fill3
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            three.appendChild(span);
            txt3 = two.querySelector("span").innerText;
            fill3 = true;
            ticVictory();
            return{
                text,
                txt3,
                fill3
                };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                three.appendChild(span);
                txt3 = two.querySelector("span").innerText;
                fill3 = true;
                ticVictory();
                return{
                    text,
                    txt3,
                    fill3
                    };
            }
        }
    }
}
function tictac4(){
    if(fill4){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            four.appendChild(span);
            txt4 = four.querySelector("span").innerText;
            start = false;
            fill4 = true;  
            return{
                text,
                txt4,
                start,
                fill4
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            four.appendChild(span);
            txt4 = four.querySelector("span").innerText;
            fill4 = true;
            ticVictory();
            return{
                text,
                txt4,
                fill4
                };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                four.appendChild(span);
                txt4 = four.querySelector("span").innerText;
                fill4 = true;
                ticVictory();
                return{
                    text,
                    txt4,
                    fill4
                    };
            }
        }
    }
}
function tictac5(){
    if(fill5){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            five.appendChild(span);
            txt5 = five.querySelector("span").innerText;
            start = false;
            fill5 = true;  
            return{
                text,
                txt5,
                start,
                fill5
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            five.appendChild(span);
            txt5 = five.querySelector("span").innerText;
            fill5 = true;
            ticVictory();
            return{
                text,
                txt5,
                fill5
                };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                five.appendChild(span);
                txt5 = five.querySelector("span").innerText;
                fill5 = true;
                ticVictory();
                return{
                    text,
                    txt5,
                    fill5
                    };
            }
        }
    }
}
function tictac6(){
    if(fill6){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            six.appendChild(span);
            txt6 = six.querySelector("span").innerText;
            start = false;
            fill6 = true;  
            return{
                text,
                txt6,
                start,
                fill6
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            six.appendChild(span);
                txt6 = six.querySelector("span").innerText;
                fill6 = true;
                ticVictory();
                return{
                    text,
                    txt6,
                    fill6
                    };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                six.appendChild(span);
                txt6 = six.querySelector("span").innerText;
                fill6 = true;
                ticVictory();
                return{
                    text,
                    txt6,
                    fill6
                    };
            }
        }
    }
}
function tictac7(){
    if(fill7){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            seven.appendChild(span);
            txt7 = seven.querySelector("span").innerText;
            start = false;
            fill7 = true;  
            return{
                text,
                txt7,
                start,
                fill7
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            seven.appendChild(span);
                txt7 = seven.querySelector("span").innerText;
                fill7 = true;
                ticVictory();
                return{
                    text,
                    txt7,
                    fill7
                    };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                seven.appendChild(span);
                txt7 = seven.querySelector("span").innerText;
                fill7 = true;
                ticVictory();
                return{
                    text,
                    txt7,
                    fill7
                    };
            }
        }
    }
}
function tictac8(){
    if(fill8){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            eight.appendChild(span);
            txt8 = eight.querySelector("span").innerText;
            start = false;
            fill8 = true;  
            return{
                text,
                txt8,
                start,
                fill8
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            eight.appendChild(span);
                txt8= eight.querySelector("span").innerText;
                fill8 = true;
                ticVictory();
                return{
                    text,
                    txt8,
                    fill8
                    };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                eight.appendChild(span);
                txt8= eight.querySelector("span").innerText;
                fill8 = true;
                ticVictory();
                return{
                    text,
                    txt8,
                    fill8
                    };
            }
        }
    }
}
function tictac9(){
    if(fill9){
        return;
    }
    else{
        if(start){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            nine.appendChild(span);
            txt9 = nine.querySelector("span").innerText;
            start = false;
            fill9 = true;  
            return{
                text,
                txt9,
                start,
                fill9
            };
         }
        else{
            if(text === "O"){
            text = "X";
            let span = document.createElement('span');
            span.classList.add('textx');
            span.innerText = text;
            nine.appendChild(span);
                txt9= nine.querySelector("span").innerText;
                fill9 = true;
                ticVictory();
                return{
                    text,
                    txt9,
                    fill9
                    };
            }
            else if(text === "X"){
                text = "O";
                let span = document.createElement('span');
                span.classList.add('texto');
                span.innerText = text;
                nine.appendChild(span);
                txt9= nine.querySelector("span").innerText;
                fill9 = true;
                ticVictory();
                return{
                    text,
                    txt9,
                    fill9
                    };
            }
        }
    }
}
function ticVictory(){
    if ( (txt1 === "X") && (txt2 === "X") && (txt3 === "X"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if ( (txt1 === "O") && (txt2 === "O") && (txt3 === "O"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if ( (txt1 === "X") && (txt4 === "X") && (txt7 === "X"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if ( (txt1 === "O") && (txt4 === "O") && (txt7 === "O"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if ( (txt1 === "X") && (txt5 === "X") && (txt9 === "X"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if ( (txt1 === "O") && (txt5 === "O") && (txt9 === "O"))
    {
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt2 === "X") && (txt5 === "X") && (txt8 === "X")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt2 === "O") && (txt5 === "O") && (txt8 === "O")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt3 === "X") && (txt6 === "X") && (txt9 === "X")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt3 === "O") && (txt6 === "O") && (txt9 === "O")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt3 === "X") && (txt5 === "X") && (txt7 === "X")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt3 === "O") && (txt5 === "O") && (txt7 === "O")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt4 === "O") && (txt5 === "O") && (txt6 === "O")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt4 === "X") && (txt5 === "X") && (txt6 === "X")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt7 === "O") && (txt8 === "O") && (txt9 === "O")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else if((txt7 === "X") && (txt8 === "X") && (txt9 === "X")){
        alert("Victory!");
        setTimeout(function(){ location.reload(); }, 3000);
    }
    else{
        return;
    }
}
