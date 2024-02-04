FROM node:20-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 

# Install
WORKDIR /app
COPY . .
COPY package.json yarn.lock ./
RUN npm install
RUN npm run build

WORKDIR /app
USER nextuser
COPY --chown=nextuser:nextuser /app/public ./public
COPY --chown=nextuser:nextuser /app/.next/standalone ./
COPY --chown=nextuser:nextuser /app/.next/static ./.next/static

# Deploy
EXPOSE 5200
ENV HOST=0.0.0.0 PORT=5200 NODE_ENV=production
CMD ["dumb-init", "node", "server.js"]
