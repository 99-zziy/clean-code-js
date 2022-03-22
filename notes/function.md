## 📌 1. Rest Parameter

```
function printName(...names) {
  console.log(names); // ['kang', 'kim', 'park']
}

printName('kang', 'kim', 'park');
```

Rest Parmeters를 사용하면 값이 배열로 나온다.

```
function printName() {
  console.log(arguments); // Arguments(3) ['kang', 'kim', 'park', callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

printName('kang', 'kim', 'park');
```
**1번째 주의 ! : spred opreater와는 다르다**  
**2번째 주의 !! : arguments VS rest 파라미터**

arguments는 유사 배열 객체고 rest는 배열이다.  
무슨 말이냐면 arguments는 유사배열객체이기 때문에 Array 오브젝트의 메서드를 사용할 수 없다.  
따라서 ES6에서는 arrow function에 arguments는 사용할 수 없을 뿐더러 Rest 파라미터를 사용하면 더 유연한 코드를 작성할 수 있는 것이기 때문에 Rest 파라미터 사용을 권장한다.



