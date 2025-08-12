import { reverseString } from "./reverse-string.ts"

const str = "sharannya bagal pandharpur";

export function reverseStringWithCondition(str:string):string{
    let result = "";
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if(i%2 ===0){
            result+=reverseString(words[i])+" ";
        }
        else{
            result += words[i].substring(1,words[i].length-1)+" ";
        }
    }
    return result;
}

console.log(reverseStringWithCondition(str));