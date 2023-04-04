# Request & Response

- General type of Request

  ```bash
    GET / HTTP/1.1..
    Host: google.com
    ..User-Agent: curl/7.81.0..
    Accept: */*....
  ```

- Requesting the Google to send the data and Header in the form of response

  `$ curl -v --trace out.txt http://google.com`
