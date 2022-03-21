## 📌 1. 배열 요소에 접근하기
```
function clickGroupButton() {
  const confirmButton = document.getElementsByTagName('button')[0];
  const cancelButton = document.getElementsByTagName('button')[1];
  const resetButton = document.getElementsByTagName('button')[2];
}

// 위 코드에서 배열의 인덱스로 배열요소에 접근하는 방법을 구조분해할당을 통해 리팩토링
function clickGroupButton() {
  const [confirmButton, cancelButton, resetButton] = document.getElementsByTagName('button');
}
```

**이렇게 구조분해할당을 통해하면 훨씬 쉽고 간결하게 배열의 요소를 나타낼 수 있다.**


## 📌 2. map vs forEach 

- map: 배열을 순회하면서 새로운 배열을 만들어낸다.
- forEach: 배열을 순회하기만 한다.

**map과 forEach를 잘 비교해봐서 적절한 곳에 사용하자. map은 새로운 배열을 만들 때, forEach는 배열 순회할 때**
