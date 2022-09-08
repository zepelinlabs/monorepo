from node:latest

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY ./code/package.json /code/
RUN npm install

# Copy the rest of the code into the container
COPY . /code/
