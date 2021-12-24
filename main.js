const animalEl = document.getElementsByClassName('animals')[0];
const audioEl = document.getElementsByTagName('audio');
const startEl = document.getElementsByClassName('startbtn')[0];
const resultEl = document.getElementsByClassName('result')[0];

startEl.addEventListener('click', play);
let score = 0;
let sound;

function play() {
    sound = Math.floor(Math.random() * audioEl.length);
    console.log(sound);
    audioEl[sound].play();
   

}

function voice(event) {
    let pEl = event.target.parentElement;
    if (pEl.className=="animal") {
        if (sound == 0 && event.target.className == 'dog') {
            score++;

        } else if (sound == 1 && event.target.className.includes('bee')) {
            score++;

        } else if (sound == 2 && event.target.className=='cock') {
            score++;
        } else if (sound == 3 && event.target.className.includes('cow')) {
            score++;
        } else if (sound == 4 && event.target.className.includes('donkey')) {
            score++;
        } else if (sound == 5 && event.target.className.includes('bird')) {
            score++;
        } else if (sound == 6 && event.target.className.includes('wolf')) {
            score++;
        } else if (sound == 7 && event.target.className.includes('cat')) {
            score++;
        } else if (sound == 8 && event.target.className.includes('horse')) {
            score++;
        } else if (sound == 9 && event.target.className.includes('lion')) {
            score++;
        }
else {
        score--;

        
    }
    } 
resultEl.innerText = score;
audioEl[sound].pouse();
}


document.addEventListener('click', voice)