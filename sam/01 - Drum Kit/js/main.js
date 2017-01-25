function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // console.log(key);
  if(!audio) return; // stop the function from running all together

  audio.currentTime = 0; // therefore we won't rewind to the start
  audio.play();
  // if we try pressing 'f' over and over we only hear the sound every so often
  // because the audio file has empty noise after the actual noise
  // if you call an audio element that is already playing it won't play again
  key.classList.add('playing'); //same as jQuery key.addClass('playing')
  // we also have .remove and .toggle in vanilla JavaScript
}

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => addEventListener('transitionend', removeTransition));
// listened for the transitionend event
// we can also do something like listening for the animationend event

window.addEventListener('keydown', playSound);
