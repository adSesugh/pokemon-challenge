export function mergeArraysWithoutDuplicates<T>(arr1: T[], arr2: T[]): T[] {
    console.log("arr", arr1, arr2)
    return Array.from(new Set([...arr1, ...arr2]));
}