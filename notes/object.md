## 📌 1. shorthand property, concise method

- **shorthand property**
```
var x = 10;
var y = 20; 
var obj = { 
  x: x,
  y: y
};
```

```
var x = 10; 
var y = 20; 
var obj = {
  x,
  y
};

```
즉, 프로퍼티의 key 와 value 에 할당할 변수명이 동일한 경우 value 를 생략이 가능하다.


- **concise method**
```
var obj = { 
  name: 'foo', 
  getName: function () { return this.name } 
};

```

```
var obj = { 
  name: 'foo', 
  getName () { return this.name } 
};

```

**shorthand property, concise method를 사용하면 간결하게 property와 method를 표현하기 좋다.**

## 📌 2. Computed Property Name

Computed Property Name은 프로퍼티 키를 동적으로 생성 가능하게 해주는 것이다.
```
import React, { useState } from 'react';

const PhoneForm = () => {
    const [state, setState] = useState({
        name:'',
        phone:''
    }); // 초기값 설정

    const handleChange = (e) =>{
        setState({
            [e.target.name] : e.target.value
        });
    } // 이벤트 객체에 담겨 있는 현재의 텍스트 값 불러오기

    console.log(state.name);
    console.log(state.phone);
    return (
        <>
        <form>
            <input placeholder="이름"
            value={state.name}
            onChange={handleChange}
            name="name" />

            <input placeholder="전화번호" 
            value={state.phone}
            onChange={handleChange}
            name="phone" /> {/*input에 name값을 부여해서 구분하기*/}
            <div>{state.name}{state.phone}</div>
        </form>
        </>
    );
};

export default PhoneForm;
```

위에서 리액트에서 활용된 예시를 보면 e.target.name을 동적으로 키 값을 지정 할 수 있다.

**아직까지는 동적으로 키 값을 지정할 일이 없었다. 있었는데 내가 캐치를 못한것일수도..?ㅎㅎ 무튼, 동적으로 키값을 지정할 일이 있으면 Computed Property Name를 사용해야겠다. 꽤나 유용할 것 같다.**

## 📌 3. Lookup Table

object lookup table은 실제 있는 문법은 아니다.  
다만, 아래 코드처럼 switch문이나 if else문이 너무 길게 늘어질 경우를 대비하여 명시적이며 효율적인 코드 작성 방식을 지칭한다.

```
function getUserType(type) {
  switch (type) {
    case 'ADMIN':
      return '관리자';
    case 'INSTRUCTOR':
      return '강사';
    case 'STUDENT':
      return '수강생';
    default:
      return '해당 없음';
  }
}
```

```
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
    UNDEFINED: '해당 없음',
  };

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}
```

**이렇게 활용할수 있을지 몰랐다. 직관적이고 간결하게 보여지므로 앞으로 switch문이 많아질 때 이렇게 사용해야겠다.**

## 📌 4. Object Destructuring Assignment

```
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const marco = new Person('Marco', 30, 'Korea');
```

위와 같은 코드를 아래 코드처럼 구조분해할당을 활용하여 리팩토링 할 수 있다.  
함수의 매개변수를 객체로 받고, 인수를 객체로 전달한다면, 전달하는 매개변수를 명시적으로 쓸 수 있으며 매개변수의 key만 같으면 되므로 매개변수의 순서가 다르더라도 상관 없다.  

```
function Person({ name, age, location }) {
  this.age = age;
  this.name = name;
  this.location = location;
}

const marco = new Person({ name: 'Marco', age: 30, location: 'Korea' });
```

리액트에서 사용예시도 살펴보자

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

```

```
function Welcome({name}) {
  return <h1>Hello, {name}</h1>
}

```

**이렇게 바꿀수 있다. 사람마다 어떤게 가독성이 좋은지는 다르겠지만 prop를 계속 안써도 된다는 점에서 저렇게 사용하는것도 좋을것 같다. 그리고 어떤 props가 있는지 한눈에 보이는것도 더 좋은것 같다.**

## 📌 5. Object.freeze()

```
const o1 = {
    name: 'kim',
    score: [1, 2]
}
Object.freeze(o1);
```

Object.freeze를 사용하면 객체를 불변(immutability)하게 바꿔줄 수 있다.  

그리고 Object.freeze 는 값 자체를 못바꾸게 하는 것이고, const는 이름이 가리키는 값을 다른 것으로 바꾸지 못하게 하는 것이다.  
이 두개를 병행해서 사용하여 훨씬 더 강력하게 이뮤터블해야 할 값을 강력하게 규제할 수 있다.  
