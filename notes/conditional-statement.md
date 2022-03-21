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

## 📌 3. 부정 조건문 지양하기

```
// 부정 조건문
if(!isLogin){
}

if(isLogin){
}
```

부정 조건문은 코드 읽기가 직관적이지 않고, 이해하기 더 어렵게한다.  
**나도 사실 부정 조건문을 사용하면 생각을 여러번 하게 되고, 헷갈리게 되는 경우가 있었다.. 부정 조건문을 지양해서 코드를 더 읽기 쉽게 만들자!**

## 📌 4. 널 병합 연산자 ?? 

널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

falsy를 사용할 때 사실 0 이라는 값이 들어갈수도 있는건데 false로 되어 에러가 생길수도 있다.

```
//예시
function helloWorld(msg) {
 
  if (!msg) {
    return 'hello world';
  }
  return 'hello' + (msg || 'world'); // ?? 널 병합 연산자로 수정되면 잘 작동이 된다.
}

helloWorld(0) // => hello 0을 출력하고 싶었던것인데 falsy 값으로 되어 hello world가 출력되었다.
```
위 에 예시처럼  
딱 null 또는 undefined만 체크하고 싶을 때 유용하게 사용하는것이 널 병합 연산자 ?? 이다.!   
**null와 undefiend만 체크하고 싶을 때는 ??를 사용하자!**





