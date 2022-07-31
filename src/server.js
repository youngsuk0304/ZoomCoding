import express from "express"
import http from 'http'
import WebSocket from 'ws'
//express 문법
const app = express();

//pug로 view 엔진 설정
app.set('view engine',"pug");
//express에 template에 view template가 어디있는지 지정
app.set("views",__dirname+"/views");
//public url을 생성해서 유저에게 파일을 공유하기
app.use("/public",express.static(__dirname+"/public"));

//home.pug를 render 해주는 route handler
//render
app.get("/",(req,res)=> res.render("home"));
//다른 url을 사용할경우 모두 home으로 
app.get("/*",(req,res)=>res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');

//application 을 시작하는 방법 변경
//app.listen(3000,handleListen);
//createServer를 하려면 requestListener 경로가 있어야한다.
const server = http.createServer(app);//서버에서 webSocket을 만들기 가능
//위는 http server
//설명 : express.js를 이용해서 http서버 만듬

//위에 만든 http server를 넣어서 websocket서버와 http서버 둘다 돌릴 수있다.
const wss = new WebSocket.Server({server});
//localhost:3000 은 http 그리고 ws 둘다 동작
//설명 http 서버 위에 webSocket 서버를 만듬

server.listen(3000,handleListen);
//app.lister(3000,handleListen)과 다른점 . 내 http서버에 access 한다.
//그래서 http 서버 위에 webSocket 서버를 만들 수 있게 했다.