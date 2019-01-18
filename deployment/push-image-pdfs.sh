#!/usr/bin/env sh
IMAGE_TAG=$(git branch | grep \* | cut -d ' ' -f2)-$(git log -1 --pretty=format:"%H" | tail -n 1)
DOCKER_REGISTRY=elvizcacho
IMAGE_NAME=juaapp-pdfs
cd pdfs/ && docker image build . -t ${DOCKER_REGISTRY}/${IMAGE_NAME}
docker tag ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest  ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest