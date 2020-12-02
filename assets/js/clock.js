'use stict';

const dateNow = new Date()
const customDateNow = dateNow.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
const customTimeNow = dateNow.toLocaleTimeString('hu-Hu', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

document.querySelector('.clock').innerHTML = `${customDateNow}<br><br>${customTimeNow}`;

window.setInterval('refresh()', 1000);
function refresh() {
    window.location.reload();
};