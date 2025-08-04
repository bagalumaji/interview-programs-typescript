import {sortNumbers} from "./sort-numbers";
import {removeDuplicatesFromArray} from "./remove-duplicates-from-array";

let arr: number[] = [3, 1, 2, 1, 2, 5, 4, 3, 6]

arr = sortNumbers(arr)

console.log("after sorting")
console.log(arr);

let len = removeDuplicatesFromArray(arr)
console.log("after removing duplicates")
for (let i = 0; i < len; i++) {
    console.log(arr[i]);
}

