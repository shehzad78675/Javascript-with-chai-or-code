const myNum = [1,2,3,4,5,6,7,8];

const newNum = myNum.filter((item) => item > 4);
console.log(newNum);

const newNums = myNum.filter((item) => {
    return item > 4
});
console.log(newNums);


const nums = [];
myNum.forEach((num) => {
    if(num > 4){
        nums.push(num);
    }
});

const myNumbers = myNum.map((num) => num + 10);
console.log(myNumbers);