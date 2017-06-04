// @flow
type Item = {|
    id: number,
    name: string,
    imageUrl?: string,
  |}

const validItem: Item = {
    id: 32,
    name: 'item_name',
}; // Works

validItem.imageUrl = 'https://test.sota1235.com/test.png'; // Works
validItem.extraProp = 'extra!'; // Error :)
