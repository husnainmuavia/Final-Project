# Use an official lightweight Nginx image
FROM nginx:alpine

# Copy your website files (HTML, CSS, JS) to the Nginx server
# Assumes your files are in a folder named 'dist' or 'src'
COPY ./index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
