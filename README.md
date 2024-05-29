# 심재휘 202030316

2️⃣ [2주차](#2024-03-13-강의-내용)  
3️⃣ [3주차](#2024-03-20-강의-내용)  
5️⃣ [5주차](#2024-04-03-강의-내용)  
7️⃣ [7주차](#2024-04-17-강의-내용)  
9️⃣ [9주차](#2024-05-01-강의-내용)  
1️⃣0️⃣ [10주차](#2024-05-08-강의-내용)  
1️⃣2️⃣ [12주차](#2024-05-22-강의-내용)  
1️⃣3️⃣ [13주차](#2024-05-29-강의-내용)

## 2024-05-29 강의 내용
### textarea 태그
 1. html에서는 textarea 의 children으로 텍스트가 들어가는 형태입니다.
 ``` html
 <textarea>
   안녕하세요, 여기에 이렇게 텍스트가 들어가게 됩니다.
 </textarea>
 ```
 2. 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 변경합니다.

### select 태그
 1. select 태그도 textarea와 동일함
 ``` js
 function FruitSeelct(props){
  const [value, setValue] = useState("grape");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일 : ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>
      과일을 선택하세요 : 
        <select value = {value} onChange = {handleChagne}>
          <option value = 'apple'>사과</option>
          <option value = 'banana'>바나나</option>
          <option value = 'grape'>포도</option>
          <option value = 'watermelon'>수박</option>
        </select>
      </label>
      <button type = "submit">제출</button>
    </form>
  )
 }
 ```

### File input 태그
 1. File input 태그는 그 값이 읽기 전용이기 때문에 리액트트에서는 비제어 컴포넌트가 됩니다.

### Input Null Value
 1. 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
 2. 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.
```js
ReactDOM.render(<input value = "hi"/>), rootNode;

setTimeout(function(){
  ReactDOM.render(<input value = {null}/>, rootNode);
}, 1000);
```

## 2024-05-22 강의 내용
### 리스트와 키란 무엇인가?
 1. 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것이다.
 2. 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미함.
 3. 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있음.

### 리스트의 키에 대해 알아보기
 1. 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"
 2. 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용함.
 3. 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.
 ![alt text](image.png)

### 폼이란 무엇인가?
 1. 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용 됨
 ```js
 <from>
 <label>
 이름:
 <input type='text' name="name" />
 </label>
 <button type="submit">제출</button>
 </from>
 ```

### 제어 컴포넌트
 1. 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다.

## 2024-05-08 강의 내용
### Argument 전달
 1. 함수에 전달할 데이터를 Argument라고 함
 2. 클래스 컴포넌트는 bind 함수를 사용해서 전달
 3. 함수형 컴포넌트는 arrow function을 주로 사용함.

 ```js
 import { useState } from 'react';
import WarningBanner from './WarningBanner';

export default function MainPage() {
const [showWarning, setShowWarning] = useState(false);

    const toggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={toggleClick}>{showWarning ? '감추기' : '보여주기'}</button>
        </div>
    );

}
 ```

### 엘리먼트 변수
 1. 렌더링 해야 할 컴포넌트를 변수처럼 다루고 싶을 때 엘리먼트 변수를 사용함
 2. button 변수에 담아 컴포넌트를 대입한 예제 코드
 ```js
     let button;
    if (isLogedIn) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }
 ```

### 인라인 조건
 1. 별도로 분리된 곳에 적성하지 않고, 해당 코드가 필요한 곳 안에 직접 삽입함.
 2. 인라인 조건은 조건문을 코드 안에 집어 넣어야 함.
 ```js
 true && expression -> expression
false && expression -> false
 ```

### 컴포넌트 렌더링 막기
 1. 컴포넌트를 렌더링 하고 싶지 않을 때는 null을 반환한다.
 2. False인 경우에만 null을 반환하기 때문에 컴포넌트를 출력하지 않는다.
 ```js
 export default function WarningBanner(props) {
  if (props.warning) {
    return null;
  }
  return <div>경고!!</div>;
}
 ```


## 2024-05-01 강의 내용
### 훅의 규칙
 1. 첫 번째 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다.
 2. 따라서 반복문이나 조건문 또는 중첩된 함수를 안에서 훅을 호출하면 안 됩니다.
 3. 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
 4. 페이지 230의 코드는 조건에 따라 호출되기 때문에 잘못된 코드입니다.
 5. 두 번째 규치은 함수형 컴포넌트에서만 훅을 호출해야 한다는 것입니다.
 6. 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됩니다.
 7. 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅엥서만 호출할 수 있습니다.

### 커스텀 훅 추출하기
 1. use로 시자하는 훅을 만들고, 내부에서 다른 훅을 호출하면 됩니다.
 2. 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것입니다. (UserStatus)

### 이벤트 처리하기
 1. DOM에서 클릭 이벤트를 처리하는 예제코드
 ```js
 <button onclick="activate()">
 Activate
 </button>
 ```
 2. React에서 클릭 이벤트 처리하는 예제 코드

## 2024-04-17 강의 내용
### 훅이란?
 1. 클래스 컴포넌트에서는 생성자에서 state를 정의하고, setState()함수를 통해 state를 업데이트 한다.
 2. 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었다.
 3. 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅이다.
 4. 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동이랗게 구현할 수 있게 됨
 5. 훅이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미함
 6. 훅의 이름은 모두 'use'로 시작함
 7. 사용자 정의 훅을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use
 로 시작할 것을 권장함

### useState
 1. useState는 함수형 컴포넌트에서 state를 사용하기 위한훅이다
 2. 증가는 가능하지만 증가할 때마다 재 렌더링이 일어나지 않음
 3. 이럴 때 useState를 사용함 

### useEffect
 1. useState와 함께 가장 많이 사용하는 훅
 2. 이 함수는 사이드 이펙트를 수행하기 위한 것
 3. 영어로 side a effect는 부작용을 의미함. 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.
 4. 하지만 리액트에서는 효과 또는 영향을 못받는 effect의 의미에 가깝다.
 5. 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미함
 6. 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업이 완료될 수 없기 때문. 렌더링이 끝난 이후에 실행되어야 하는 작업들임.
 7. 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공함
 8. 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해임. 부작용의 부를 ??로 생각했기 때문
 9. Side effect는 ???으로 "원래의 용도 혹은 목적의 효과 외에, 부수적으로 다른 효과가 있는 것'을 의미함
 10. 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말함
 11. 예를 들면 네트워크 리퀘스트. DOM수동 조작, 로깅 등은 정리가 필요 없는 경우들임
 12. useEffect()함수는 다음과 같이 사용함
 13. 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어감.
  ex. useEffect(이팩트 함수, 의존성 배열);
 14. 의존성 배열을 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨
 15. 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됨

### useMemo
 1. useMemo() 훅은 Memoizde value를 리턴하는 훅
 2. 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있다
 3. 이 훅은 렌더링이 일어나는 동안 실행됨
 4. 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됨
 5. 예를 들면 useEffect에서 실행되어야 할 사이드 이팩트 같은 것임.

### useRef
 1. useRef()훅은 레퍼런스를 사용하기 위한 훅이다.
 2. 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다.
 3. useRef()훅은 바로 이 레퍼런스 객체를 반환한다.
 4. 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미함.
 5. const refContainer = useRef(초기값);  
    이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프 타임 전체에 걸쳐서 유지됨
 6. 즉, 컴포넌트 마운트 해제 전까지는 계속 유지된다는 의미

### 훅의 규칙
 1. 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야됨. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미  
    따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨  
    이 규칙에 따라 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출돼야 함  
    페이지 224의 코드느 ㄴ조건에 따라 호출됨으로 잘못된 코드임
 2. 두 번째 규칙

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
