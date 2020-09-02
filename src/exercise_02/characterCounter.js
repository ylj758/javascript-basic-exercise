export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string == null || string === '') return 0;
  if (prediction) {
    let count = 0;
    Object.values(string.split('')).forEach((value) => {
      if (prediction(value)) {
        count += 1;
      }
    });
    return count;
  }
  return string.length;
  // throw new Error('Please delete this line and implement the function');
}
