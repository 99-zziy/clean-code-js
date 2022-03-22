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

