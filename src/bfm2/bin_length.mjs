const binLength = bin => Math.ceil(Math.log2(bin+1));
const binLength2 = bin => bin==0?0:bin.toString(2).length;

export default binLength;
