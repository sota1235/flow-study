// @flow

function add(a/*: number */, b/*: number */)/*: number */ {
  return a + b;
}

add("1", 2);

/*flow-ignore*/
add("2", 3);
