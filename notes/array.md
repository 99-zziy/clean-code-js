## ๐ 1. ๋ฐฐ์ด ์์์ ์ ๊ทผํ๊ธฐ
```
function clickGroupButton() {
  const confirmButton = document.getElementsByTagName('button')[0];
  const cancelButton = document.getElementsByTagName('button')[1];
  const resetButton = document.getElementsByTagName('button')[2];
}

// ์ ์ฝ๋์์ ๋ฐฐ์ด์ ์ธ๋ฑ์ค๋ก ๋ฐฐ์ด์์์ ์ ๊ทผํ๋ ๋ฐฉ๋ฒ์ ๊ตฌ์กฐ๋ถํดํ ๋น์ ํตํด ๋ฆฌํฉํ ๋ง
function clickGroupButton() {
  const [confirmButton, cancelButton, resetButton] = document.getElementsByTagName('button');
}
```

**์ด๋ ๊ฒ ๊ตฌ์กฐ๋ถํดํ ๋น์ ํตํดํ๋ฉด ํจ์ฌ ์ฝ๊ณ  ๊ฐ๊ฒฐํ๊ฒ ๋ฐฐ์ด์ ์์๋ฅผ ๋ํ๋ผ ์ ์๋ค.**


## ๐ 2. map vs forEach 

- map: ๋ฐฐ์ด์ ์ํํ๋ฉด์ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด๋ธ๋ค.
- forEach: ๋ฐฐ์ด์ ์ํํ๊ธฐ๋ง ํ๋ค.

**map๊ณผ forEach๋ฅผ ์ ๋น๊ตํด๋ด์ ์ ์ ํ ๊ณณ์ ์ฌ์ฉํ์. map์ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค ๋, forEach๋ ๋ฐฐ์ด ์ํํ  ๋**
