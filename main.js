var scientificButtons = document.getElementsByClassName("sci_btn");
var showingInverse = false;
var input;
function onload () {
  input = new InputManager();
}

function add(text, math) {
  input.add(text);
}

function remove() {
  input.remove();
}

function toggleInverse() {
  if(!showingInverse){
    showingInverse = true;
    for (var i = 0; i < scientificButtons.length; i++) {
      var b = scientificButtons[i];
      if(b.innerHTML == "sin"){b.innerHTML = "asin"}
      if(b.innerHTML == "cos"){b.innerHTML = "acos"}
      if(b.innerHTML == "tan"){b.innerHTML = "atan"}

      if(b.innerHTML == "INV"){
        b.style.backgroundColor = "#fa0"
        b.style.color = "#000"
      }
    }
  }else {
    showingInverse = false;
    for (var i = 0; i < scientificButtons.length; i++) {
      var b = scientificButtons[i];
      if(b.innerHTML == "asin"){b.innerHTML = "sin"}
      if(b.innerHTML == "acos"){b.innerHTML = "cos"}
      if(b.innerHTML == "atan"){b.innerHTML = "tan"}

      if(b.innerHTML == "INV"){
        b.style.backgroundColor = ""
        b.style.color = ""
      }
    }

  }
}



//plant names
//fego
//silver sperge

/*


// Setup Event Listners
for (var j = 0; j < allButtons.length; j++) {
  for (var i = 0; i < allButtons[j].length; i++) {
    allButtons[j][i].addEventListener("click", function () {
      buttonClicked(this);
      highlight(this);
    });
  }

}

// Setup expression type variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operations = ["+", "-", "×", "÷"];
var trigFncts = ["sin", "cos", "tan"];
var logs = ["^", "log", "ln"];
var brackets = ["(", ")"];

// State variables
var showingAnswer = false;
var equation = "";

// Functions:

function buttonClicked(btn) {
  var text = btn.innerHTML;

  if(text == "="){
    console.log(formatInput(equation));
  }else{
    add(text);
  }
}

function formatInput (input) {
  var equation = input;

  equation = parseSpecialCharacters(equation);
  equation = formatBrackets(equation);
  return equation;
}

function parseSpecialCharacters (input) {
  var equation = input;
  for (var i = 0; i < equation.length; i++) {
    if(equation[i] == operations[2]){
      equation = equation.splice(i, 1, "*");
    }
    if(equation[i] == operations[3]){
      equation = equation.splice(i, 1, "/");
    }

  }
  for (var i = 0; i < trigFncts.length; i++) {
    var index = equation.indexOf(trigFncts[i]);
    if(index != -1){
      equation = equation.splice(index, trigFncts[i].length, "Math."+trigFncts[i]+"(");
    }
  }
  if(equation.indexOf("sin") != 0){
    equation = equation.splice(i, 1, "/");
  }

  return equation;
}

function formatBrackets (input) {
  var equation = input;
  var openBracketCount = 0;
  var closedBracketCount = 0;
  for(var i = 0; i < equation.length; i ++){
    if(equation[i] == brackets[0]){
      openBracketCount ++;

      // Multiply before bracket open
      if(numbers.indexOf(equation[i-1]) != -1 || equation[i-1] == brackets[1]){
        equation = equation.splice(i, 0, '*');
        i++;
      }
    }
    if(equation[i] == brackets[1]){
      closedBracketCount ++;
    }
  }
  var dc = openBracketCount - closedBracketCount;
  for (var i = 0; i < dc; i++) {
    equation+=brackets[1];
  }
  return equation;
}

function set (string) {
  answerBox.innerHTML = string;
  equation = string;
}

function add (string) {
  getCaret();
  // var position = window.getSelection().getRangeAt(0).startOffset;
  answerBox.innerHTML = answerBox.innerHTML.splice(caretPosition, 0, string);
  // answerBox.scrollLeft = answerBox.scrollWidth;
  equation = equation.splice(caretPosition, 0, string);
}



function setCaret(index) {

}

function getCaret () {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt) {
      var pos = sel.getRangeAt(0).startOffset
      caretPosition = pos;
      return pos;
    }
  }
  return null;
}

answerBox.onblur = function () {
  answerBox.focus();
}

function highlight (btn){
  btn.style.backgroundColor = "#222";
  setTimeout(function () {
    btn.style.backgroundColor = "";
  }, 100);
}


*/
