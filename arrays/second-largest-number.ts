function getSecondLargestNumber(arr){
        let max1 = arr[0];
        let max2 = arr[0];
        for(let val of arr){
            if(val > max1){
                max2 = max1;
                max1 = val;
            }else if( val > max2 && val !==max1){
                max2 = val;
            }
        }
        console.log(max1,max2);
}

const n = [8,1,3,4,3,5,6,5,6];

getSecondLargestNumber(n);