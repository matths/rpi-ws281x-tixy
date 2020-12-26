import grb2rgb from './grb2rgb.mjs';
import shadeToDark from './shade_to_dark.mjs';
import limitValue from './limit_value.mjs';
import tixy from './tixy.mjs';
import createDivRenderer from './div_renderer.mjs';

const size = 16;
const dots = size*size;

const render = createDivRenderer('r1', size);

let current = 2;
let transform = tixy[current];

const emptyPixelData = Array(dots).fill(0);

const loop = () => {
  const t = window.performance.now()/1000;
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

console.log('Press <ctrl>+C to exit.');

