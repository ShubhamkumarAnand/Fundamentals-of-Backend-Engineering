# Synchronous vs Asynchronous

- Can i do work while waiting?

## Synchronous Communication

- Send the request and cannot execute until response is received.
- Caller and Receiver must be in Sync

## Asynchronous Communication

- Client send the request and do other work while it gets the response
- Client and Receiver is not necessary to be in Sync

> Methods

- **epoll** : Client check if the response is ready
- **io_uring**: Receiver calls when the work is done
- **new-thread**: New thread that blocks

eg. Node => Callback, Promises, Async - Await

> Understanding the Synchronous va Asynchronous

- Getting Response in meeting 
- Getting Response through the mail
