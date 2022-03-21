## 📌 1. truthly vs falsy

```
// true으로 평가받는 값들
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

```
// fasle로 평가받는 값들
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

예시 

```
//수정 전
function printName(name){
  if (name === null || name === undefined){
    return "no one"
  }
return "hello" + name
}

```

```
//수정 후
function printName(name){
  if (name){
    return "no one"
  }
return "hello" + name
}

```

truthly falsy를 사용하면 좀 더 간결하게 표현할수있다.




