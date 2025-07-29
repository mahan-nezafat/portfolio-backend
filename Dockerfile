# Build stage
FROM node:lts-alpine AS builder

ARG IP

ENV IP=${IP}

WORKDIR /backend

COPY package*.json ./
RUN npm ci --only=production
COPY . .

# RUN npm install
# Production stage
FROM node:lts-alpine

WORKDIR /backend
COPY --from=builder /app ./

EXPOSE 3000

CMD [ "npm", "start" ]