const shadeToDark = (hex, v) => {
  const d = Math.round(-255 * v);
  const r = (hex >> 16) + d;
  const g = (hex >> 8 & 0x00FF) + d;
  const b = (hex & 0x0000FF) + d;
  return (r<255?r<1?0:r:255)*0x10000 + (g<255?g<1?0:g:255)*0x100 + (b<255?b<1?0:b:255);
}

export default shadeToDark;
