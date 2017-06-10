// @flow
function makeMemo(title: string, status: string, text: ?string): Object {
  let content = text;

  if (text) {
    content = `${title}\n${text}`;
  }

  const memo = {
    title: title,
    text: content,
    status: status,
  };

  return memo;
}
