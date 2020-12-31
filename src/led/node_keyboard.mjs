import { EventEmitter } from 'events';
import readline from 'readline';

const keyboard = new EventEmitter();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Use left/right to switch tixy.land function.');
process.stdin.on('keypress', (key, data) => {
  if (data.ctrl && data.name === 'c') {
    process.kill(process.pid, "SIGINT");
  } else if (data.ctrl && data.name === 'k') {
    process.exit();
  } else if (data.name == 'left') {
    keyboard.emit('prev');
  } else if (data.name == 'right') {
    keyboard.emit('next');
  }
});

export default keyboard;
