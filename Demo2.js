/*Array Destructuring
let arr=[10,20,30];
let [a,b,c]=arr;
console.log(a)
console.log(b)
console.log(c)

//Object Destructuring
let stu={na:"Abu",city:"chennai"}
let{na:a,city:b}=stu;
console.log(a);
console.log(b);
*/
///SetInterval
console.log("Process1");
setTimeout(()=>{
    console.log("Process2");
    setTimeout(()=>{
        console.log("process3");
       console.log("process4")
    },2000);
},2000);
