function reverseStringWithPreservingSpaces(s:string){
    const str:string[]=s.split("");
    let start = 0;
    let end = str.length-1;
    while(start<end){
        if(str[start]!=' ' && str[end]!=' '){
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }else if(str[start] == " "){
            start++;
        }else if(str[end]==" "){
            end--;
        }
    }
    return str.join("").toString();
}

const str="welcome to automation testing";
console.log(reverseStringWithPreservingSpaces(str));