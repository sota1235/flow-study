// @flow
class MemoAccessor {
  async getMemo(memoId: number): Promise<Object> {
    const option = {
      method: 'GET',
    };

    const response = await fetch(`/memos/${memoId}`, option);

    return await response.json();
  }

  async uploadMemo(name: string, status: string, text: ?string): Promise<Object> {
    let body = `name=${name}&status=${status}`;

    if (text !== null && text !== undefined) {
      body = body + `&text=${text}`;
    }

    const option = {
      method: 'POST', body,
    };

    const response = await fetch('/memos', option);

    return await response.json();
  }
}

export default MemoAccessor;
