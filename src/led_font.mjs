import { performance } from 'perf_hooks';
import createRenderer from './led/led_renderer.mjs';
import bmf2 from './bmf2/bmf2.mjs';
import { fontC64esque } from './bmf2/fonts_node.mjs';

bmf2(
  createRenderer,
  () => performance.now(),
  fontC64esque,
  'Hello World!'
);
