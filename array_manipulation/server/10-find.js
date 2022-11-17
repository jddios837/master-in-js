const nums = [2,34,23,565,343,77,22];

console.log(nums.find(e => e === 333));

if(!nums.find(e => e === 3333)) {
    console.log("No lo encontro");
}

console.log(nums.findIndex(e => e === 22))

