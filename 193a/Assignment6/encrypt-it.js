/*
 * Starter file 
 */
function cipherText(){
    const txtArea = document.querySelector("#input-text");
    let input = txtArea.value;
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let chr = input[i];
        if (chr < 'A' || (chr > 'Z' && chr < 'a') || chr > 'z'){
            result += chr;
        }else if (chr == 'z'){
            result += 'a';
        }else if (chr == 'Z'){
            result += 'A';
        }else{
            let letter = input.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
        }
    }
    txtArea.value = result;
    console.log(result);
}

function handleReset(){
    const txtArea = document.querySelector("#input-text");
    txtArea.value = "";
}

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  function init() {
    const encryptbtn = document.querySelector("#encrypt-it");
    encryptbtn.addEventListener("click", cipherText);

    const resetbtn = document.querySelector("#reset");
    resetbtn.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
