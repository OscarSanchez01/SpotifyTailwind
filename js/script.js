const play = document.getElementById('play');
const inputFooter = document.getElementById('inputFooter');
const burgerButton = document.getElementById('burger-btn');
const aside = document.getElementById('aside');
const closeButton = document.getElementById('closeButton');
const alertBox = document.getElementById('alertBox');
const username = document.getElementById('username');
const email = document.getElementById('email');
const dni = document.getElementById('dni');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');
const day = document.getElementById('day');
const year = document.getElementById('year');

function toggleAside() {
    aside.classList.toggle('sm:w-1/4');
    aside.classList.toggle('md:w-1/5');

    const paragraphs = aside.querySelectorAll('li p');

    paragraphs.forEach(p => {
        p.classList.toggle('hidden');
    });
}

let intervalId = null;
function togglePlayPause() {
    let currentValue = parseInt(inputFooter.value, 10);
    if (intervalId === null) {
        intervalId = setInterval(() => {
            currentValue++;
            if (currentValue > 100) {
                currentValue = 0;
            }
            inputFooter.value = currentValue;

        }, 1000);
        play.textContent = "⏸";
    } else {
        clearInterval(intervalId);
        intervalId = null;
        play.textContent = "▶️";
    }
}

document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        const image = row.querySelector('img').src;
        const title = row.querySelector('p.text-white').textContent;
        const artist = row.querySelector('p.text-gray-400.text-sm').textContent;

        document.getElementById('footerImage').src = image;
        document.getElementById('footerTitle').textContent = title;
        document.getElementById('footerArtist').textContent = artist;
    });
});


burgerButton.addEventListener('click', toggleAside);
play.addEventListener('click', togglePlayPause);