# 심재휘 202030316

## 2024-04-03 강의 내용
### props
1. props는 prop(property : 속성, 특성)의 준말
2. props = 컴포넌트 속성
3. 컴포넌트에 어떤 속성, props에 따라 속성이 다른 엘리먼트가 출력됨
4. props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 js 객체
5. porps = 읽기 전용, 변경할 수 없음
 - pure, impure 함수
  - pure함수 = 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
  - impure함수 = 내부에서 변하는 함수
### props 사용법
1. JSX에서는 key-value쌍으로 props를 구성함
 

2. JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것
createElement() 두 번째 매개변수가 props임

### 컴포넌트 
 1. 컴포넌트의 종류
  - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
  - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
  - 예전에 각성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 
  - 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함

### 함수형 컴포넌트
 1. Welcome컴포넌트는 props를 받아, 받는 props중 nameㅇ키의 값을 "안녕" 뒤에 넣어 반환합니다.
  
  //
  function Welcome(props){
    return <h1>안녕, {props.name}<h1>;
  }
  //

### 클래스형 컴포넌트
  1. Welcome 컴포넌트는 React.component class로 부터 상속을 받아 선언

### 컴포넌트 이름 짓기
  1. 이름은 항상 대문자로 시작함
  2. 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문
  3. 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

### 컴포넌트 렌더링
 아래 코드 참조

 // 
 function Welcome(props){
    return <h1>안녕, {props.name}</h1>;
 }
 const element = <Welcome name = "인제" />;
 ReactDOM.render(
    element,
    document.getElementById('root');
 );
 //

 ### state란?
  1. state는 리액트 컴포넌트의 상태를 의미함
  2. 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미함
  3. 정확히는 커모넌트의 변경가능한 데이터를 의미함
  4. state가 변하면 다시 렌더링이 되기 대문에 렌더링과 관련된 값만 state에 포함시켜야 함

### state의 특징
  1. 리액트 만의 특별한 형태가 아닌 단지 js 객체일 뿐이다.
  2. 예의 LikeButton은 class 컴포넌트
  3. constructor는 생성자이고 그 안에 있는
  4. this.state가 현 컴포넌트이다.

  - state는 변경 가능하지만 직접 수정은 안됨
  - 불가능 하다고 생각하는 것이 좋음
  - state를 변경하고자 할 때는 setstate()함수를 사용함

### 생명주기
  1. 생명주기는 컴포넌트의 생성 지점, 사용 지점, 종료 시점을 나타내는 것
  2. constructor가 실행 되면서 컴포넌트가 형성 됨
  3. 생성 직후 componentDidMount()함수가 호출 됨
  4. 컴포넌트가 소멸하기 전까지 여러 번 렌더링 함
  5. 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐
  6. 렌더링이 끝나면 componentDidMount() 함수가 호출 됨
  7. 컴포넌트가 언마운트 되면 componentWillUnmount() 함수가 호출 됨

## 2024-03-20 강의 내용

### 리액트 개념 정리
 - 복잡한 사이트를 수비고 빠르게 만들고, 관리하기 위해 만들어진 것
 - 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구
### 리액트 장점
 1. 빠른 업데이트와 렌더링 속도
  - 이 것을 VirtualDOM으로 가능하게 함 // DOM은 속도가 느림
  - DOM(Document Object Model) = XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변경 삭제할 수 있도록 돕는 인터페이스이다. = W3C 표준
  - DOM은 동기식, VirtualDOM은 비동기식 방법으로 렌더링 함
 2. 컴포넌트 기반 구조
  - 리액트의 모든 페이지는 컴포넌트로 구성됨
  - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있음.
  - 재사용성이 뛰어남
 3. 재사용성
  - 반복작업을 줄어주어 생산성을 높여줌
  - 유지보수가 용이함

# 

## 2024-03-13 강의 내용
### GitHub 사용법

#### js 자료형 :  
var: 중복 선언 가능, 재할달 가능  
let: 중복 선언 불가능, 재할당 가능  
const: 중복 선언 불가능, 재할당 불가능  
Array Type: 배열  
Object type  

#### js 연산자
a == b -> 대충(?) 같으면 된다  
a === b -> 완전 같아야 한다  
ex|  
1 == "1" -> true  
1 === "1" -> false

#### js 함수
function start(a, b){  
    return a + b;  
}  
console.log(start(10,20)); // 콘솔 입력 값 : 30 ;