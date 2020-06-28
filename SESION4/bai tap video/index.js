// let person = ['Nam', 19, 'HaNoi', 25, false];
// console.log(person);

// let person = {};
// console.log(person);

// let person = { 
//      name : 'Nam'
// };
// console.log(person);

// let person = {
//      name: 'Nam',
//      age: 19,

// };
// console.log(person);
// console.log(person.age);
// let prop = 'age';
// console.log(person['name']);

// console.log(person.name);
// person.name = 'Nguyễn Phương Nam';
// console.log(person.name);
// console.log(person);
// console.log(person['age']);
// person['age'] = 18
// console.log(person['age']);
// person.age++
// console.log(person.age);

// person.location = 'ha noi';
// console.log(person);

// delete person.age;
// // console.log(person);

// let person1 = {
//      name: 'nam',
//      age : 18,
// };
// let person2 = {
//      name : 'duc',
//      age : 24,
// };

// let personArr = [];
// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);

// console.log(personArr[0]);

// let p = personArr[0];
// console.log(p);
// console.log(p.name);

// console.log(personArr[0].name);
// let n = personArr[0].name;
// console.log(n);

// for ( let i = 0; i<personArr.length; i++){
//      console.log(personArr[i]);
//      console.log(personArr[i].age);
// }

// let person = {
//      name: 'Nam',
//      age: 18,
//      favs: ['Netflix', 'Cafe', 'Code'],
// }
// console.log(person.favs[1]);
// let favs = person.favs;
// console.log(favs);
// for (let i = 0; i < favs.length; i++){
//      console.log(favs[i]);
// }
// favs.push('Macbook');
// console.log(favs);
// console.log(person);



// console.log("bài tập");

// let phim = {
//      name: 'The dark night rises',
//      year: 2012,
//      rate: 8.4,
// };
// console.log(phim);  // tạo 1 Object

// console.log(phim.name);
// console.log(phim.year);
// console.log(phim.rate);  // cách 1

// console.log(phim['name']);
// console.log(phim['year']);
// console.log(phim['rate']);  // cách 2

// console.log(phim.director);


// let like = ['sport', 'girl', 'game',];

// like.push('jav');
// console.log(like);

// for ( let i=0; i<4; i++){
//      if (i!=1)

//      console.log(like[i].toUpperCase());
// };                           // bài tập ôn lại

// let item = ['name', 'year', 'rate'];
// let n = prompt('What do you want to know?');
// if ( n == item[0]){
//      alert(phim.name);
// }else if ( n == item[1]){
//      alert(phim.year);
// }else if ( n == item[2]){
//      alert(phim.rate);
// }else {
//      alert( n + " " + 'does not exist in our data');
// }        // kiểm tra thuộc tính có tồn tại hay không


// phim.rate = phim.rate + 0.3;
// console.log(phim.rate);
// phim.rate = phim.rate + 0.5;
// console.log(phim.rate); //  update

// let item = ['name', 'year', 'rate'];
// while (true){
//      let n = prompt('What do you want to update?');
//      if ( n == item[0]){
//           let newName = prompt('What is update');
//           phim.name = newName;
//           console.log(phim);
//      }else if ( n == item[1]){
//           let newYear = prompt('What is update');
//           phim.year = newYear;
//           console.log(phim);
//      }else if ( n == item[2]){
//           let newRate = prompt('What is update');
//           phim.rate = newRate;
//           console.log(phim);
//      }else{
//           break;
//      }
// }                     // update theo người dùng nhập


// let item = ['name', 'year', 'rate'];
// let n = prompt('What do you want to update ');
// if (n == item[0]) 
// {
//      console.log(phim.name);

// } else if (n == item[1]) 
// {
//      console.log(phim.year);

// } else if (n == item[2]) 
// {
//      console.log(phim.rate);

// } else if (n != item) {
//      alert( n + " " + 'does not exist in our data, we will add new');
//      let x = prompt('Enter the new data');
//      phim[n] = x;
//      console.log(phim);

// }         thêm 1 mục mới 


// let phim1 = {
//      name: 'Spider-man',
//      year: 2014,
//      rate: 6.6,
// }
// let phim2= {
//      name: '50 sắc thái',
//      year: 2015,
//      rate: 8.5,
// }
// let phim3 = {
//      name: 'F&F 8',
//      year: 2017,
//      rate: 9,
// }
// let phim = [];
// phim.push(phim1);
// phim.push(phim2);
// phim.push(phim3);
// console.log(phim);

// console.log(phim[0]);
// console.log(phim[2].name);

// for ( let i = 0; i<phim.length; i++){
//      console.log(phim[i]);
// }

// for ( let i=0; i<phim.length; i++){
//      console.log(phim[i].name);
//      console.log('year : ' + "" + phim[i].year);
//      console.log('rate : ' + "" + phim[i].rate);
//      console.log('---------------------')
// }

// phim3.rate = phim3.rate + 0.7;
// console.log(phim3);       // tạo 3 phim
 
// let phim1 = {
//       name: 'Spider-man',
//       year: 2014,
//       rate: 6.6,
//       cast: ['Andrew', 'Emma', 'Jamie']
//           };
// let phim2 = {
//      name: '50 sắc thái',
//       year: 2015,
//       rate: 8.5,
//       cast: ['Dakota', 'Jamie', 'Luke']
//  };
//  let phim3= {
//       name: 'Attack on Titans',
//       year: 2013,
//       rate: 8.8,
//       cast: ['Eren', 'Armin', 'Misaka']
//  };
// let phim = [phim1, phim2, phim3];
// console.log(phim);

// for (let i =0; i < phim.length; i++){
//      console.log(phim[i].name);
//      console.log('year :' + "" + phim[i].year);
//      console.log('rate :' + "" + phim[i].rate);
//      console.log('cast :' + "" + phim[i].cast);  // in ra theo hình
// }
// let cast = phim3.cast;
// cast.push('Levi');
// console.log(phim3.name);
// console.log('year :' + '' + phim3.year);
// console.log('rate :' + '' + phim3.rate);
// console.log('cast :' + '' + phim3.cast);  // thêm tên và in

//  for ( let i=0; i<phim.length; i++){
//       console.log(phim[i].name);
//       console.log('year : ' + "" + phim[i].year);
//       console.log('rate : ' + "" + phim[i].rate);
//       console.log('cast :' + '' + phim[i].cast);
//       console.log('---------------------')
//  }  // in ra theo hình



