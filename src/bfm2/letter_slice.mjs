import { getBitAt, addBitAt } from './bit_lib.mjs';
import letterWidth from './letter_width.mjs';
import indexArrayOfLength from '../utils/index_array_of_length.mjs';

const letterSlice = letter => indexArrayOfLength(letterWidth(letter)).map(
  c => indexArrayOfLength(16)
  .map(r => getBitAt(letter[r])(c))
  .reduce((res, bit, r) => bit?addBitAt(res)(r):res, 0)
);

export default letterSlice;
