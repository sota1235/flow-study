// @flow
type MemoStatus = 'public'|'private'|'draft';

type Memo = {|
  title: string,
  status: MemoStatus,
  text: ?string,
|}

function makeMemo(title: string, status: MemoStatus, text: ?string): Memo {
  let content = text;

  if (text) {
    content = `${title}\n${text}`;
  }

  const memo: Memo = {
    title: title,
    text: content,
    status: status,
  };

  return memo;
}
