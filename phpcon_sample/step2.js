// @flow
function makeMemo(name: string, text: ?string): Object {
  const memo = {
    name: name,
    text: text,
  };

  return memo;
}
