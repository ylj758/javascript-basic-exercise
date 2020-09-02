export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array == null) throw new Error('Flatten undefined or null array');
  const result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((ele) => {
        result.push(ele);
      });
    } else {
      result.push(element);
    }
  });
  return result;
  // throw new Error('Please delete this line and implement the function');
}
