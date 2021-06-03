interface IPerson2 {
  name: string;
  age?: number;
}

// interface끼리 상속
interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: '변승훈',
  city: '일산',
  age: 26
}