function toggleMode() {
    var toggle = document.getElementById("toggle-input-text").value.toLowerCase();
    var body = document.body;
    var h1 = document.querySelector("h1");
    var h2s = document.querySelectorAll("h2");
    var accordion_button = document.querySelectorAll(".accordion-button");
    var accordion_body = document.querySelectorAll(".accordion-body");
    var input = document.getElementById("toggle-input-text");
    if (toggle === "dark") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        input.classList.remove("light-mode");
        input.classList.add("dark-mode");
        // accordion_body.classList.remove("light-mode");
        // accordion_body.classList.add("dark-mode");
        accordion_body.forEach(function(abody)
        {
            abody.classList.remove("light-mode");
            abody.classList.add("dark-mode");
        })

        h1.classList.remove("animated-bright");
        h1.classList.add("animated-dark");
        // accordion_button.classList.remove("animated-bright");
        // accordion_button.classList.add("animated-dark");
        accordion_button.forEach(function(abutton){
            abutton.classList.remove("animated-bright");
            abutton.classList.add("animated-dark");
        })
        h2s.forEach(function(h2) {
            h2.classList.remove("animated-bright");
            h2.classList.add("animated-dark");
        });
    } else if (toggle === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        accordion_body.classList.remove("dark-mode");
        accordion_body.classList.add("light-mode");
        input.classList.remove("dark-mode");
        input.classList.add("light-mode");

        h1.classList.remove("animated-dark");
        h1.classList.add("animated-bright");
        accordion_button.classList.remove("animated-dark");
        accordion_button.classList.add("animated-bright");
        h2s.forEach(function(h2) {
            h2.classList.remove("animated-dark");
            h2.classList.add("animated-bright");
        });
    } else {
        alert("Invalid theme, please choose between light or dark.");
    }
}

function abrirEnlace(enlace) {
    window.open(enlace, '_blank');
}