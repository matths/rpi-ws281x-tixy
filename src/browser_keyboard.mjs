import { EventEmitter } from 'events';

const keyboard = new EventEmitter();

document.addEventListener('keydown', e => {
  if (e.key == 'ArrowLeft') {
    keyboard.emit('prev');
  } else if (e.key == 'ArrowRight') {
    keyboard.emit('next');
  }
});

export default keyboard;
