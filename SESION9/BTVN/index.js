// console.log('bai1');

// const a = new Promise(
//   function (resolve, reject){
//     setTimeout( () => resolve(console.log('Promise is the da best')),5000)
//   }
// );  // cách 1

// const a = new Promise(
//   async function (resolve, reject){
//     await setTimeout( () => resolve(console.log('Promise is the da best')),5000)
//   }
// );  // cáhc 2

// const a = new Promise(
//   function (resolve, reject){
//     setTimeout(() => resolve('Promise is da best'), 5000)
//   }
// )
// a.then(alert);

// console.log('bai2');

// const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR2snABzbSs_RP07euJqNyfmTPbi6x5hjuf4LPfqCin2UJGwdZ9mcxa28aw');
// fetchPromise.then(connection => {
// console.log('Connected');
// console.log(connection);
// const data = connection.json();
// console.log(data);
// });

// console.log('bai4');

// function random(){
//   return Math.floor(Math.random()*11)
// };
// const x = random();
// console.log(x);
// if (x < 0) {
// console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
// console.log('Failed: the number is bigger than 10');
// } else {
// console.log('Passed, bravo');
// }

// console.log('bai5');

// function random(a, b) {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// const x = random(4, 16)
// console.log(x);
// if (x < 4) {
//   console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
//   console.log('Failed: the number is bigger than 16');
// } else {
//   console.log('Passed, bravo');
// };

// console.log('bai6');

// function range(x1,y1,x2,y2){
//   return Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)));
// }
// const d = range(3,10,0,6);
// if (d !== 5) {
//   console.log('Failed: the calculation is wrong');
//   } else {
//   console.log('Passed, bravo');
//   }

