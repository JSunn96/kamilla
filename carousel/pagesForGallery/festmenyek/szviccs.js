var text = ["Gúlákként szippant fel akril, vászon 2015",
            "semmi",
            "Szajga antilop beszippantja a csupasz nyuszikat akril, vászon100x130 cm 2015",
            "Bekebelező buli bálnában akril, vászon 100x140cm 2015",
            "Fenyőfa egyszerűsítés mókus uralom alatt akril, vászon 100x140cm 2015",
            "Űrtrutyi akril, vászon 50x70cm 2016",
            "Űrpulyka akril, vászon 50x70cm 2015",
            "Tuti tatu tapéta akril, vászon 40x40cm 2015",
            "A wolpertingerek már megint a műtermemben garázdálkodnak! olaj, vászon 100x100cm 2015",
            "A romantikus ufo vacsora nem az igazi a Föld elpusztításának látványa nélkül olaj, vászon 100x100cm 2015",
            "Tűzözön-vízözön (talán ma egy kicsit pesszimistán festettem) olaj, vászon 100x140cm 2016",
            "Csillaghegesztés (avagy hétköznapi szituáció űrbe helyezve> izgibb) olaj, vászon 100x130cm 2016",
            "Ragaszkodás a bolygó gravitációjához kötél segítségével olaj, vászon 100x120cm 2015",
            "Tökrobbanás olaj, vászon 40x40cm 2016"];
        var Current = 0;

        
        document.getElementById("textHere").innerHTML = text[Current];

function Prev(){
    if(Current == 0){
        Current = text.length - 1;}
    else{
        Current--;}

    document.getElementById("textHere").innerHTML = text[Current];
}

function Next(){
    if(Current == text.length - 1){
        Current = 0;}
    else{
        Current++;}

    document.getElementById("textHere").innerHTML = text[Current];
}


alert("Current");