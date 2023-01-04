//https://css-tricks.com/making-pure-css-playpause-button/
// https://freshman.tech/custom-html5-video/#get-started

let video = document.getElementById("videoPlayButton");
video.addEventListener('click', toggleVideoPlayer);

const playVideo = document.getElementById("playPauseButton");


console.log('gate 1');


function toggleVideoPlayer() {
    if (video.paused) {
        video.play();
        playVideo.style.display = 'none';

        console.log('gate 2');
    } else {
        video.pause();
        playVideo.style.display = 'block';
        console.log('gate 3');
    }

    video.onended = () => {
        video.pause();
        playVideo.style.display = 'block';
    };
}




// function toggleVideoPlayer() {
//     if (video.paused) {
//         video.play();
//         playVideo.classList.remove('play');
//         // playVideo.classList.add('play');
//         // playVideo.classList.remove('pause');
//         // playVideo.style.display = 'block';
//         console.log('gate 2');
//     } else {
//         video.pause();
//         // playVideo.style.display = 'none';
//         // playVideo.classList.remove('play');
//         console.log('gate 3');
//     }
// }




// function toggleVideoPlayer() {
//     if (video.paused || video.ended) {
//         video.play();
//         playVideo.classList.add('play');
//         pauseVideo.classList.remove('pause');
//     } else {
//         video.pause();
//         pauseVideo.classList.add('pause');
//         playVideo.classList.remove('play');
//     }
// }
// function playPauseVideo() {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }