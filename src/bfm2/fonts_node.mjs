import fs from 'fs';

const fontC64esque = JSON.parse(fs.readFileSync(new URL('./fonts/C64esque.json', import.meta.url)));
const fontHelvetiPixel = JSON.parse(fs.readFileSync(new URL('./fonts/HelvetiPixel.json', import.meta.url)));
const fontMinnesota = JSON.parse(fs.readFileSync(new URL('./fonts/Minnesota.json', import.meta.url)));

export {
  fontC64esque,
  fontHelvetiPixel,
  fontMinnesota
};
