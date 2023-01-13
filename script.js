function vypocti() {
 var vstup1 = parseFloat (document.getElementById("exampleInputEmail1").value);
 var vstup2 = parseFloat (document.getElementById("exampleInputPassword1").value);
 var operace = document.getElementById("operace");
 var vysledek;
 switch (operace) {
  case "+":
   vysledek = vstup1 + vstup2;
   break;
  case "-":
   vysledek = vstup1 - vstup2;
   break;
  case "/":
   vysledek = vstup1 / vstup2;
   break;
  case "*":
   vysledek = vstup1 * vstup2;
   break;
  default:
   vysledek = "Neplatná volba operace";
 }
//document.getElementById("output").innerHTML = vysledek;
 document.getElementById("output").innerHTML = vstup1 + vstup2;
}