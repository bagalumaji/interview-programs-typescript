function countTriple(str:string):number{
    let count=0;
    for(let i=0;i<str.length-2;i++){
        const ch= str.charAt(i);
        if(ch=== str.charAt(i+1) && ch === str.charAt(i+2)){
            count++;
        }
    }
    return count;
}

console.log(countTriple("aaabcdddeee"));
