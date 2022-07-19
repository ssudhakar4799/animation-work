var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var length = array.length;
// console.log(length);
// var intex=array[8];
// console.log(intex);

// for(i=0;i<length;i++){
//     // console.log(i);
//     console.log(array[i]);
// }

// for(let i of array){
//     console.log(i);
// }
// for(let i in array){
//     console.log(i);
// }

// var total=0;
// for(i=0;i<=length;i++){
//      total+= i;
//     console.log(total);
// }
// var avg=total/10;
// console.log(avg);

// var person={
//     name:'sudhakar',
//     fathersname:'sankar',
//     age:22,
//     members:{
//         brothers:2,
//         sisters:2,
//     }
// }

// var person =[
//     {name: 'sudhakar'},
//     {fathersname: 'sankar'},
//     {age: 22},
//     {brothers: 2},
//     {sisters: 2},

// ]
// var length=person.length;
// for(i=0;i<=length;i++){
//     console.log(person[i].fathersname);
// }
//array.forEach((e,intex)=>{console.log(e,intex);})

array.forEach(add);
function add() {
    for(i=0;i<length;i++){
        console.log(array[i]);

    }
    
}

