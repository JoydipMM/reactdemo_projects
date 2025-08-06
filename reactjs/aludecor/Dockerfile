# 1. Use Node 20 as the base image
FROM node:20-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
COPY .env .env
RUN npm install

# 4. Copy all files (after dependencies to take advantage of Docker cache)
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Final stage to run the app
FROM node:20-alpine

WORKDIR /app
COPY --from=base /app ./

EXPOSE 3000
CMD ["node", "server.js"]
