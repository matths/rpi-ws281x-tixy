import tap from 'tap';
import letterSlice from '../../../src/bmf2/letter_slice.mjs';

// W
const bmf2Letter = [0, 0, 0, 0, 0, 396, 396, 396, 428, 508, 476, 396, 0, 0, 0, 0];
const letterSlices = [0,0,4064,4064,1536,768,1536,4064,4064];

tap.test('bmf2 font letter to bit slices conversion', tap => {

  tap.test('when using letterSlice', tap => {
    tap.plan(1);
    tap.deepEqual(letterSlice(bmf2Letter), letterSlices, 'should convert letter W correctly');
    tap.end();
  });

  tap.end();
});
