/*
let arr=["apple", "banana", "cherry"];
console.log(arr);
console.log(arr.toString());

//push function to add element at the end
arr.push("date");
console.log(arr); 

//unshift function to add element at the beginning  
arr.unshift("avocado");
console.log(arr);

//pop function to remove element at the end
arr.pop();
console.log(arr);   

//shift function to remove element at the beginning
arr.shift();
console.log(arr);

//delete function to remove specific element
delete arr[1];
console.log(arr);

//splice function to remove element at specific index
arr.splice(0, 1);
console.log(arr);
arr.splice(0, 0, "kiwi", "mango");
console.log(arr);
*/



/*
let mob={brand:"Samsung",color:"Black"}
console.log(mob)
//add new key,value pair
mob.price=35000
console.log(mob)

//update
mob.price=45000
console.log(mob)

//---
console.log(mob.color)
console.log(mob["brand"])

delete mob.brand
console.log(mob)

delete mob["color"]
console.log(mob)
*/
/*
//----------------------------------------------------------------------------------------------------
let student={sna:"Praveen",age:18,demo:function()
{
    console.log("Hai Iam"+this.sna)          //o/p:Paraveen
}
}
student.demo()

//------------------------------------------------------------------------------------------------------

let student2={sna:"prabhu",age:18,samp:()=>
{
    console.log("Hai Iam"+this.sna)           //o/p:undefined
}

}
student2.samp()

//------------------------------------------
*/
/*
let student=[{sna:"Praveen",age:19,sma:90,fee:true},
            {sna:"Prabhu",age:18,sma:100,fee:false},
            {sna:"Shiva",age:19,sma:80,fee:true}

]
//console.log(student)
student.forEach((stu)=>
{
    //console.log(stu)
    console.log(stu.sna+" "+stu.sma)
})

let student=[{sna:"Praveen",age:19,sma:90,fee:true},
            {sna:"Prabhu",age:18,sma:100,fee:false},
            {sna:"Shiva",age:19,sma:80,fee:true}

]
let newStu=student.map((stu)=>
{
    return {na:stu.sna,ma:stu.sma+2}
})
console.log(newStu)


//every function to check if all students have paid fee
let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:true},
{name:"Mike", age:21, fee:true}
]

//every function..
let res=student.every((stu)=>{
    
    return stu.fee==true;
});
console.log(res);

//some function to check if at least one student has paid fee
let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:false},
{name:"Mike", age:21, fee:true}
]

//some function 
let res=student.some((stu)=>{
    
    return stu.fee===true;
});
console.log(res);
*/

let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:false},
{name:"Mike", age:21, fee:true}
]

//filter function to get students older than 20
let res=student.filter((stu)=>{
    
    return stu.age>20;
});
console.log(res);