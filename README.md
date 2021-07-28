# Avoiding Angular duplicate HTTP requests with the RxJs shareReplay operator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Development server

https://www.youtube.com/watch?v=pIPyikqkFYE

## CORS error

Reacting to this special request, the server sends back a response header. This header contains an Access-Control-Allow-Origin key, to specify which origins can access the server’s resources. The key will have one of two values:

One: the server can be really strict, and specify that only one origin can access it:
```
Access-Control-Allow-Origin: http://localhost:3000
```

Two: the server can let the gates go wide open, and specify the wildcard value to allow all domains to access its resources:
```
Access-Control-Allow-Origin: *
```