var drumNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
        makeShadow(key);
    })
}

document.addEventListener("keypress", function (event) {
    var key = event.key.toUpperCase();
    makeSound(key);
    makeShadow(key);
})

function makeSound(key) {
    switch (key) {
        case 'A':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'S':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'D':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'F':
            var audio = new Audio('sounds/hit-hat.mp3');
            audio.play();
            break;
        case 'G':
            var audio = new Audio('sounds/stick.mp3');
            audio.play();
            break;
        case 'H':
            var audio = new Audio('sounds/sanre.mp3');
            audio.play();
            break;
        case 'J':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'K':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        default: console.log(key);
            break;
    }
}

function makeShadow(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}