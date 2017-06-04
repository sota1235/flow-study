// @flow
type Item = {
  id: number,
  name: string,
  imaegUrl?: string,
}

const validItem: Item = {
  id: 32,
  name: 'item_name',
}; // Works

validItem.imageUrl = 'https://test.sota1235.com/test.png'; // Works
validItem.id = '32'; // Error
