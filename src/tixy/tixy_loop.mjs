import grb2rgb from '../utils/grb2rgb.mjs';
import shadeToDark from '../utils/shade_to_dark.mjs';
import limitValue from '../utils/limit_value.mjs';
import tixy from './tixy.mjs';

const tixyLoop = (createRenderer, now, keyboard, colorShift) => {
  const size = 16;
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
    const t = now()/1000;
    const pixelData = emptyPixelData.map((pv, i) => {
      const x = i%size;
      const y = Math.floor(i/size);
      const v = transform(t, i, x, y);
      const p = 1 - Math.abs(limitValue(v, 1, -1));
      const c = v < 0 ? shadeToDark(0xff0000, p) : shadeToDark(0xffffff, p);
      return colorShift ? grb2rgb(c) : c;
    });
    render(pixelData);
  }
  setInterval(loop, 50);
}

export default tixyLoop;
