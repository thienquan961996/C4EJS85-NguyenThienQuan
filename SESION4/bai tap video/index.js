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


const data = {
    total_results: 3,
    results: [
        {
            popularity: 512.119,
            vote_count: 460,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
            original_language: "en",
            original_title: "Joker",
            genres: [
                80,
                18,
                53
            ],
            title: "Joker",
            vote_average: 8.8,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            release_date: "2019-10-04"
        },
        {
            popularity: 241.402,
            vote_count: 598,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
            id: 429203,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
            original_language: "en",
            original_title: "The Old Man & the Gun",
            genres: [
                35,
                80,
                18
            ],
            title: "The Old Man & the Gun",
            vote_average: 6.3,
            overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
            release_date: "2018-09-28"
        },
        {
            popularity: 233.735,
            vote_count: 4139,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
            id: 429617,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
            original_language: "en",
            original_title: "Spider-Man: Far from Home",
            genres: [
                28,
                12,
                878
            ],
            title: "Spider-Man: Far from Home",
            vote_average: 7.6,
            overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            release_date: "2019-07-02"
        },
        {
            popularity: 158.333,
            vote_count: 323,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
            id: 522938,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
            original_language: "en",
            original_title: "Rambo: Last Blood",
            genres: [
                28,
                53
            ],
            title: "Rambo: Last Blood",
            vote_average: 6.1,
            overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
            release_date: "2019-09-20"
        },
    ]
}


// console.log(data.results.length);  // in số lượng phim
// console.log(data.results[0]);   // in dữ liệu phim đầu tiên
// console.log(data.results[0].title);
// console.log(data.results[0].vote_average);
// console.log(...data.results[0].genres);
// console.log('-------------------------------');  //  in thông tin phim đầu tiên

// for (let i = 0; i < data.results.length; i++){
//     console.log(data.results[i].title);
//     console.log(data.results[i].vote_average);
//     console.log(...data.results[i].genres);
//     console.log('-------------------------------');
// };          //  in tất cả phim

// let genre = prompt('Enter genres of movies to search: ');
// let genreScript = Number(genre);

// for(let i = 0; i<data.results.length; i++)
// {
//     if(data.results[i].genres.includes(genreScript))
//     {
//         console.log(data.results[i].title);
//     }
//     else 
//     {
//         alert('Cannot find any genre that match in objects');
//         break;
//     }
// }   // in ra phim theo thể loại người dùng nhập

//  let minRate = Number(prompt('Enter minimum rate to search: '));
 
//  for (let i=0; i<data.results.length; i++)
//  {
//      if(data.results[i].vote_average >= minRate)

//      {
//          console.log(data.results[i].title);
//          console.log(data.results[i].vote_average);
//      }
//      else
//      {
//         alert('Cannot find any movies that match requirement in objects');
//         break;
//      }
//  }  // in ra phim theo tỉ lệ người dùng nhập
