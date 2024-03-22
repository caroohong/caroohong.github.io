function toggleMode() {
    var toggle = document.getElementById("toggle-input-text").value.toLowerCase();
    var body = document.body;
    var h1 = document.querySelector("h1");
    var h2s = document.querySelectorAll("h2");
    var accordion_button = document.querySelectorAll(".accordion-button");
    var accordion_body = document.querySelectorAll(".accordion-body");
    var accordion_header = document.querySelectorAll(".accordion-header");
    var toast_header= document.querySelectorAll(".toast-header");
    var toast_body= document.querySelectorAll(".toast-body");
    var input = document.getElementById("toggle-input-text");

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    if (toggle === "dark") {
        toastBootstrap.show(); //toast
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
        accordion_header.forEach(function(aheader)
        {
            aheader.classList.remove("light-mode");
            aheader.classList.add("dark-mode");
        })

        h1.classList.remove("animated-bright");
        h1.classList.add("animated-dark");
        // accordion_button.classList.remove("animated-bright");
        // accordion_button.classList.add("animated-dark");
        accordion_button.forEach(function(abutton){
            abutton.classList.remove("animated-bright");
            abutton.classList.add("animated-dark");
        })
        toast_body.forEach(function(tbody)
        {
            tbody.classList.remove("light-mode");
            tbody.classList.add("dark-mode");
        })
        toast_header.forEach(function(theader)
        {
            theader.classList.remove("light-mode");
            theader.classList.add("dark-mode");
        })
        h2s.forEach(function(h2) {
            h2.classList.remove("animated-bright");
            h2.classList.add("animated-dark");
        });
    } else if (toggle === "light") {
        toastBootstrap.show(); //toast
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        input.classList.remove("dark-mode");
        input.classList.add("light-mode");

        h1.classList.remove("animated-dark");
        h1.classList.add("animated-bright");
        
        accordion_body.forEach(function(abody)
        {
            abody.classList.remove("dark-mode");
            abody.classList.add("light-mode");
        })
        accordion_header.forEach(function(aheader)
        {
            aheader.classList.remove("dark-mode");
            aheader.classList.add("light-mode");
        })
        accordion_button.forEach(function(abutton){
            abutton.classList.remove("animated-dark");
            abutton.classList.add("animated-bright");
        })
        toast_body.forEach(function(tbody){
            tbody.classList.remove("dark-mode");
            tbody.classList.add("light-mode");
        })
        toast_header.forEach(function(theader){
            theader.classList.remove("dark-mode");
            theader.classList.add("light-mode");
        })
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

