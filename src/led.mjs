import { performance } from 'perf_hooks';
import createRenderer from './led/led_renderer.mjs';
import keyboard from './led/node_keyboard.mjs';
import tixyLoop from './tixy/tixy_loop.mjs';

tixyLoop(
  createRenderer,
  () => performance.now(),
  keyboard,
  true
);
