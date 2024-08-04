## For this application
Build image:
```shell
cd books
docker build -t books-frontend .
```

Run Container:
```shell
docker run -p 3000:80 books-frontend
```

## General Docker commands

List Docker containers:
```shell
docker ps -a
```

Remove all running containers:
```shell
docker rm -v -f $(docker ps -qa)
```

See all images:
```shell
docker image list
# or 
docker images
```

Delete image:
```shell
docker rmi <image_id>
```

## Docker Compose commands

Create and start containers in Docker Compose:
```shell
docker compose up
```

Stop and remove containers, networks in Docker Compose:
```shell
docker compose down
```

List Docker containers
```shell
docker compose ps
```

## Push to Dockerhub

Login to Dockerhub:
```shell
docker login --username <username>
```

Tag image:
```shell
docker tag books-frontend <username>/books-frontend
```

Push image:
```shell
docker push <username>/books-frontend
```