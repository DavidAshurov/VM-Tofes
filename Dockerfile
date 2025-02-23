FROM nginx:alpine
LABEL authors="ashur"

COPY dist /usr/share/nginx/html