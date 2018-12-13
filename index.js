var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){ //3000번 포트를 사용합니다.
  console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
