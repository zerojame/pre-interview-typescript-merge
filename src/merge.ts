export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let i = collection1.length - 1;
    let j = 0;
    let k = 0;

    const result: number[] = [];

    while (i >= 0 || j < collection2.length || k < collection3.length) {
        const value1 = i >= 0 ? collection1[i] : Infinity;
        const value2 = j < collection2.length ? collection2[j] : Infinity;
        const value3 = k < collection3.length ? collection3[k] : Infinity;

        let min = value1;
        if (value2 < min) {
            min = value2;
            j++;
        }
        if (value3 < min) {
            min = value3;
            k++;
        }

        result.push(min);

        if (min === value1) {
            i--;
        }
    }

    return result;
}