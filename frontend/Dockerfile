# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server for serving static content
RUN npm install -g serve

# Expose the port
EXPOSE 3005

# Serve the React app
CMD ["serve", "-s", "build"]
