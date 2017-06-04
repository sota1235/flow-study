// @flow
class MemoAccessor {
  async getMemo(memoId: number): Promise<Object> {
    const option = {
      method: 'GET',
    };

    const response = await fetch(`/memos/${memoId}`, option);

    return await response.json();
  }

  async uploadMemo(name: string, text: ?string): Promise<Object> {
    const option = {
      method : 'POST',
      body   : `name=${name}&text=${text}`,
    };

    const response = await fetch('/memos', option);

    return await response.json();
  }
}

export default MemoAccessor;
