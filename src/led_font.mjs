import { performance } from 'perf_hooks';
import createRenderer from './led/led_renderer.mjs';
import bfm2 from './bfm2/bfm2.mjs';
import { fontC64esque } from './bfm2/fonts_node.mjs';

bfm2(
  createRenderer,
  () => performance.now(),
  fontC64esque,
  'Hello World!'
);
