
var pos = document.documentElement;

pos.addEventListener('mousemove', e => {
    console.log(e.clientX, e.clientY);
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
})