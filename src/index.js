// @flow

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, '2'));

type ItemEntity = {|
  name: string,
  price: number,
|};

const item: ItemEntity = {
  name: 'name',
  price: 1000,
  hoge: 'hoge',
};
