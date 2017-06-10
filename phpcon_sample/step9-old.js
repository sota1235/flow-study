function makeMemo(title, status, text) {
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
