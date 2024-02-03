FROM node:20-alpine
RUN apk add --no-cache libc6-compat

# Install
WORKDIR /app
COPY . .
COPY package.json yarn.lock ./
RUN npm install
RUN npm run build

# Build
FROM node:20-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 

WORKDIR /app
COPY --from=build --chown=nextuser:nextuser /app/public ./public
COPY --from=build --chown=nextuser:nextuser /app/.next/standalone ./
COPY --from=build --chown=nextuser:nextuser /app/.next/static ./.next/static
USER nextuser

# Deploy
EXPOSE 5200
ENV HOST=0.0.0.0 PORT=5200 NODE_ENV=production
CMD ["dumb-init", "node", "server.js"]
