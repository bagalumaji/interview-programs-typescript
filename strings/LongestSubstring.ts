export function longestSubstring(str: string): number {
    let i = 0, max = 0;
    const set = new Set<string>();
    for (let j = 0; j < str.length; j++) {
        while (set.has(str[j])) {
            set.delete(str[i]);
            i++;
        }
        set.add(str[j]);
        max = Math.max(max, set.size)
    }
    return max;

}