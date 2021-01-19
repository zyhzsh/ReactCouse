const users=[
    {name:"A",age:25},
    {name:"B",age:22},
    {name:"C",age:55},
];
//const modifiedUser=users.map(x=>x.age=0);
const filterUser=users.filter(x=>x.age>=25);

console.log(filterUser);