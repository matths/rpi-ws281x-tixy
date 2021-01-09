const pow = (base) => (exp) => Math.pow(base, exp);

const bitmask = pow(2);

const getBitAt = value => col => (value & bitmask(col)) >> col;
const addBitAt = value => col => value | 1 << col;

export {
  bitmask,
  getBitAt,
  addBitAt
}
