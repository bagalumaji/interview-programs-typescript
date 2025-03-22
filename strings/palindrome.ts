function isPalindrome(str:string):boolean{
    let start=0;
    let end=str.length-1;
    while(start<end){
        if(str[start]!=str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const s3 = "aba";
console.log(isPalindrome(s3));
