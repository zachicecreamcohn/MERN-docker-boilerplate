# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/backend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript files
RUN npm run build

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run your app
CMD [ "node", "dist/server.js" ]
