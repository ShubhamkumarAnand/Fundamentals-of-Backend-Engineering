# Communication Protocols

Communications protocols link the frontend to the backend. Understanding how protocols work is a good skill to have for an engineer especially if they want to build a resilient backend application.

- Almost all the protocols we use and love on the backend are either built on top of TCP or UDP. That is why understanding the differences between this two help the engineer make the right choice. **For instance**, TCP is a stream-based connection-oriented protocol while UDP is a message based and connection-less. TCP provides reliable delivery at a cost of connection setup and re-transmission. While UDP starts faster but doesn’t have guaranteed delivery. Anything you build on top of these two protocols must adhere to their fundamental properties. TCP is not better than UDP, and UDP is not better than TCP. It all depends on what you are building.

- Moving up the stack, the HTTP protocol was originally built on top of TCP because we wanted to send requests and responses reliably. As the web evolved and resources become richer, one connection was not sufficient to concurrently send multiple requests. So browsers started to establish more and more connections, the cost of connection setup for each request became so high.

- HTTP/2 introduced **application level streams** so multiple requests can be sent on the same connection. Later HTTP/2 evolved and had to be rewritten on top of UDP with HTTP/3 to solve the TCP head of line problem. There are reasons for everything, the fundemental feature of TCP was the culprit of this move. It doesn’t mean TCP is bad the web has evolved in a way that TCP is no longer suitable. If we didn’t know how TCP works we would not have improved the HTTP protocol.

- It is also important to know that using any protocol comes with a cost especially while building APIs. Understanding that cost will help you make better informed decisions. **For example**, using HTTP/2 might give you more HTTP request throughput, but the work the application needs to do to assemble the streams taxes the CPU, something [Lucidchart](https://www.lucidchart.com/techblog/2019/04/10/why-turning-on-http2-was-a-mistake/) learned the hard way.

- Sometimes the backend architecture requires real-time Bidirectional communication protocols to build chatting, gaming apps or just communicating between two services. Protocols such as WebSockets, gRPC or just raw TCP/UDP can be used. If you know how a protocol works and what is the strength and weaknesses you will know when to use it.

Ultimately, learning communication protocols is important for a backend engineer, and it is possible to go as deep as desired in any protocol. Maybe one day you will write an RFC proposing a new protocol.
