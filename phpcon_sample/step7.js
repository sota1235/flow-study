// @flow
type MemoStatus = 'public'|'private'|'draft';

function makeMemo(title: string, status: MemoStatus, text: ?string): Object {
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
