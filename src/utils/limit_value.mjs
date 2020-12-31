const limitValue = (value, top, bottom) => Math.min(Math.max(value, bottom), top);

export default limitValue;
