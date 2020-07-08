// console.log('bai1');

// const container = document.getElementById('list');

// for ( let i = 0; i < 3; i++) {
// container.insertAdjacentHTML('beforebegin' , `<li>${i}</li>`)
// };  //in ra kq 0-1-2

// for ( let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('afterbegin' , `<li>${i}</li>`)
// };  // in ra kq 2-1-0

// for ( let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('beforeend' , `<li>${i}</li>`)
// };  // in ra kq  0-1-2

// for ( let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('afterend' , `<li>${i}</li>`)
// }; // in ra kq 2-1-0

// console.log('1-b, 2-a, 3-c, 4-d')


// console.log('bai2');

// function hello(){
//     console.log('Hello world')
// }
// setTimeout(hello, 3000);  //sau 3s in ra 
// setInterval(hello, 3000);  //cứ 3s lại in ra 1 lần

// console.log('bai3');

// function setup() {
//     var name = "Benjamin";
//   }
// setup();
// console.log(name);  // biến được khai báo bằng var trong 1 hàm sẽ không tồn tại nếu hàm chạy xong
 
// function whatname(){
//     let name = "Benjamin"  
// }
// whatname();
// console.log(name);  //biến được khai báo bằng let trong 1 hàm sẽ không tồn tại nếu hàm chạy xong

// console.log('bai4');

//  let x = document.getElementsByTagName("li")
// console.log(x)  
// console.log(x[1]);
// for( let i = 0; i < x.length; i++){
//     console.log(x[i]);
// };


// console.log('bai5');

// let x = document.getElementsByClassName('singer');
// console.log(x);
// console.log(x[1]);
// for ( let i = 0; i < x.length; i++){
//     console.log(x[i])
// }

// console.log('bai7');

// let btn1 = document.getElementById("button1");
// let btn2 = document.getElementById("button2");
// btn1.addEventListener("click", (e) => {
//   console.log(e.target);
// });
// btn2.addEventListener("click", (e) => {
//   console.log(e.target);
// });   //7.1

// document.getElementById('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
// });  //7.2


// console.log('bai8');
// function your() {
//     alert('my name is Quan, developer')
// }
// your();

// console.log('bai9');

// function you(name,wish) {
//     alert('Name :' + " " + name + '\n' + 'wish:' +" " + wish )
// }
// you('quan','soccer');

// console.log('bai10');

// function you(name,wish){
//     if ( wish == undefined){
//         alert('Name :' + " " + name);
//     }else{
//         alert('Name :' + " " + name + '\n' + 'wish:' +" " + wish )
//     }
// }
// you('quan', 'soccer');
// you('quan')

// console.log('bai11');

// let button = document.getElementById('upper_btn');
// console.log(button);  //11.1

// console.log(button.innerHTML);  //11.2

// button.addEventListener('click' , (e) => {
//     console.log(e.target)
// });  // 11.3

// let input = document.getElementById('name_input');
// console.log(input); // 11.4

// button.addEventListener("click", () => {
//   let userInput = input.value;
//   console.log(userInput.toUpperCase());
// });  //11.5 + 11.6

// let div = document.getElementById('result');
// console.log(div);  //11.7

// console.log(div.innerHTML.toUpperCase()); //11.8


console.log('bai12');

let item = ['Backpack', 'Miband Watch', 'Ring'];
console.log(item);