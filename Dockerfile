FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm@9

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:22-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 4000
CMD [ "npm", "run", "start" ]