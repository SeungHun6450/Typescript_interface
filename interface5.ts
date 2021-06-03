interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  //name의 초기값을 지정해줘야 빨간줄이 안뜬다
  constructor(name: string){
    this.name = name;
  }
  
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const person: IPerson1 = new Person("Mark");
person.hello();