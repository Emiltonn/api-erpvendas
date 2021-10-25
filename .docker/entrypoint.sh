#!/bin/bash

yarn install
yarn typeorm migration:run
yarn dev
chmod +x .docker/entrypoint.sh
