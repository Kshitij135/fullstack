# Stage 1: Build the React application
# This is the "workshop" where we prepare our app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app for production
RUN npm run build

# --- Stage 2: Serve the application using Nginx ---
# This is the "shop" where we display the finished product
FROM nginx:stable-alpine

# Copy our custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from our "workshop" (the builder stage)
# into the Nginx web server's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Tell the world that the container will listen on port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]