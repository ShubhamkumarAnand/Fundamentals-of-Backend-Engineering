# Pooling

### Features

- Client wants a real time notification
- When the Client doesn't have to request the data constantly
- Connection must be Bidirectional
- Data send by the server just Client must be alive
- Used by the RabbitMQ
- gRPC supports the push from the server

eg. Most Notification service

**Pros**

  - Real time

**Cons**

  - Client must be online
  - Might not able to handle the request continuously (Kafka log Pooling)
  - Light Client Pooling
