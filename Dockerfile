FROM ubuntu:22.04

COPY ./docker_modules/ ./

RUN apt update && apt upgrade -y
RUN apt install curl build-essential procps file -y
RUN bash ./javascript.sh
RUN bash ./cypress.sh
