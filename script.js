document.addEventListener("DOMContentLoaded", function() {
  
  var values = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
  
  var input = document.querySelector("input");
  
  input.oninput = function() {
    var letters = input.value.split("");
    var value = 0;
    for (i = 0; i < letters.length; i++) value += values[letters[i].charCodeAt(0) - 97] || 0;
    document.querySelector("div").textContent = value || 0;
  };
  
  function verifyInput(e) {
    var key = e.keyCode || e.which;
    return key > 64 && key < 91 || 8 == key || 46 == key || key == 37 || key == 39 || 32 == key;
  }
  
  input.onkeyup = verifyInput;
  input.onkeydown = verifyInput;
  
  input.onfocus = function() {
    input.placeholder = "";
  };
  
  input.onblur = function() {
    input.placeholder = "ex scrabble";
  };
  
});
