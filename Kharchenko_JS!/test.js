// тест
var testResult = document.forms.test;

function allQuestions() {
   var mark = 0;
   if(testResult.elements.linkteg1.checked) {
	mark = mark +1;
}
   if(testResult.elements.numberedlist3.checked) {
	mark = mark +1;
}
   if(testResult.elements.passteg4.checked) {
	mark = mark +1;
}
   if(testResult.elements.tableteg2.checked && testResult.elements.tableteg4.checked && !testResult.elements.tableteg1.checked && !testResult.elements.tableteg3.checked) {
	mark = mark +1;
}

  if(testResult.elements.formteg1.checked && testResult.elements.formteg2.checked && !testResult.elements.formteg3.checked && !testResult.elements.formteg4.checked) {
	mark = mark +1;
}
 alert(mark + " баллов из 5, " + "Ваш результат " + mark * 20 + "% верных ответов");
 //сброс результата
  for (var i = 0; i < testResult.elements.length; ++i) {
    if (testResult.elements[i].checked) {
       testResult.elements[i].checked = false;
      }
   }
}
document.getElementById("testBotton").onclick = allQuestions;


