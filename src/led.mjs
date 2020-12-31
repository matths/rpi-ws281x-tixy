import { performance } from 'perf_hooks';
import createRenderer from './led_renderer.mjs';
import keyboard from './node_keyboard.mjs';
import tixyLoop from './tixy_loop.mjs';

tixyLoop(
  createRenderer,
  () => performance.now(),
  keyboard,
  true
);
