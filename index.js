// {
//     const v1 = "string1"
//     {
//         console.log("v1 ",v1)
//         const v2 = "string2"
//         console.log("v2 ",v2)
//     }
//     console.log("v1 ", v1)
// }


// {
//     let v1 = "string1"
//     {
//         console.log("v1 ",v1)
//        let v2 = "string2"
//         console.log("v2 ",v2)
//     }
//     console.log("v1 ", v1)
// }

// {
//         var v1 = "string1"
//         console.log("v1 ", v1)
//         {
//             console.log("v1 ",v1)
//            var v1 = "string2"
//             console.log("v1 ",v1)
//         }
//         console.log("v1 ", v1)
//     }





// let a = 20;
// let b = 30;
// let c = 35;
// if(a > b && a > c){
//     console.log('a is greater than b')
// }
// else if(b > c){
// console.log('b is greater')
// }
// else
// console.log('c is greater')
// let day = "sunday"
// switch (day) {
//     case 'monday':
//         console.log('case 1 = today is monday')
//         break;
//         case 'tuesday':
//             console.log('case 2 = today is monday')
//             break;
//             case 'sunday':
//                 console.log(' case 3 = today is monday')
//                 break;

//     default:
//         console.log('not exist')
//         break;
// }


// type conversion

// let a = false && "dog"
// console.log(a)

// let a = [] && "dog"
// console.log(a)

// let a = " " && "dog"
// console.log(a)

// pass by value
// let x = 10;
// let y = 20;
// function fun(a,b){
// let c = a+b;
// console.log(c)
// }

// fun(x , y)
// x = 40;
// console.log(x)


// pass by refrence
// function fun(a){
//     let arr2 = a;
   
//   return arr2
// }
// let arr = [10,20,30];
// let arr2 = fun(arr)
// arr2[0] = 2000;
// console.log('arr1 ', arr)
// console.log('arr2 ', arr2)



// Callback function, passed as a parameter in the higher order function
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//  func()
// }

//   higherOrderFunction(callbackFunction);



let obj = [{
    id:101,
    name:'idrees',
    gender: 'male',
    obj:{
        course:'mern',
        time: 9
    }

},
{
    id:101,
    name:'idrees',
    gender: 'male',
    obj:[{
        course:'mern',
        time: 9
    },
{
    course:'cyber',
    time: 10   
}]
}]

console.log(obj[0].obj.course)