// bigint max number = 2 to the power 53 - 1
// number max limit = 9007199254740991
// to check run this command  >> Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
const bigNum = 9007199254740991n; // convert any number to bigint by adding "n" at the end
// we can not add or subtract any number to bigint, we need to convert any number to bigint first
console.log(bigNum);
const num_01 = 1n;
const num_02 = 2n;
console.log(bigNum + num_01); // 9007199254740992n
console.log(bigNum + num_02); // 9007199254740993n