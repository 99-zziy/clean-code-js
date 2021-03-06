## ๐ 1. shorthand property, concise method

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
์ฆ, ํ๋กํผํฐ์ key ์ value ์ ํ ๋นํ  ๋ณ์๋ช์ด ๋์ผํ ๊ฒฝ์ฐ value ๋ฅผ ์๋ต์ด ๊ฐ๋ฅํ๋ค.


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

**shorthand property, concise method๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ๊ฒฐํ๊ฒ property์ method๋ฅผ ํํํ๊ธฐ ์ข๋ค.**

## ๐ 2. Computed Property Name

Computed Property Name์ ํ๋กํผํฐ ํค๋ฅผ ๋์ ์ผ๋ก ์์ฑ ๊ฐ๋ฅํ๊ฒ ํด์ฃผ๋ ๊ฒ์ด๋ค.
```
import React, { useState } from 'react';

const PhoneForm = () => {
    const [state, setState] = useState({
        name:'',
        phone:''
    }); // ์ด๊ธฐ๊ฐ ์ค์ 

    const handleChange = (e) =>{
        setState({
            [e.target.name] : e.target.value
        });
    } // ์ด๋ฒคํธ ๊ฐ์ฒด์ ๋ด๊ฒจ ์๋ ํ์ฌ์ ํ์คํธ ๊ฐ ๋ถ๋ฌ์ค๊ธฐ

    console.log(state.name);
    console.log(state.phone);
    return (
        <>
        <form>
            <input placeholder="์ด๋ฆ"
            value={state.name}
            onChange={handleChange}
            name="name" />

            <input placeholder="์ ํ๋ฒํธ" 
            value={state.phone}
            onChange={handleChange}
            name="phone" /> {/*input์ name๊ฐ์ ๋ถ์ฌํด์ ๊ตฌ๋ถํ๊ธฐ*/}
            <div>{state.name}{state.phone}</div>
        </form>
        </>
    );
};

export default PhoneForm;
```

์์์ ๋ฆฌ์กํธ์์ ํ์ฉ๋ ์์๋ฅผ ๋ณด๋ฉด e.target.name์ ๋์ ์ผ๋ก ํค ๊ฐ์ ์ง์  ํ  ์ ์๋ค.

**์์ง๊น์ง๋ ๋์ ์ผ๋ก ํค ๊ฐ์ ์ง์ ํ  ์ผ์ด ์์๋ค. ์์๋๋ฐ ๋ด๊ฐ ์บ์น๋ฅผ ๋ชปํ๊ฒ์ผ์๋..?ใใ ๋ฌดํผ, ๋์ ์ผ๋ก ํค๊ฐ์ ์ง์ ํ  ์ผ์ด ์์ผ๋ฉด Computed Property Name๋ฅผ ์ฌ์ฉํด์ผ๊ฒ ๋ค. ๊ฝค๋ ์ ์ฉํ  ๊ฒ ๊ฐ๋ค.**

## ๐ 3. Lookup Table

object lookup table์ ์ค์  ์๋ ๋ฌธ๋ฒ์ ์๋๋ค.  
๋ค๋ง, ์๋ ์ฝ๋์ฒ๋ผ switch๋ฌธ์ด๋ if else๋ฌธ์ด ๋๋ฌด ๊ธธ๊ฒ ๋์ด์ง ๊ฒฝ์ฐ๋ฅผ ๋๋นํ์ฌ ๋ช์์ ์ด๋ฉฐ ํจ์จ์ ์ธ ์ฝ๋ ์์ฑ ๋ฐฉ์์ ์ง์นญํ๋ค.

```
function getUserType(type) {
  switch (type) {
    case 'ADMIN':
      return '๊ด๋ฆฌ์';
    case 'INSTRUCTOR':
      return '๊ฐ์ฌ';
    case 'STUDENT':
      return '์๊ฐ์';
    default:
      return 'ํด๋น ์์';
  }
}
```

```
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '๊ด๋ฆฌ์',
    INSTRUCTOR: '๊ฐ์ฌ',
    STUDENT: '์๊ฐ์',
    UNDEFINED: 'ํด๋น ์์',
  };

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}
```

**์ด๋ ๊ฒ ํ์ฉํ ์ ์์์ง ๋ชฐ๋๋ค. ์ง๊ด์ ์ด๊ณ  ๊ฐ๊ฒฐํ๊ฒ ๋ณด์ฌ์ง๋ฏ๋ก ์์ผ๋ก switch๋ฌธ์ด ๋ง์์ง ๋ ์ด๋ ๊ฒ ์ฌ์ฉํด์ผ๊ฒ ๋ค.**

## ๐ 4. Object Destructuring Assignment

```
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const marco = new Person('Marco', 30, 'Korea');
```

์์ ๊ฐ์ ์ฝ๋๋ฅผ ์๋ ์ฝ๋์ฒ๋ผ ๊ตฌ์กฐ๋ถํดํ ๋น์ ํ์ฉํ์ฌ ๋ฆฌํฉํ ๋ง ํ  ์ ์๋ค.  
ํจ์์ ๋งค๊ฐ๋ณ์๋ฅผ ๊ฐ์ฒด๋ก ๋ฐ๊ณ , ์ธ์๋ฅผ ๊ฐ์ฒด๋ก ์ ๋ฌํ๋ค๋ฉด, ์ ๋ฌํ๋ ๋งค๊ฐ๋ณ์๋ฅผ ๋ช์์ ์ผ๋ก ์ธ ์ ์์ผ๋ฉฐ ๋งค๊ฐ๋ณ์์ key๋ง ๊ฐ์ผ๋ฉด ๋๋ฏ๋ก ๋งค๊ฐ๋ณ์์ ์์๊ฐ ๋ค๋ฅด๋๋ผ๋ ์๊ด ์๋ค.  

```
function Person({ name, age, location }) {
  this.age = age;
  this.name = name;
  this.location = location;
}

const marco = new Person({ name: 'Marco', age: 30, location: 'Korea' });
```

๋ฆฌ์กํธ์์ ์ฌ์ฉ์์๋ ์ดํด๋ณด์

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

**์ด๋ ๊ฒ ๋ฐ๊ฟ์ ์๋ค. ์ฌ๋๋ง๋ค ์ด๋ค๊ฒ ๊ฐ๋์ฑ์ด ์ข์์ง๋ ๋ค๋ฅด๊ฒ ์ง๋ง prop๋ฅผ ๊ณ์ ์์จ๋ ๋๋ค๋ ์ ์์ ์ ๋ ๊ฒ ์ฌ์ฉํ๋๊ฒ๋ ์ข์๊ฒ ๊ฐ๋ค. ๊ทธ๋ฆฌ๊ณ  ์ด๋ค props๊ฐ ์๋์ง ํ๋์ ๋ณด์ด๋๊ฒ๋ ๋ ์ข์๊ฒ ๊ฐ๋ค.**

## ๐ 5. Object.freeze()

```
const o1 = {
    name: 'kim',
    score: [1, 2]
}
Object.freeze(o1);
```

Object.freeze๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ์ฒด๋ฅผ ๋ถ๋ณ(immutability)ํ๊ฒ ๋ฐ๊ฟ์ค ์ ์๋ค.  

๊ทธ๋ฆฌ๊ณ  Object.freeze ๋ ๊ฐ ์์ฒด๋ฅผ ๋ชป๋ฐ๊พธ๊ฒ ํ๋ ๊ฒ์ด๊ณ , const๋ ์ด๋ฆ์ด ๊ฐ๋ฆฌํค๋ ๊ฐ์ ๋ค๋ฅธ ๊ฒ์ผ๋ก ๋ฐ๊พธ์ง ๋ชปํ๊ฒ ํ๋ ๊ฒ์ด๋ค.  
์ด ๋๊ฐ๋ฅผ ๋ณํํด์ ์ฌ์ฉํ์ฌ ํจ์ฌ ๋ ๊ฐ๋ ฅํ๊ฒ ์ด๋ฎคํฐ๋ธํด์ผ ํ  ๊ฐ์ ๊ฐ๋ ฅํ๊ฒ ๊ท์ ํ  ์ ์๋ค.  
