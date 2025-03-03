function reverseString(s:string):string{
    return s.split("").reverse().join("").toString();
}

const s="typescript";
console.log(reverseString(s));