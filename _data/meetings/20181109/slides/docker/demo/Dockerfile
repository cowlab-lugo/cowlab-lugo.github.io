FROM debian:jessie
MAINTAINER Óscar M. Lage <info@oscarmlage.com>

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential bash

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

ENTRYPOINT ["python", "/app/app.py"]

EXPOSE 5000
