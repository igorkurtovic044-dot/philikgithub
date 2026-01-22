let arr = [1, 2, 8, 4, 5];
let temparr = [0]

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > temparr[0]) {
        temparr.pop();
        temparr.push(arr[index])
    }

}
console.log(temparr)