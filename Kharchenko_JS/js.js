//калькулятор

var firstNumber;
var operation;
var res = document.getElementById("result");
//оживим 10 кнопок
function addNumeral(numeral){
	res.value = res.value + numeral;
};
var numSeven = document.getElementById("seven");
	 numSeven.onclick = function(){
		 addNumeral(7);
	 };
	 
var numEight = document.getElementById("eight");
	 numEight.onclick = function(){
		 addNumeral(8);
	 };
var numNine = document.getElementById("nine");
	 numNine.onclick = function(){
		 addNumeral(9);
	 };
var numFour = document.getElementById("four");
	 numFour.onclick = function(){
		 addNumeral(4);
	 };
var numFive = document.getElementById("five");
	 numFive.onclick = function(){
		 addNumeral(5);
	 };
var numSix = document.getElementById("six");
	 numSix.onclick = function(){
		 addNumeral(6);
	 };
var numOne = document.getElementById("one");
	 numOne.onclick = function(){
		 addNumeral(1);
	 };
var numTwo = document.getElementById("two");
	 numTwo.onclick = function(){
		 addNumeral(2);
	 };
var numThree = document.getElementById("three");
	 numThree.onclick = function(){
		 addNumeral(3);
	 };
var numZero = document.getElementById("zero");
	 numZero.onclick = function(){
		 addNumeral(0);
	 };
	 
//+-*/
var act = document.getElementById("division");
	act.onclick = function(){
	firstNumber = res.value;
	operation = "/";
	res.value = "";
	};
var act = document.getElementById("multiply");
	act.onclick = function(){
	firstNumber = res.value;
	operation = "*";
	res.value = "";
	};
var act = document.getElementById("minus");
	act.onclick = function(){
	firstNumber = res.value;
	operation = "-";
	res.value = "";
	};
var act = document.getElementById("plus");
	act.onclick = function(){
	firstNumber = res.value;
	operation = "+";
	res.value = "";
	};

//= деление на ноль

document.getElementById("equal").onclick = function(){
	switch (operation) {
		case "+":
	      res.value = +firstNumber +  +res.value;
		  break;
		case "-":
		  res.value = +firstNumber -  +res.value;
		  break;
		case "*":
		  res.value = +firstNumber *  +res.value;
		  break;
		case "/":
		    switch (true) {
			  case res.value != 0:
			    res.value = +firstNumber /  +res.value;
			    break;
			  case res.value == 0:
			    alert("Деление на ноль невозможнo");
			    break;
		  };
		break;
	};
};
//точка
var numPoint = document.getElementById("point");
    numPoint.onclick = function () {
   if (res.value.indexOf(".") === -1) {
   res.value += ".";
   };
  };
  
 //сброс
 var numReset = document.getElementById("reset");
     numReset.onclick = function(){
	 res.value = "";
	 };
  
 //+/-
 var numPlusMinus = document.getElementById("plusMinus");
   numPlusMinus.onclick = function () {
   res.value = res.value * -1;
  };
  
// тест
var testResult = document.forms.test;

function allQuestions(){
   var mark = 0;
if(testResult.elements.linkteg1.checked){
	mark = mark +1;
};
if(testResult.elements.numberedlist3.checked){
	mark = mark +1;
};
if(testResult.elements.passteg4.checked){
	mark = mark +1;
};
if(testResult.elements.tableteg2.checked && testResult.elements.tableteg4.checked && !testResult.elements.tableteg1.checked && !testResult.elements.tableteg3.checked){
	mark = mark +1;
};

if(testResult.elements.formteg1.checked && testResult.elements.formteg2.checked && !testResult.elements.formteg3.checked && !testResult.elements.formteg4.checked){
	mark = mark +1;
};
 alert(mark + " баллов из 5, " + "Ваш результат " + mark * 20 + "% верных ответов");
 //сброс результата
  for (var i = 0; i < testResult.elements.length; ++i) {
    if (testResult.elements[i].checked) {
       testResult.elements[i].checked = false;
      };
};
document.getElementById("testBotton").onclick = allQuestions;


