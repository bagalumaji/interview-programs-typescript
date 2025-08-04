export function removeDuplicatesFromArray(arr: number[]): number {
    let p1 = 0;
    let p2 = 1;
    while (p2 < arr.length) {
        if (arr[p1] !== arr[p2]) {
            p1++;
            arr[p1] = arr[p2];
        }
        p2++;
    }
    return p1+1;
}