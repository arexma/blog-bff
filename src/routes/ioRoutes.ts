import { io } from '../index';

io.on("connection", (socket) => {
    console.log("User connected!");
  
    socket.emit("hello from server", 1, "2", {3: Buffer.from([4])});
  
    socket.on("hello from client", (...args) => {
      console.log(args);
    })
  
    socket.on("chat message", (msg: string) => {
      console.log(msg);
    })
  
    socket.on("disconnect", () => {
      console.log('A user has disconnected');
    })
  })