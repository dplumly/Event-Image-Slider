let timeoutID;
let clock = document.getElementById("timerWrapper");
let modalBackground = document.getElementById("modal-background");
let timeLeft = 15;
let intervalId = null

function setup() {
    // this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("onClick", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
    console.log('2');
    startTimer();
}
setup();


function startTimer() {
    console.log('3');
    timeoutID = setTimeout(goInactive, 60000);
}

function resetTimer(e) {
    clock.style.display = 'none';
    modalBackground.style.display = 'none';

    if (clock.style.display == 'none') {
        clock.classList.remove('fade-in-modal')
        clock.classList.add('fade-out-modal')
    }

    clearInterval(intervalId);
    clearTimeout(timeoutID);
    console.log('4');
    startTimer();
}

function goInactive() {
    intervalId = setInterval(() => {
        document.getElementById('timer').innerHTML = String(timeLeft);

        clock.style.display = 'block';
        modalBackground.style.display = 'block';

        if (clock.style.display == 'block') {
            clock.classList.remove('fade-out-modal')
            clock.classList.add('fade-in-modal')
            modalBackground.classList.add('modal-bg-fade-in')
        }

        if (timeLeft > 0) {
            console.log('5');
        }
        timeLeft--;

        if (timeLeft === 0) {
            console.log('reload');
            window.location.reload(true);
        }
    }, 1000);

    timeLeft = 15;
    console.log('6');
}

const continueSession = document.getElementById('continue');
continueSession.addEventListener('click', resetTimer);





