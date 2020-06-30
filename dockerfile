FROM nginx:alpine
COPY /build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# To build and test docker image
# sudo docker build -t chaudha4/pomodoro_clock .
# sudo docker images
# sudo docker run -p 80:80 -d chaudha4/pomodoro_clock
# Test using "curl -i localhost:80"

# Get logs using "sudo docker logs container_id". Use "sudo docker ps" to get id.

# Stop container using "sudo docker stop container_id"

# Share it with others by "sudo docker save chaudha4/pomodoro_clock > pomodoro_clock.tar"

# Shared images can be restored on any other env by "sudo docker load < pomodoro_clock.tar"