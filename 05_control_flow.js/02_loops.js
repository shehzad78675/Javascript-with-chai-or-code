const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

const map = new Map();

map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("USA", "United states of America");

for(const [key, value] of map){
    // console.log(key, ":-", value);
}

// map is not iteratable
for(const key in map){
    console.log(key);
}


const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// Not work this iterator on this objects
// for(const [key, value] of map){
//     console.log(key, ":-", value);
// }

const newObj = {
    js: "javascript",
    cpp: "C++",
    rb: "rube",
    swift: "swift by apple"
}

for(const key in newObj){
    console.log(newObj[key]);
}

const programming = ["js", "rb", "py", "java"];

for(const key in programming){
    console.log(programming[key]);
}


programming.forEach(function (item){
    console.log(item);
});

programming.forEach((item) => {
    console.log(item);
});

function printMe(item){
    console.log(item);
}

programming.forEach(printMe);

programming.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
