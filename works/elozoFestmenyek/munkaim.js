function engFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function hunFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ovlass tovább";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Vissza";
        moreText.style.display = "inline";
    }
}








function toHungarian() {
    document.getElementById('hun').style.display = "block";
    document.getElementById('eng').style.display = "none";
    hunFunction();
    
}




function toEnglish() {
    document.getElementById('hun').style.display = "none";
    document.getElementById('eng').style.display = "block";
    engFunction();

}


