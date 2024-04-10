FROM ubuntu:22.04

COPY ./ ./

RUN apt update && apt upgrade -y
RUN apt install curl build-essential procps file -y
RUN bash apps/javascript.sh