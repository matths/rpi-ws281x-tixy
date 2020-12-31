import createRenderer from './div_renderer.mjs';
import keyboard from './browser_keyboard.mjs';
import tixyLoop from './tixy_loop.mjs';

tixyLoop(
  createRenderer,
  () => window.performance.now(),
  keyboard,
  false
);
