function vypocti() {
    let vstup1 = parseFloat(document.getElementById("exampleInputEmail1").value.replaceAll(",", "."));
    let vstup2 = parseFloat(document.getElementById("exampleInputPassword1").value.replaceAll(",", "."));
    let operace = document.getElementById("operace");
    let vyberOperace = operace.options [operace.selectedIndex].value;
    let vysledekHtml = document.getElementById("vysledek");
    let vysledek = 0;

//mam rad banany

    switch (vyberOperace) {
        case '1':
            vysledek = vstup1 + vstup2;
            vysledekHtml.innerHTML = vysledek;
            break;
        case '2':
            vysledek = vstup1 - vstup2;
            vysledekHtml.innerHTML = vysledek;
            break;
        case '3':
            vysledek = vstup1 / vstup2;
            vysledekHtml.innerHTML = vysledek;
            break;
        case '4':
            vysledek = vstup1 * vstup2;
            vysledekHtml.innerHTML = vysledek;
            break;
    }

    console.log(vysledek)

//document.getElementById("output").innerHTML = vysledek;
// document.getElementById("output").innerHTML = vstup1 + vstup2;
}
