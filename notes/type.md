
## 📌 1. null vs undefined

- null: 빈 값을 할당한 상태, type은 object
- undefined: 값을 할당하지 않은 상태, type은 undefined
- undefined == null은 true

**null과 undefined의 차이를 알고 주의하자!!**

<br/>

## 📌 2. == 보다는 === 를 사용하자
```
0 == false // true
2 == "2" // true 
```
```
0 === false // false
2 === "2" // false 
```

**이유가 뭘까?**
> ==는 양 옆의 값을 비교하기 전에 강제 형 변환(Type Coercion)를 수행한다.   
> 강제 형변환 과정을 통해 피 연산자들을 공통 타입으로 만들고 그 안에 있는 값만을 비교하는, '느슨한 비교'를 한다.  
> 하지만 === 의 경우, 강제 형변환 과정을 수행하지 않는 '엄격한 비교'를 한다.

**앞에 예제를 봤다시피 생각하지못한 오류가 나타날 수 있다. 그러니 ===를 사용하자!(내가 생각할때는 무조건,,)**

<br/>

## 📌 3. isNaN


