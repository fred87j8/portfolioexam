window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("mousedown", toggleMenu);
    document.querySelector("#menuknap").addEventListener("mousedown", burgerTilKryds);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("nav").classList.toggle("hidden");
    let erSkjult = document.querySelector("nav").classList.contains("hidden");
}

function burgerTilKryds() {
    console.log("burgerTilKryds");
    document.querySelector("#container").classList.toggle("change");
}


//
