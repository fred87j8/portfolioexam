window.addEventListener("load", startPizza);

let myRand;

function startPizza() {
    console.log("startPizza");

    //start fald-animation på containere
    document.querySelector("#pizza_container0").classList.add("fald");
    document.querySelector("#pizza_container1").classList.add("fald");
    document.querySelector("#pizza_container2").classList.add("fald");
    document.querySelector("#pizza_container3").classList.add("fald");
    document.querySelector("#pizza_container4").classList.add("fald");
    document.querySelector("#pizza_container5").classList.add("fald");
    document.querySelector("#pizza_container6").classList.add("fald");


    //start eventlistnere på containers for click

    document.querySelector("#pizza_container0").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container1").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container2").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container3").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container4").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container5").addEventListener("mousedown", pizzaClick);
    document.querySelector("#pizza_container6").addEventListener("mousedown", pizzaClick);


    //start eventlistnere på containers for ingen click reset
    document.querySelector("#pizza_container0").addEventListener("animationiteration", pizzaReset);
    document.querySelector("#pizza_container1").addEventListener("animationiteration", pizzaReset);
    document.querySelector("#pizza_container2").addEventListener("animationiteration", pizzaReset);
    document.querySelector("#pizza_container3").addEventListener("animationiteration", pizzaReset);
    document.querySelector("#pizza_container4").addEventListener("animationiteration", pizzaReset);
}

function pizzaClick() {
    console.log("pizzaClick");

    //Fjern eventlisteneren
    this.removeEventListener("mousedown", pizzaClick);

    //pause fald på container og start forsvind på sprite
    this.classList.add("frys");
    this.firstElementChild.classList.add("forsvind");

    // Genstart container når forsvind er slut
    this.addEventListener("animationend", pizzaClickReset);
}

function pizzaClickReset() {
    console.log("pizzaClickReset");

    //Fjern eventlistner
    this.removeEventListener("animationend", pizzaClickReset);

    //Fjern pause fra container og forsvind fra sprite
    this.classList.remove("frys");
    this.firstElementChild.classList.remove("forsvind");

    //giv ny random position
    this.classList.remove("delay0");
    this.classList.remove("delay1");
    this.classList.remove("delay2");
    this.classList.remove("delay3");
    this.classList.remove("delay4");
    this.classList.remove("delay5");
    this.classList.remove("delay6");
    myRand = Math.floor(Math.random() * 7);
    this.classList.add("delay" + myRand);

    // Genstart fald på container
    this.classList.remove("fald");
    this.offsetHeight;
    this.classList.add("fald");

    //Put eventlistener på igen
    this.addEventListener("mousedown", pizzaClick);
}

function pizzaReset() {
    console.log("pizzaReset");

    //Fjern eventlistner
    this.removeEventListener("animationend", pizzaReset);

    //giv ny random position
    this.classList.remove("delay0");
    this.classList.remove("delay1");
    this.classList.remove("delay2");
    this.classList.remove("delay3");
    this.classList.remove("delay4");
    this.classList.remove("delay5");
    this.classList.remove("delay6");
    myRand = Math.floor(Math.random() * 7);
    this.classList.add("delay" + myRand);

    this.classList.remove("fald");
    this.offsetHeight;
    this.classList.add("fald");
}

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
        document.querySelector("#pizza_container0").classList.add("fald");
        document.querySelector("#pizza_container1").classList.add("fald");
        document.querySelector("#pizza_container2").classList.add("fald");
        document.querySelector("#pizza_container3").classList.add("fald");
        document.querySelector("#pizza_container4").classList.add("fald");
        document.querySelector("#pizza_container5").classList.add("fald");
        document.querySelector("#pizza_container6").classList.add("fald");

    } else {
        document.querySelector("#menuknap").textContent = "✕";
        document.querySelector("#pizza_container0").classList.remove("fald");
        document.querySelector("#pizza_container1").classList.remove("fald");
        document.querySelector("#pizza_container2").classList.remove("fald");
        document.querySelector("#pizza_container3").classList.remove("fald");
        document.querySelector("#pizza_container4").classList.remove("fald");
        document.querySelector("#pizza_container5").classList.remove("fald");
        document.querySelector("#pizza_container6").classList.remove("fald");
    }

}


//
