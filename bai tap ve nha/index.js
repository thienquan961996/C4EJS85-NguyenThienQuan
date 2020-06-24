// console.log('bai1')
// console.log('trao đổi biến cách thứ nhất :')

// let a = 5;
//     b = 6;
//     c = 0;
//     c = a;
//     a = b;
//     b = c;
// console.log(a,b);

// console.log('trao đổi biến cách thứ 2');

// [a,b]=[b,a];
// console.log(a,b);

// console.log("bai2");
// console.log('Split String into Array');

// const s = 'bài tập hôm nay nhiều quá';
// let n = s.split(" ");
// console.log(n);

// console.log("bai3");

// const x = [ 9, 6, 1996];
// console.log(...x);


// console.log("bai4");

// let items = ['Jeans', 'T-Shirt', 'Socks'];
// console.log(items);
// let choiceSystem = ['c', 'r', 'u', 'd'];
// while (true){
//     let n = prompt('Hi there, welcome to shop admin panel!, what do you want (C, R, U, D)');
//     if ( n == choiceSystem[1])
// {
// console.log('the current item are :');
// for (let i = 0; i < items.length; i++)
//     {
//  console.log(items[i]);
//     }
//     break;
// }else if ( n == choiceSystem[0])
// {
//     let newIteam = prompt('Enter the name of the newitem');
//     items = items.push(newIteam);
//     alert('Done');
//     console.log(items);
// }else if ( n == choiceSystem[2])
// {
//     let vitri =prompt('Enter the position you want you want to update');
//     let newName = prompt ('Enter the new name');
//     items[vitri] = newName;
//     alert('Done');
//     console.log(items);
// }else if ( n == choiceSystem[3])
// {
//     let vitri = prompt('Enter the position you want to delete');
//     items.splice(vitri, 1);
//     alert('Done');
//     console.log(items);
// }else
// {
//     alert('This command is not supported');
// }
    
// }

// console.log("bai5");

// let n = prompt('nhap vao 1 day so')
// let num = n.split(',');
// let sum = 0;
// for( let i = 0; i < num.length; i++){
//     sum += Number(num[i]);
// };
// alert('tong cua day so la ' + " " + sum);

// console.log("bai6");

// let num = prompt('nhap vao day so   ').split(",");


// let minInNumber = Math.min.apply(Math, num);
// alert('so nho nhat la' + " " + minInNumber);

// console.log("bai7");

// const arr = [3, 4, 6, -9, 10, -88, 2];
// n = prompt('nhap vao 1 so bat ki');
// if (arr.indexOf(Number(n)) == -1  ){
//     alert(n + " " + 'is not found')
// }
// else {
//     alert(n + " " + 'is found at index ' + " " + arr.indexOf(Number(n)));
// }

// console.log("bai8.1");

// let n = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
// console.log(...n);

// console.log('bai8.2');
// let maxSize = Math.max.apply(Math, n);
// console.log('Now my biggest sheep has size' + ' ' + maxSize + ", let's shave it");

// console.log('bai8.3');
// n[n.indexOf(maxSize)] = 8;
// console.log('After shearing, here is my flock:');
// console.log(...n);

// console.log('bai8.4');
// n = n.map( x => x + 50);
// console.log('MONTH 1\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...n);

// console.log('bai8.5');
// let maxSize1 = Math.max.apply(Math, n);
// console.log('Now my biggest sheep has size' + ' ' + maxSize1 + ", let's shave it");

// n[n.indexOf(maxSize1)] = 8;
// console.log('After shearing, here is my flock:');
// console.log(...n);

// n = n.map( x => x + 50);
// console.log('MONTH 2\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...n);

// let maxSize2 = Math.max.apply(Math, n);
// console.log('Now my biggest sheep has size' + ' ' + maxSize2 + ", let's shave it");

// n[n.indexOf(maxSize2)] = 8;
// console.log('After shearing, here is my flock:');
// console.log(...n);

// n = n.map( x => x + 50);
// console.log('MONTH 3\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...n);

// console.log('bai8.6');
// const sum = (accumulator , currentValue) => accumulator +   currentValue;
// console.log('My flock has size in total:' + " " + n.reduce(sum));

// console.log("I would get " + n.reduce(sum) + " * 2$ " + " = " + n.reduce(sum)*2);

