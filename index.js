// log: 정보 기록 및 출력
console.log("Hello Codeit");

/* 
    자료형 data type
    정의: 프로그레밍에서 쓰이는 데이터의 종류
    예시: 정수, 실수, 문자열, 부울형, 리스트, 튜플, 딕셔너리, 집합 등
*/

/*
    추상화 abstraction
    정의: 복잡한 것들을 목적에 맞게 단순화한 것. 핵심만
    예시: 요약, 지도 등
*/

/* 
    변수 variable
    정의: 값의 저장소 -> 선언 & 할당(초기화)
    특징: 코드 이해 쉬움. 할당할 때는 '='등호 하나와 함께 쓰인다.
    *=: 할당 연산자. 우변을 좌변에 할당한다는 의미.
*/

// 변수 선언
let coffeePrice = 3000;
let teaPrice = 2000;
let juicePrice = 4000;

console.log(coffeePrice * 2); // 6000
console.log(coffeePrice + teaPrice); // 5000
console.log(juicePrice * 2 + coffeePrice + teaPrice); // 13000

let espresso = 10;
let milk = 170;
let syrup = 50;
let whippedCream = 60;

console.log(milk + syrup); // 220
console.log(espresso * 4 + whippedCream); // 100

// 함수
// 역할: 명령들을 정의. 추상화의 개념 ㅇ
// 구성: function 함수이름() {
//     명령;
//     명령;
// }

function greetings() {
  console.log("Hello");
  console.log("안녕");
  console.log("Bonjour");
}

// 함수 호출
greetings();
greetings();

// 매개변수 Parameter
// 역할: 함수 내에서 변수처럼 사용. 함수 호출 시 값을 전달받는 곳
// 구성: function 함수이름 (파라미터1, 파라미터2,..) {console.log(파라미터1, 파라미터2..);};
function welcome(name) {
  console.log("Welcome, " + name + "!");
}

welcome("D00DI");
welcome("Jack");

function introduction(name, age, job) {
  console.log("Hello! My name is " + name + ".");
  console.log("I am " + age + "years old now.");
  console.log("What I do for work is " + job + "!");
}

introduction("D00DI", 23, "student");

// 값 반환 return
// 특징: 첫 번째 'return'문 만나면 함수 종료.
//      return 값 출력하는 함수 있어야.
function introductionR(name, age, job) {
  return (
    "Hello! My name is " +
    name +
    ". I am " +
    age +
    " years old now. What I do for work is " +
    job +
    "!"
  );
}

console.log(introductionR("Jack", 22, "Chief"));
