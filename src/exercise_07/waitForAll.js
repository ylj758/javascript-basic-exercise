import { resolvePlugin } from '@babel/core';

export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((promise) => {
    if (!(promise instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });

  return new Promise((resolve, reject) => {
    Promise.all(promises.map(promise => promise.catch(() => reject)))
      .then((res) => {
        res.forEach((r) => {
          if (r) r();
        });
        resolve();
      }).catch(() => {
        reject();
      });
  });

  // throw new Error('Please delete this line and implement the function');
}
