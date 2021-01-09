import binLength from './bin_length.mjs';

const letterWidth = letter => letter?binLength(Math.max(...letter)):0;

export default letterWidth;
