# Use a base image with Java and Maven installed
FROM maven:3.8.3-openjdk-11 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project file
COPY pom.xml .

# Download and install dependencies
RUN mvn dependency:go-offline

# Copy the application source code
COPY src /app/src

# Build the application
RUN mvn package -DskipTests

# Use a lightweight base image for the application runtime
FROM adoptopenjdk/openjdk11:alpine-jre

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Define the command to run the application when the container starts
CMD ["java", "-jar", "app.jar"]
