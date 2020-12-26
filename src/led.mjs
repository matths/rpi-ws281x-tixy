import grb2rgb from './grb2rgb.mjs';
import shadeToDark from './shade_to_dark.mjs';
import limitValue from './limit_value.mjs';
import tixy from './tixy.mjs';
import { performance } from 'perf_hooks';
import keyboard from './node_keyboard.mjs';

const size = 16;

import createRenderer from './led_renderer.mjs';
const render = createRenderer(size);

let current = 2;
let transform = tixy[current];
keyboard.addListener('prev', e => {
  current--; if (current<0) current = tixy.length - 1;
  transform = tixy[current];
});
keyboard.addListener('next', e => {
  current++; if (current>=tixy.length) current = 0;
  transform = tixy[current];
});

const emptyPixelData = Array(size*size).fill(0);

const loop = () => {
  const t = performance.now()/1000;
  const pixelData = emptyPixelData.map((pv, i) => {
    const x = i%size;
    const y = Math.floor(i/size);
    const v = transform(t, i, x, y);
    const p = 1 - Math.abs(limitValue(v, 1, -1));
    const c = v < 0 ? shadeToDark(0xff0000, p) : shadeToDark(0xffffff, p);
    return grb2rgb(c);
  });
  render(pixelData);
}

setInterval(loop, 50);
