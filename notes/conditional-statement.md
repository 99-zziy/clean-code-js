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

**truthly falsy를 사용하여 좀 더 간결하게 표현해보자!!**

## 📌 2. 단축평가

```
true && true // true
true && false // false
true || false // true
false || true // true
```
논리연산자를 사용해 코드를 단축시켜 보자!

```
//수정 전
function getUserName(user,isLogin){

  if (isLogin){
   if(user) {
      if(user.name){
        return user.name
      } 
      else {
        return ''
      }
    }
  }

} 
```

```
//수정 후
function getUserName(user,isLogin){

  if (isLogin && user){
      return user.name || ''
  }

} 
```

|| 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있다.  
**if,else를 길게 늘어쓰지말고 &&, ||를 적절하게 사용하여 코드를 단축시켜보자!!**

## 📌 3. ealry return
ealry return은 함수를 미리 종료시키는 것이다.

```
function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

```

```
function loginService(isLogin, user) {
  // 로그인 여부
  if (isLogin) {
    return;
  }

  // 토큰 존재 여부
  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();
  return "로그인 성공";
}
```

ealry 리턴을 시키면 로직을 더 간결하게 만들수 있고, 이해하기 편한것 같다.!
**ealry 리턴을 사용해서 코드를 더 사고하기 편하게, 이해하기 편하게 만들어보자!**
