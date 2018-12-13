var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.set("view engine", "ejs"); //ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드
app.use(express.static(__dirname + '/public'));

app.get("/hello", function(req, res){ //query를 통해서 이름을 받는 코드입니다. 모든 query들은 req.query에 저장됩니다.
  res.render("hello", {name:req.query.nameQuery});
});

app.get("/hello/:nameParam", function(req, res){ //route parameter를 통해 이름을 받는 코드입니다. 콜론(:)으로 시작되는 route은 해당 부분에 입력되는 route이 req.params에 저장됩니다.
  res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){ //3000번 포트를 사용합니다.
  console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
