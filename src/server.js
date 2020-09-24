// 바벨 없이 express호출 하는 법
// 변수 express
const express = require("express");

// app 이라는 애가 생김
const app = express();

// 사용자가 "/" 호출 할 수 있게 만든다
// get이 실행된다
// get(메뉴,작업);
// () => {} <-- 콜백함수
app.get("/", (req, res) => {
  res.send("Hello");
});

// listen(주소가 어딘데?, 그리고 뭐할건데?);
app.listen(3000, () => {
  console.log("3000주소에서 app실행");
});
