let city2 = document.getElementById("planArriere");

window.addEventListener(
    "scroll",
    function () {
        let value = window.scrollY;
        city2.style.bottom = 0.15 * value + "px";
        //city2.style.transform = "scale("+0.002 * value +")";
    }
)

let sectionHeading = document.getElementById("heading");

sectionHeading.addEventListener(
    "mousemove",
    function () {
        let retine_gauche = document.getElementById("retine_gauche");
        let retine_droite = document.getElementById("retine_droite");
        let valueX = ((window.event.clientX) / 10) - 50;
        let valueY = ((window.event.clientY) / 10) - 35;
        let sensibilite = 1.0;
        if (valueX <= 0) {
            retine_gauche.style.transform = "translate(" + valueX * sensibilite + "px," + valueY + "px)";
            retine_droite.style.transform = "translate(" + valueX * sensibilite + "px," + valueY + "px)";
        } else {
            retine_gauche.style.transform = "translate(" + valueX * sensibilite + "px," + valueY + "px)";
            retine_droite.style.transform = "translate(" + valueX * sensibilite + "px," + valueY + "px)";
        }
    }
)


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            document.querySelectorAll('.texte-appear').forEach(text => {
                text.classList.remove("active")
            });
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add("active")
        }

    });
}, {treshhold: [0.5], rootMargin: "0px 0px -50% 0px"});

document.querySelectorAll('.texte-appear').forEach(text => {
    observer.observe(text)
});
const audioRonron = new Audio('./assets/audio/ronron.mp4');
document.querySelectorAll(".voirPlus").forEach(button =>{
    button.addEventListener(
        "mouseenter", ()=>{
            audioRonron.play();
        }
    )
    button.addEventListener(
        "mouseleave", ()=>{
            audioRonron.pause();
        }
    )
})

document.getElementById("close").addEventListener(
    "click", ()=>{
        document.getElementById("intro").classList.add("active")
    }
)