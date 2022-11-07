/**
 * async await 错误捕获
 */
const to = promise => {
  return promise
    .then(data => data)
    .catch(err => err);
};
export { to };
