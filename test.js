function findCommon(arr1, arr2){

  const common = arr1.filter(num => arr2.includes(num))

  return common
}

console.log(findCommon([7, 8, 9], [9, 10, 11])); // [9]
console.log(findCommon([1, 2, 3], [2, 3, 4]));   // [2, 3]









