import { merge } from "./merge";

function main() {
    const collection1: number[] = [10, 7, 4];
    const collection2: number[] = [1, 3, 5];
    const collection3: number[] = [0, 2, 8];
    console.log(merge(collection1, collection2, collection3));
}

main();
