# Dockerfile: build instruction for the application container
#
# Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
#
# This program comes with ABSOLUTELY NO WARRANTY;
# This is free software, and you are welcome to redistribute it and/or modify
# it under the terms of the BSD 2-clause License. See the LICENSE file for more
# details.
#

FROM ubuntu:16.04

ENV APP_NAME="Node.js, Docker Example"
ENV NODE_VER="6.8.1"

# Install dependencies for downloading Node.js binaries
RUN \
  apt-get -qq update \
  && apt-get -qq install -y wget xz-utils

# Download and extract Node.js binaries
RUN \
  wget -qO - https://nodejs.org/dist/v${NODE_VER}/node-v${NODE_VER}-linux-x64.tar.xz \
  | tar xfJ - --strip-components=1 -C /usr/local >/dev/null

# Setup directory for application
WORKDIR /app

CMD [ "/bin/sh" ]
