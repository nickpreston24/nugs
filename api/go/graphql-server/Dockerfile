FROM node:lts
FROM golang:1.8
# Install dependecies
# Coming SOON
# copy the local package file to the container workspace
ADD . /go/graphql-server
WORKDIR /go/graphql-server
RUN go install graphql-server
ENTRYPOINT /go/bin/graphql-server
EXPOSE 8080