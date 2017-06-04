// @flow
type MemoTypeEnum = 'public'|'private';

type DateTimeValue = string;

type TagObject = {
  name  : string,
  color : string,
}

type TagObjects = {
  tags : TagObject[],
}

type MemoObject = {|
  memoId  : number,
  name    : string,
  status  : MemoTypeEnum,
  text?   : string,
  created : DateTimeValue,
|}

interface MemoProviderInterface {
  get(memoId: number): MemoObject & TagObjects;
}

class MemoAccessor {
  memoProvider: MemoProviderInterface;

  constructor(memoProvider: MemoProviderInterface) {
    this.memoProvider = memoProvider;
  }

  async getMemo(memoId: number): Promise<MemoObject & TagObjects> {
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
