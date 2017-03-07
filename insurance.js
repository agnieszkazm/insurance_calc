function oplata() {

    //odswieza komunikaty
    document.getElementById("wynik").innerHTML = "";
    document.getElementById("komunikat1").innerHTML = "";
    document.getElementById("komunikat2").innerHTML = "";
    document.getElementById("komunikat3").innerHTML = "";


    var stawka = document.getElementById("pole_stawka").value;
    switch (true) {
        case (stawka < 100):
            komunikat1.innerHTML = "Najniższa stawka ubezpieczenia wynosi 100 PLN. Dalsze obliczenia będą wykonywane dla stawki 100 PLN.";
            var skladka = 20;
            break;
        case (stawka >= 100 && stawka <= 1000):
            var skladka = 20;
            break;
        case (stawka >= 1001 && stawka <= 3000):
            var skladka = 70;
            break;
        case (stawka >= 3001 && stawka <= 6000):
            var skladka = 130;
            break;
        case (stawka >= 6001 && stawka <= 9000):
            var skladka = 180;
            break;
        case (stawka >= 9001 && stawka <= 20000):
            var skladka = 200;
            break;
        default:
            komunikat1.innerHTML = "Podana kwota jest nieprawidłowa. W polu 'podaj stawkę ubezpieczenia' należy wpisać kwotę od 100 do 20 000 PLN.";
    }

    var szkoda = document.getElementById("pole_szkoda").value.toUpperCase();
    switch (szkoda) {
        case ("TAK"):
            var procent1 = (skladka * 0.05) * (-1);
            break;
        case ("NIE"):
            var procent1 = skladka * 0.08;
            break;
        default:
            komunikat3.innerHTML = "W polu 'czy jazda była bezszkodowa' należy wpisać 'tak' lub 'nie'.";
    }

    if (stawka == "" || szkoda == "") {
        komunikat2.innerHTML = "Uzupełnij pola";
    }

    var raty = document.getElementById("pole_raty").value;
    switch (raty) {
        case ("1"):
            var procent2 = (skladka * 0.02) * (-1);
            break;
        case ("4"):
            var procent2 = (skladka * 0.04);
            break;
        default:
            var procent2 = 0;
    }

    document.getElementById("wynik").innerHTML = "Twoja składka wynosi " + Math.ceil(skladka + procent1 + procent2) + " PLN.";

};