import { performance } from 'perf_hooks';
import ws281x from 'rpi-ws281x-native';
import { init } from 'rpi-ws281x-native/lib/ws281x-native';

const render = size => {
  const rev = i => i%32 < 16 ? i : Math.floor(i/32)*32+16 + 31 - (i%32);
  const mapping = Array(size*size).fill(0).map((v, i) => rev(i));
  ws281x.init(size*size);
  ws281x.setBrightness(100);
  ws281x.setIndexMapping(mapping.reverse());

  process.on('SIGINT', () => {
    ws281x.reset();
    process.nextTick(() => process.exit(0));
  });

  return ws281x.render;
};

const createRenderer = (size) => {
  return render(size);
};

export default createRenderer;
