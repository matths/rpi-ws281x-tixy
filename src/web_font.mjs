import createRenderer from './web/web_renderer.mjs';
import bfm2 from './bfm2/bfm2.mjs';
import { fontC64esque } from './bfm2/fonts_web.mjs';

bfm2(
  createRenderer,
  () => window.performance.now(),
  fontC64esque,
  'Hello World!'
);
