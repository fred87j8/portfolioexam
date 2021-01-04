window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("mousedown", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("nav").classList.toggle("hidden");

    let erSkjult = document.querySelector("nav").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }

}
