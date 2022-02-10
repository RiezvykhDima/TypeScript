interface A<T> {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: T;
}

const arrays = ['1', '2', '3', '4', '5', '6'];

function f<T>(array: T[], _item: T): T | undefined {
  return array.find((item: T) => item === _item);
}

const result = f<string>(arrays, '8');

console.log(result);
