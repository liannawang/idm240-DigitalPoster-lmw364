var myAudio = document.getElementById("myAudio");
var isPlaying = false;

const box = document.querySelector('#radio');
const box2 = document.querySelector('#radio-tablet');
const box3 = document.querySelector('#radio-mobile');


function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  box.style.animationPlayState = 'running';
  box2.style.animationPlayState = 'running';
  box3.style.animationPlayState = 'running';
};
myAudio.onpause = function() {
  isPlaying = false;
  box.style.animationPlayState = 'paused';
  box2.style.animationPlayState = 'paused';
  box3.style.animationPlayState = 'paused';
};


$('.bird-button').click(function() {
  $(this).toggleClass('clicked');
  $('button p').text(function(i, text) {
    return text === "Sent!" ? "Send" : "Sent!";
  });
});