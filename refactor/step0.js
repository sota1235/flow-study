class MemoAccessor {
  async getMemo(memoId) {
    const option = {
      method: 'GET',
    };

    const response = await fetch(`/memos/${memoId}`, option);

    return await response.json();
  }

  async uploadMemo(name, text) {
    const option = {
      method : 'POST',
      body   : {
        name, text,
      },
    };

    const response = await fetch('/memos', option);

    return await response.json();
  }
}

export default MemoAccessor;
