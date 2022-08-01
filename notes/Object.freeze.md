## 📌 Object.freeze()

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
