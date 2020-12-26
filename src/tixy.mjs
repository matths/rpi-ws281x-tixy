const tixy = [
  (t, i, x, y) => Math.sin(t),
  (t, i, x, y) => Math.random() < 0.3,
  (t, i, x, y) => Math.sin(t-Math.sqrt((x-7.5)**2+(y-6)**2)),
  (t, i, x, y) => Math.sin(y/8 + t),
  (t, i, x, y) => -.4/(Math.hypot(x-t%10,y-t%8)-t%2*9),
  (t, i, x, y) => Math.sin(2*Math.atan((y-7.5)/(x-7.5))+5*t)    
];

export default tixy;
