FROM nginx:alpine

# Clear the default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy everything from your current directory into the container
# This includes folders like /css, /js, or /images
COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
