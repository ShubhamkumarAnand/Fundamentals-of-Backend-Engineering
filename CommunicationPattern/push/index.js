const http = require("http");
const WebSocketServer = require("websocket").server;
let connections = [];

//create a raw http server (this will help us create the TCP which will then pass to the websocket to do the job)
const httpServer = http.createServer();

//pass the httpServer object to the WebSocketServer library to do all the job, this class will override the req/res
const webSocket = new WebSocketServer({ httpServer: httpServer });
//listen on the TCP socket
httpServer.listen(8080, () =>
  console.log("My server is listening on port 8080")
);

//when a legit webSocket request comes listen to it and get the connection .. once you get a connection thats it!
webSocket.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("message", (message) => {
    //someone just sent a message tell everybody
    connections.forEach((c) =>
      c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`)
    );
  });

  connections.push(connection);
  //someone just connected, tell everybody
  connections.forEach((c) =>
    c.send(`User${connection.socket.remotePort} just connected.`)
  );
});

//client code
//let ws = new WebSocket("ws://localhost:8080");
//ws.onmessage = message => console.log(`Received: ${message.data}`);
//ws.send("Hello! I'm client")
