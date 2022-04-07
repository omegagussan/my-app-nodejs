IMAGE_NAME=my-app

.DEFAULT_GOAL := docker-build

docker-build:
	@DOCKER_BUILDKIT=1 docker build -t $(IMAGE_NAME) \
		.

build: docker-build

run:
	@docker run -p 8080:3334 $(IMAGE_NAME)

shell:
	@docker run -p 8080:3334 -it $(IMAGE_NAME) bash