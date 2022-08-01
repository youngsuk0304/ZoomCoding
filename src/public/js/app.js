//alert("hi");
//front 에서 socket과 연결하는 부분
const socket = new WebSocket("ws://localhost:3000");
//const socket = new WebSocket('ws://${window.location.host}');
//app.js의 socket은 서버로의 연결을 의미

//open, message, error, close 가능
socket.addEventListener("open",()=>{
  console.log("Connected to Brower O");
});

//브라우저가 무슨 메세지를 받았을때
socket.addEventListener("message",(message)=>{
  //Juset got this : ",message.data,"from the Server");
  const translatedMessageData = message.toString('utf8');

  console.log("New message : ",message.data,"from the Server");

});

//서버가 오프라인 됐을때
socket.addEventListener("close",()=>{
  console.log("Disconnected to Brower X");
});


setTimeout(()=>{
  socket.send("hello from the browser!");
},5000);
//예정은 hello from the broewer! 이라는 message가 보내져야하고 
//server.js에서 socket.on(message)에서 hello from the broewer!를 받아 출력해줘야한다.
//하지만 <Buffer 68 65 6c 6c 6f 20 66 72 6f 6d 20 74 68 65 20 62 72 6f 77 73 65 72 21>값이 출력된다.