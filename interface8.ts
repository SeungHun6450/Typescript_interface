interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male',
}

// 바뀔 수 없는 값이므로 에러 발생
// p81.gender = 'female';