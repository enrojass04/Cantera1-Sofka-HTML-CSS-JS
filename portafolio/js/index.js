let acordeonExt = document.getElementsByClassName("acordeonExt");

for (let i = 0; i < acordeonExt.length; i++) {
    acordeonExt[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let siguiente = this.nextElementSibling;
        if (siguiente.style.display == "block") {
            siguiente.style.display = "none";
        } else {
            siguiente.style.display = "block";
        }
    })
}



let acordeonInt = document.getElementsByClassName("acordeonInt");

for (let i = 0; i < acordeonInt.length; i++) {
    acordeonInt[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let siguiente = this.nextElementSibling;
        if (siguiente.style.display == "block") {
            siguiente.style.display = "none";
        } else {
            siguiente.style.display = "block";
        }
    })
}

/*

*/
