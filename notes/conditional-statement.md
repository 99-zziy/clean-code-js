## ๐ 1. truthly vs falsy

```
// true์ผ๋ก ํ๊ฐ๋ฐ๋ ๊ฐ๋ค
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
// fasle๋ก ํ๊ฐ๋ฐ๋ ๊ฐ๋ค
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

์์ 

```
//์์  ์ 
function printName(name){
  if (name === null || name === undefined){
    return "no one"
  }
return "hello" + name
}

```

```
//์์  ํ
function printName(name){
  if (name){
    return "no one"
  }
return "hello" + name
}

```

**truthly falsy๋ฅผ ์ฌ์ฉํ์ฌ ์ข ๋ ๊ฐ๊ฒฐํ๊ฒ ํํํด๋ณด์!!**

## ๐ 2. ๋จ์ถํ๊ฐ

```
true && true // true
true && false // false
true || false // true
false || true // true
```
๋ผ๋ฆฌ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด ์ฝ๋๋ฅผ ๋จ์ถ์์ผ ๋ณด์!

```
//์์  ์ 
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
//์์  ํ
function getUserName(user,isLogin){

  if (isLogin && user){
      return user.name || ''
  }

} 
```

|| ์ฐ์ฐ์๋ ๋ง์ฝ ์ด๋ค ๊ฐ์ด Falsy ํ๋ค๋ฉด ๋์ฒด๋ก ์ฌ์ฉ ํ  ๊ฐ์ ์ง์ ํด์ค ๋ ๋งค์ฐ ์ ์ฉํ๊ฒ ์ฌ์ฉ ํ  ์ ์๋ค.  
**if,else๋ฅผ ๊ธธ๊ฒ ๋์ด์ฐ์ง๋ง๊ณ  &&, ||๋ฅผ ์ ์ ํ๊ฒ ์ฌ์ฉํ์ฌ ์ฝ๋๋ฅผ ๋จ์ถ์์ผ๋ณด์!!**

## ๐ 3. ealry return
ealry return์ ํจ์๋ฅผ ๋ฏธ๋ฆฌ ์ข๋ฃ์ํค๋ ๊ฒ์ด๋ค.

```
function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return "๋ก๊ทธ์ธ ์ฑ๊ณต";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

```

```
function loginService(isLogin, user) {
  // ๋ก๊ทธ์ธ ์ฌ๋ถ
  if (isLogin) {
    return;
  }

  // ํ ํฐ ์กด์ฌ ์ฌ๋ถ
  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();
  return "๋ก๊ทธ์ธ ์ฑ๊ณต";
}
```

ealry ๋ฆฌํด์ ์ํค๋ฉด ๋ก์ง์ ๋ ๊ฐ๊ฒฐํ๊ฒ ๋ง๋ค์ ์๊ณ , ์ดํดํ๊ธฐ ํธํ๊ฒ ๊ฐ๋ค.!  
**ealry ๋ฆฌํด์ ์ฌ์ฉํด์ ์ฝ๋๋ฅผ ๋ ์ฌ๊ณ ํ๊ธฐ ํธํ๊ฒ, ์ดํดํ๊ธฐ ํธํ๊ฒ ๋ง๋ค์ด๋ณด์!**

## ๐ 3. ๋ถ์  ์กฐ๊ฑด๋ฌธ ์ง์ํ๊ธฐ

```
// ๋ถ์  ์กฐ๊ฑด๋ฌธ
if(!isLogin){
}

if(isLogin){
}
```

๋ถ์  ์กฐ๊ฑด๋ฌธ์ ์ฝ๋ ์ฝ๊ธฐ๊ฐ ์ง๊ด์ ์ด์ง ์๊ณ , ์ดํดํ๊ธฐ ๋ ์ด๋ ต๊ฒํ๋ค.  
**๋๋ ์ฌ์ค ๋ถ์  ์กฐ๊ฑด๋ฌธ์ ์ฌ์ฉํ๋ฉด ์๊ฐ์ ์ฌ๋ฌ๋ฒ ํ๊ฒ ๋๊ณ , ํท๊ฐ๋ฆฌ๊ฒ ๋๋ ๊ฒฝ์ฐ๊ฐ ์์๋ค.. ๋ถ์  ์กฐ๊ฑด๋ฌธ์ ์ง์ํด์ ์ฝ๋๋ฅผ ๋ ์ฝ๊ธฐ ์ฝ๊ฒ ๋ง๋ค์!**

## ๐ 4. ๋ ๋ณํฉ ์ฐ์ฐ์ ?? 

๋ ๋ณํฉ ์ฐ์ฐ์ (??) ๋ ์ผ์ชฝ ํผ์ฐ์ฐ์๊ฐ null ๋๋ undefined์ผ ๋ ์ค๋ฅธ์ชฝ ํผ์ฐ์ฐ์๋ฅผ ๋ฐํํ๊ณ , ๊ทธ๋ ์ง ์์ผ๋ฉด ์ผ์ชฝ ํผ์ฐ์ฐ์๋ฅผ ๋ฐํํ๋ ๋ผ๋ฆฌ ์ฐ์ฐ์์ด๋ค.

falsy๋ฅผ ์ฌ์ฉํ  ๋ ์ฌ์ค 0 ์ด๋ผ๋ ๊ฐ์ด ๋ค์ด๊ฐ์๋ ์๋๊ฑด๋ฐ false๋ก ๋์ด ์๋ฌ๊ฐ ์๊ธธ์๋ ์๋ค.

```
//์์
function helloWorld(msg) {
 
  if (!msg) {
    return 'hello world';
  }
  return 'hello' + (msg || 'world'); // ?? ๋ ๋ณํฉ ์ฐ์ฐ์๋ก ์์ ๋๋ฉด ์ ์๋์ด ๋๋ค.
}

helloWorld(0) // => hello 0์ ์ถ๋ ฅํ๊ณ  ์ถ์๋๊ฒ์ธ๋ฐ falsy ๊ฐ์ผ๋ก ๋์ด hello world๊ฐ ์ถ๋ ฅ๋์๋ค.
```
์ ์ ์์์ฒ๋ผ  
๋ฑ null ๋๋ undefined๋ง ์ฒดํฌํ๊ณ  ์ถ์ ๋ ์ ์ฉํ๊ฒ ์ฌ์ฉํ๋๊ฒ์ด ๋ ๋ณํฉ ์ฐ์ฐ์ ?? ์ด๋ค.!   
**null์ undefiend๋ง ์ฒดํฌํ๊ณ  ์ถ์ ๋๋ ??๋ฅผ ์ฌ์ฉํ์!**





