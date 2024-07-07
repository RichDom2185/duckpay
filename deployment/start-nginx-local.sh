#!/bin/bash

docker run --rm \
    -p 8000:80 \
    -v ./deployment/nginx-config-local:/etc/nginx/conf.d:ro \
    --name duckpay_nginx_local \
    nginx:latest
