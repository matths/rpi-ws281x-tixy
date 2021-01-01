import decodeIco from 'decode-ico';
import { readFileSync } from 'fs';

const icoOut = (createRenderer, colorShift) => {
  const size = 16;
  const render = createRenderer(size);

  const filename = './raspberry.ico';
  // const filename = './rainbow.ico';
  // const filename = './tv.ico';

  const source = readFileSync(new URL(filename, import.meta.url));
  const images = decodeIco(source);
  const imageData = images[0];
  const uint8Array = new Uint8Array(imageData.data.buffer);
  uint8Array.map((c, i) => {
    if (i%4==0) {
      uint8Array[i] = uint8Array[i+2];
      uint8Array[i+2] = uint8Array[i+1];
      uint8Array[i+1] = c;
      uint8Array[i+3] = 0;
      }
  });
  const pixelData = new Uint32Array(uint8Array.buffer);
  render(pixelData);
}

export default icoOut;
