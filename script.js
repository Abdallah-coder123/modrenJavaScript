
/** @deprecated */
{
    //Template literals
// let name='ali';
// console.log(`i am ${name} i have`);
//......//
const names3=["ali","kareem"];
// names3=["www","wwww"]
// console.log("n3",names3)
// // let names2=names3;
// names2=Object.assign([],names3);
// names3.push("wwww")
// console.log("names2",names2);
// console.log("names3",names3);

//////////////////////////////////////////////////////////
// const name=["ali","ahmed"];
// const names2=["dddd",...name]
// console.log(names2);

// const routeNumber=(...a)=>{
// console.log("this is value",...a)
// }
// routeNumber(...names2)
///////////////////////////////////////////////////////////
//names3.forEach(el=>
// {
// console.log(el)
// })

// const countries= [{name:"egypt",loc:"africa"}
// ,{name:"ksa",loc:"asia"},
// {name:"uk",loc:"eurpe"}
// ]
// countries.forEach((el,index)=>{
// if(el.name==='egypt')
// console.log(index)
// })

//////////////////////////////////////////OBJECT/////////////////////////////
// const user={name:'ali',age:22,address:'irbid'};
// Object.keys(user).forEach(el=>{
//     console.log(`${el}: ${user[el]}`);
// })

// const users={1:{name:'ali',age:22,address:'irbid'},2:{name:'abood',age:22,address:'amman'}};

// Object.keys(users).forEach(el=>{
//     console.log(`${el}: ${users[el].name} ${users[el].age}`)
// })

// Object.values(users).forEach(el=>{
//    // console.log(el.name)
//    console.log(el);
// })
///////////////////////////////////////////Map/////////////////////////////////////////////////////
// const numbers=[10,21,30,45];
// const newNm=numbers.map(el=>el%2===0 ?el*2:el);
// console.log(newNm);

// const users=[{name:"ali",age:23},{name:"amr",age:34},{name:"khalid",age:27}];
// const newUser=users.map(({name,age})=> name)
// console.log(newUser);

// const user={1:{name:"ali",age:23},2:{name:"amr",age:34},3:{name:"khalid",age:27}}
// //const newNames=Object.keys(user).map((el=>user[el].name))
// const newNames=Object.values(user).map(({name})=>name);
// const newNames=Object.values(user).map((a)=>a)
// console.log(newNames)
/////////////////////////////////////////////////Filter///////////////////////////////////////////////////
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=numbers.filter(el=>el>5);
// const newnum=numbers.filter(el=>el!==5);
// console.log(newnum);

// const user=[{name:"ali",age:23},{name:"amr",age:34},{name:"khalid",age:27}];
// const newNum=user.filter(({name,age})=>age>26 && name=="amr")
// console.log(newNum);
///////////////////////////////////////////////////////////////////////////////////////////REVIEW//////////////////////////////
// const  compare=(a,b)=>{
//     const agea=a.age;
//   //  console.log("agea",agea)
//     const ageb=b.age;
//    // console.log("ageb",ageb);
//     return ageb-agea;
//   //  console.log(a)
// }
// const names=[
//     {name:"ali",age:30},
//     {name:"amr",age:33},
//     {name:"khaled",age:80},
//     {name:"mona",age:20},
//     {name:"nour",age:40},
//     {name:"hassan",age:37},
//     {name:"ahmed",age:47},
//     {name:"abdallah",age:22},
//     {name:"karim",age:47},
//     {name:"karem",age:52},
// ]
// const newNames=names.sort(compare).
// slice(0,7).
// filter(({age})=>age > 27).
// // map(el=>el.name==="karim"?{name:"kareem",age:el.age}:el);
// map(el=>el.name==="karim"?{...el,name:"kareem"}:el);
// console.log(newNames);
/////////////////////////////////////////////////////////////////Include///////////////////////////
const names=["kareem","ali","farah","reem","kareem"];
// console.log(names.includes("kareem"));
const name="kareem";
//search filter
const newName=names.filter(el=>el.includes("ee"));
console.log(newName);
 }