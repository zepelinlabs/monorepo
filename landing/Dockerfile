from node:latest

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1

# Set work directory
WORKDIR /code


WORKDIR /app

# Install dependencies
# A wildcard is used to ensure both package.json AND package-lock.json
# are copied where available
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

# Copy the rest of the code into the container
COPY . .
