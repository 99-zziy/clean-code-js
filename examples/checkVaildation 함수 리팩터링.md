### 리팩터링 한 코드 정보
https://github.com/BBOAZz/BOAZ_frontend/commit/27f7ede6deaf5776decfd9659b0a3fffdea52c00



내가 프로젝트 하기전에 하셨던 분이 작성했던 코드인것 같다.  
좀 더 간결하게 리팩털이 할 수 있어서 저런식으로 수정했다.

그런데, 한가지 의문점은 내가 지금
```
setVaildation({
   ...vaildation,
   userNameVaild: value ? true : false,
});
```
이런식으로 했는데, 

```
setVaildation({
   ...vaildation,
   userNameVaild: value,
});
```
이렇게 하면 더 간결하게 바꿀 수 있다.  
그런데 에러는 나지않지만 boolean 값이 아니라 약간 고민이 되었다.   
이러한 부분들은 더 공부해나가면서 보강해야겠다.
