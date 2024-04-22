const btn = document.querySelector("#biggerbutton");
const moobtn = document.querySelector("#moobutton");

const ta = document.querySelector("#textarea");

const radioFancy = document.querySelector("#fancy");
const radioBoring = document.querySelector("#boring");

function showDialog(){
    alert("Hello, world!");    
}

function biggify(){
    ta.style.fontSize="24pt";
}

function setBold(){
    if (radioFancy.checked){
        ta.style.fontWeight = 'bold';
        ta.style.color = 'blue';
        ta.style.textDecoration = 'underline';
    }else{
        ta.style.fontWeight = 'normal';
        ta.style.color = 'black';
        ta.style.textDecoration = 'none';
    }
}

function moo(){
    var text = ta.value;
    text = text.toUpperCase();
    var tokens = text.split(".");
    text = tokens.join("-Moo ");
    //text += "-Moo";
    ta.value = text;
}

btn.addEventListener("click", biggify);

radioFancy.addEventListener("change", setBold);
radioBoring.addEventListener("change", setBold);

moobtn.addEventListener("click", moo);