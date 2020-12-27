import grb2rgb from './grb2rgb.mjs';
import shadeToDark from './shade_to_dark.mjs';
import limitValue from './limit_value.mjs';
import tixy from './tixy.mjs';
import { performance } from 'perf_hooks';
import keyboard from './node_keyboard.mjs';

const size = 16;

import createRenderer from './led_renderer.mjs';
const render = createRenderer(size);

const emptyPixelData = Array(size*size).fill(0);

let current = 2;
let transform = tixy[current];
const change = d => {
  current += d;
  if (current<0) current = tixy.length - 1;
  if (current>=tixy.length) current = 0;
  transform = tixy[current];
  render(emptyPixelData);
}

keyboard.addListener('prev', e => change(-1));
keyboard.addListener('next', e => change(+1));

let a = 0;
const loop = () => {
  a++;
  if (a%75==0) change(1);
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
