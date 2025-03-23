function getCharacterCount(s:string):Map<string,number>{
    const map:Map<string,number> = new Map<string,number>();
    for(let v of s){
        console.log(s);
        map.set(v,(map.get(v)||0)+1);
    }
    return map;
}
const s3 = "automation";
console.log(getCharacterCount(s3));
