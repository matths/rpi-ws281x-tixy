import createRenderer from './web/web_renderer.mjs';
import keyboard from './web/web_keyboard.mjs';
import tixyLoop from './tixy/tixy_loop.mjs';

tixyLoop(
  createRenderer,
  () => window.performance.now(),
  keyboard,
  false
);
