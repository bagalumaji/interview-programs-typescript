function reverse(s:string):string{
    let result = "";
    for(let i=s.length-1;i>=0;i--){
        result = result + s[i];
    }
    return result;
}

const s1="typescript";
console.log(reverse(s1));