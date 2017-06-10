// @flow
function makeMemo(title: string, text: ?string): Object {
  let content = text;

  if (text) {
    content = `${title}\n${text}`;
  }

  const memo = {
    title: title,
    text: content,
  };

  return memo;
}
