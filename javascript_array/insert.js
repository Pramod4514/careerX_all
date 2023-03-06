let rr = ['Reliance', 'Titan', 'Wipro', 'Bajaj'];
let d = ['Cipla', 'ITC'];
let p = 2;
rr.splice(p, 0, ...d);
console.log(rr);