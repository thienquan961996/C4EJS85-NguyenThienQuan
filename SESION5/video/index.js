// const s = 'Bo em hut rat nhieu thuoc. Me em nuoc mat le nhoa';
// const countdata = {};
// for ( let i = 0; i < s.length; i++){
//     const c = s[i].toLowerCase();
//     console.log(c);

// if (countdata[c]){
//     countdata[c] ++;
// }else {
//     countdata[c] = 1;
// }

// }
// console.log(countdata);

// const movies = [
//     {
//         title : 'The Dark Knight',
//         rate : 8.5,
//         genre : 'Action',
//      },
//     {
//         title: 'Me before you',
//         rate: 8,
//         genre: 'Romance'
//     },
//     {
//         title: 'Attack on Titan',
//         rate: 8.4,
//         genre: 'Anime',
//     },
//     {
//         title: 'Terminato',
//         rate: 8.2,
//         genre: 'Action'
//     },
//     {
//         title: 'The diary',
//         rate: 8,
//         genre: 'Romance',
//     }
// ];

// const moviesBygroup = {
//     "Action" :[],
//     "Romance": [],
//     "Anime":[],
// };

// for ( let i = 0; i < movies.length; i++){
//     const movie = movies[i];
//     console.log(movie);
//     const genre = movie.genre;
//     console.log(genre);
//     moviesBygroup[genre].push(movie);
// }
// console.log(moviesBygroup);


// let a = Math.random();
// console.log(a);

// let arr = [ 2, 5, 6, 9, 10];
// let randomarr = arr[Math.floor(arr.length*Math.random())];
// console.log(randomarr);

// console.log('basic1');

// let First = {
//    question: ' Which fictional detective lived at 221b Baker Street? ' ,
//    choice: ['1.Watson', '2.Sam Spade', '3.Scubidu', '4.Shelock Home'],
//    rightchoice: '4',
// }

// let Second = {
//     question:' What sweet food made by bees using nectar from flowers? ',
//     choice: ['1.Bread', '2.Honey', '3.Sugar', '4.Potent'],
//     rightchoice: '2',
// };

// let Three = {
//     question: 'How many legs do an optopus has? ',
//     choice: ['1. 4 legs', '2. no legs', '3. 8 legs', '4. 2 legs'],
//     rightchoice: '1'
// }

// let Four = {
//     question: 'Which country is home to the kangaroo? ',
//     choice: ['1.Australia', '2.Autria', '3.New Zealand', '4.US'],
//     rightchoice:'1',
// }
// let questions = [First, Second, Three, Four];

// let random = questions[Math.floor(questions.length*Math.random())];
// console.log(random);

// let score = 0;
// let userChoice1 = prompt(questions[0]['question'] + "\n" + questions[0]['choice'].join('\n'));
// if (userChoice1 == 4) {
//     alert('good luck next time');
//     score++;
// }else {
//     alert('wrong answer');
// };
// let userChoice2 = prompt(questions[1]['question'] + '\n' + questions[1]['choice'].join('\n'));
// if ( userChoice2 == 2) {
//     alert('bravo');
//     score++;
// }else {
//     alert('wrong answer');
// };
// let userChoice3 = prompt(questions[2]['question'] + '\n' + questions[1]['choice'].join('\n'));
// if ( userChoice3 == 1) {
//     alert('good luck next time');
//     score++;
// }else {
//     alert('wrong answer');
// };
// let userChoice4 = prompt(questions[3]['question'] + '\n' + questions[3]['choice'].join('\n'));
// if ( userChoice4 == 1) {
//     alert('good');
//     score++
// }else {
//     alert('wrong answer');
// };
// alert('we are out of questions :(');
// alert('you answered correctly ' + " " + score + " " + 'out of' + " " + questions.length + " " + 'questions');
   // basic 1 (5+6+7)



// console.log('basic 2 là câu 15 SESION4');

// console.log('basic 3');

// const words = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// const count = {};
// for ( let i = 0; i < words.length; i++){
//     if (count[words[i]]){
//         count[words[i]] ++;
//     }else {
//     count[words[i]] = 1;
// } 
// } 
// for ( let x in count){
//     console.log(x + ":" + "" + count[x]);
// };

// const inventory = [
//     {
//     name: 'HP Envy 13aq',
//     price: 21000,
//     brand: 'HP',
//     quantity: 5,
//     },
//     {
//     name: 'Dell XPS 9370',
//     price: 30000,
//     brand: 'Dell',
//     quantity: 1,
//     },
//     {
//     name: 'Dell Inspiron 3567',
//     price: 9300,
//     brand: 'Dell',
//     quantity: 12,
//     },
//     {
//     name: 'Dell Latitude E5450',
//     price: 8600,
//     brand: 'Dell',
//     quantity: 2,
//     },
//     {
//     name: 'Asus Zenbook',
//     brand: 'Asus',
//     price: 20000,
//     quantity: 4,
//     },
//     {
//     name: 'HP Pavilion',
//     brand: 'HP',
//     price: 14000,
//     quantity: 7,
//     }
// ];
// let inventoryByBrand = {
//     "HP":[],
//     "Asus":[],
//     "Dell":[],
// };
// for ( let i = 0; i < inventory.length; i++){
//     const inventorys = inventory[i];
//     console.log(inventorys);
//     const brand = inventorys.brand;
//     inventoryByBrand[brand].push(inventorys);
// }
// console.log(inventoryByBrand);

// let n = prompt('nhap');
// let cat =[];
// for ( let i = 0; i <inventory.length; i++){
//     if (n == inventory[i].brand){
//         cat.push(inventory[i])
//     }
// }
// for ( let i=0; i< inventory.length; i++){
//        alert('There are' + " "  + cat.length + " " + 'generations of' + " " + "'" +n +"'"+ " " + 'inventory ');

// }   // đang xem xét

