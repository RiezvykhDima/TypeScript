const arrays = ['1', '2', '3', '4', '5', '6'];
function f(array, _item) {
  return array.find((item) => item === _item);
}
const result = f(arrays, '8');
console.log(result);
