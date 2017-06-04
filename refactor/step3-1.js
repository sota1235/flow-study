// @flow
type MemoTypeEnum = 'public'|'private';

class MemoAccessor {
  memoProvider: Object;

  constructor(memoProvider: Object) {
    this.memoProvider = memoProvider;
  }

  async getMemo(memoId: number): Promise<Object> {
    return await this.memoProvider.get(memoId);
  }

  async uploadMemo(name: string, status: MemoTypeEnum, text: ?string): Promise<Object> {
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
