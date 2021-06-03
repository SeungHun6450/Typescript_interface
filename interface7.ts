interface HelloPerson {
  (name: string, age?: number): void;
}

// 함수는 구현체와의 관계 보다는 위의 인터페이스와의 관계만 중요하게 작용한다
// const helloPerson: HelloPerson = function(name:string, age:number){  // 에러
const helloPerson: HelloPerson = function(name:string){
  console.log(`안녕하세요! ${name} 입니다.`)
}

helloPerson('Mark', 34);