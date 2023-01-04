let timeoutID;
let clock = document.getElementById("timerWrapper");
let modalBackground = document.getElementById("modal-background");
let timeLeft = 15;
let intervalId = null

// activity that keeps the page live
function setup() {
    this.addEventListener("onClick", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
    startTimer();
}
setup();

// main timeout function
function startTimer() {
    timeoutID = setTimeout(goInactive, 60000);
}

// clear modal and reset timer
function resetTimer(e) {
    clock.style.display = 'none';
    modalBackground.style.display = 'none';

    if (clock.style.display == 'none') {
        clock.classList.remove('fade-in-modal')
        clock.classList.add('fade-out-modal')
    }

    clearInterval(intervalId);
    clearTimeout(timeoutID);
    startTimer();
}

// modal pop up and will reset the page if no activity
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
        }
        timeLeft--;

        if (timeLeft === 0) {
            window.location.reload(true);
        }
    }, 1000);

    timeLeft = 15;
}

const continueSession = document.getElementById('continue');
continueSession.addEventListener('click', resetTimer);





