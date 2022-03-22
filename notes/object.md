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
