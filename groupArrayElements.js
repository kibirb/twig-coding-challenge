/**
 * This function takes in contents of an array divides it into N
 * equally sized arrays. Where the size of the original array cannot
 * be divided equally by N, the final part should have a length equal to the remainder.
 * and returns the result of the function in a response array
 *
 * @param array - Input array
 * @param newArrayLength - Number of result array items
 * @returns the result of the function in a response array
 *
 */
  
const groupArrayElements = (array, newArrayLength) => {
  const newArray = [];
  const arrayIsEquallyDivisible = array.length % newArrayLength === 0;
  const eualSizeArraysLength = Math.floor(array.length / newArrayLength);
  // Add equally divisible array elements to the new array
  for (let i = 0; i < array.length; i += eualSizeArraysLength) {
    if (
      arrayIsEquallyDivisible
        ? newArray.length === newArrayLength
        : newArray.length === newArrayLength - 1
    ) {
      break;
    } else {
      newArray.push(array.slice(i, i + eualSizeArraysLength));
    }
  }
  //Add the final remainder elemnent if not equally divisible
  if (!arrayIsEquallyDivisible) {
    const lastRemainderElementIndex = Array.prototype.concat.apply([], newArray).length;
    newArray.push(array.slice(lastRemainderElementIndex, array.length));
  }

  return newArray;
};

export default groupArrayElements;
