import { char2ascii } from './char_code.mjs';
import letterSlice from './letter_slice.mjs';
import objectMap from '../utils/object_map.mjs';
import indexArrayOfLength from '../utils/index_array_of_length.mjs';

const bfm2 = (createRenderer, now, font, message) => {

  const fontSliced = objectMap(
    font,
    (v, k, i) => parseInt(k)!=NaN && Array.isArray(v) ? letterSlice(v) : v
  );

  const letterspacing = 1;
  const offset = 2;
  const baseline = 12;
  const space = 5

  const zeros = n => indexArrayOfLength(n).map(_ => 0);

  const spaceSlices = zeros(space);
  const ascii2letter = ascii => fontSliced[ascii]||spaceSlices;

  const letters = Array.from(message).map(char2ascii).map(ascii2letter);

  const appendLetterSlices = (slices, letter) => {
    const begin = slices.slice(0, -offset);
    const mergezone = slices.slice(-offset).map((v, i) => v | letter[i]);
    const end = letter.slice(offset);
    const spacing = zeros(letterspacing);
    return [...begin, ...mergezone, ...end, ...spacing];
  }
  const slices = letters.reduce(appendLetterSlices, zeros(2*offset));

  let fontData = zeros(16);

  const size = 16;
  const emptyPixelData = Array(size*size).fill(0);
  const render = createRenderer(size);

  const removeFirst = ([first, ...tail]) => tail; // immutable shift
  const append = (arr, item) => [...arr, item]; // immutable push

  let count = 0;
  let prevT = 0;
  const loop = () => {
    const t = Math.floor(now()/60);
    if (t > prevT) {
      prevT = t;
      // const sine = Math.round(2*Math.sin(count/10*Math.PI));
      const sine = 1;
      fontData = append(removeFirst(fontData), sine<0 ? slices[count]<<-sine : slices[count]>>sine);
      count++; if (count >= slices.length) count = 0;
    }

    const pixelData = emptyPixelData.map((pv, i) => {
      const x = i%size;
      const y = Math.floor(i/size);
      const v = fontData[x]&1<<y;
      return v > 0 ? 0x555555 : 0;
    });
    render(pixelData);
  }
  setInterval(loop, 50);
}

export default bfm2;
