/**
 * This function takes in contents of an array divides it into N
 * equally sized arrays. Where the size of the original array cannot
 * be divided equally by N, the final part should have a length equal to the remainder.
 * and returns the result of the function in a response array
 *
 *
 * @param array - Input array
 * @param numberOfDivisions - Number of result array items
 * @returns the result of the function in a response array
 *
 *
 */  
const groupArrayElements = (array, numberOfDivisions) => {
    const rounded = Math.ceil(array.length / numberOfDivisions);
    const remainder = array.length % numberOfDivisions;
    const resultArray = [];
    let increment = 0;
    while (increment < array.length) {
      const sliceTo = increment !== rounded * (array.length - numberOfDivisions)
          ? increment + rounded
          : increment + remainder;
      resultArray.push(array.slice(increment, sliceTo));
      increment = sliceTo;
    }

    return resultArray;
  };
  
export default groupArrayElements;
