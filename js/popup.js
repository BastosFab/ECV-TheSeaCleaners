// Get the modal
var modal = document.getElementById("myModal");
var modalProfil = document.getElementById("myModal_Profil");
var modalSecond = document.getElementById("myModal_second");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnProfil = document.getElementById("myBtn_profil");
var btnSecond = document.getElementById("myBtn_second");

// Get the <span> element that closes the modal
var close1 = document.getElementsByClassName("close1")[0];
var close2 = document.getElementsByClassName("close2")[0];
var closeProfil = document.getElementsByClassName("closeProfil")[0];
var check1 = document.getElementsByClassName("closeCheck1")[0];
var check2 = document.getElementsByClassName("closeCheck2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "flex";
}
btnProfil.onclick = function () {
    modalProfil.style.display = "flex";
}
btnSecond.onclick = function () {
    modalSecond.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function () {
    modal.style.display = "none";
    modalProfil.style.display = "none";
    modalSecond.style.display = "none";
}
close2.onclick = function () {
    modal.style.display = "none";
    modalProfil.style.display = "none";
    modalSecond.style.display = "none";
}
closeProfil.onclick = function () {
    modal.style.display = "none";
    modalProfil.style.display = "none";
    modalSecond.style.display = "none";
}
check1.onclick = function () {
    modal.style.display = "none";
    modalSecond.style.display = "none";
}
check2.onclick = function () {
    modal.style.display = "none";
    modalSecond.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function (eventProfil) {
    if (eventProfil.target == modalProfil) {
        modalProfil.style.display = "none";
    }
}
window.onclick = function (eventSecond) {
    if (eventSecond.target == modalSecond) {
        modalSecond.style.display = "none";
    }
}