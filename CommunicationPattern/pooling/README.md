# Pooling 

- Server is taking too much time can you check after sometime?
    eg.Youtube Video Upload
       User Logged In

## Short Pooling

- A client send a request 
- Server Process the request and immediatly response with an id: **RequestID**
- Client can check the progress by requesting the info
- Server can send the progress 
- When the task is finished the server can respond if the client asks

> **Pros**
  
  - Simple 
  - Good for long runnig task 
  - client can disconnect
  
> **Cons**

  - Too Chatty (NOT good if the system has Multiple task running and backend responds with each users)
  - Not Optimal for the Backend 
  - Bandwidth will get down
  

## Long Pooling

> Request is taking long, i'll check with you later But talk to me only when it's ready

- Same as Short pooling but the server DOES not respond until the RESPONSE is done.
- Kafka uses this service 

- Only cons: it's not real time

```bash
  curl -X POST http://localhost:8080/submit
  
  curl http://localhost:8080/checkstatus?jobId=job:12321232
```
