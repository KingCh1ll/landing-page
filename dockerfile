FROM node:20.11.0-alpine3.19 AS build
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20.11.0-alpine3.19
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 

WORKDIR /app
COPY --from=build --chown=nextuser:nextuser /app/public ./public
COPY --from=build --chown=nextuser:nextuser /app/.next/standalone ./
COPY --from=build --chown=nextuser:nextuser /app/.next/static ./.next/static
USER nextuser

EXPOSE 5200
ENV HOST=0.0.0.0 PORT=5200 NODE_ENV=production

CMD ["dumb-init", "node", "server.js"]