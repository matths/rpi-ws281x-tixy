import createRenderer from './web/web_renderer.mjs';
import bmf2 from './bmf2/bmf2.mjs';
import { fontC64esque } from './bmf2/fonts_web.mjs';

bmf2(
  createRenderer,
  () => window.performance.now(),
  fontC64esque,
  'Hello World!'
);
