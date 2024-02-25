# Use an official Node.js runtime as a parent image
FROM node:18.18.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the local app files to the container's working directory
COPY . .

# Build the app
RUN npm run build

# Expose the port your app runs on
EXPOSE 2500
#The default command to start nginx in the foreground
CMD ["npm", "start"]
