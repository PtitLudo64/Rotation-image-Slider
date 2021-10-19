const zoneVal = document.querySelector("#valeur");
let valCursor = document.querySelector('.valAngle');
const banner = document.querySelector('.banner');
const panels = document.querySelectorAll('.panel');
const screen = document.querySelector('.screen')

function AffVal() {
    valCursor = document.querySelector('.valAngle');
    zoneVal.textContent = Math.floor(valCursor.value / 3.6) + '%';
    banner.setAttribute('style', 'transform:rotateY(' +
        valCursor.value + 'deg) translateY(' +
        (valCursor.value / 3.6) * -1 + 'px);');
    screen.setAttribute('style', 'transform:translate( -50%, ' +
        (((valCursor.value / 3.6) * -1) - 146) + 'px);');
}

banner.addEventListener('mouseover', () => {
    panels.forEach(element => {
        element.setAttribute('style', 'opacity:1; filter:grayscale(0);');
    });
});

banner.addEventListener('mouseleave', () => {
    panels.forEach(element => {
        element.setAttribute('style', 'opacity:0.8; filter:grayscale(1); transition: opacity 5s ease-in, filter 5s ease-in');
    });
});