# POC - Build NodeJS app from Dockerfile
Sample NodeJS app with Dockerfile for POC.

## Build Image from Dockerfile
```
docker build . -t <your username>/node-web-app
```

## Run the image
```
docker run -p 49160:8080 -d <your username>/node-web-app
```

## Additional info
https://nodejs.org/en/docs/guides/nodejs-docker-webapp
