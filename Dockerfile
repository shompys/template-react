FROM node:20.12.0-alpine3.19 as base
RUN npm install -g pnpm

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY ./pnpm-lock.yaml ./package.json ./
RUN pnpm install

FROM base AS builder
ARG ENVS
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY ./envs/${ENVS}.env /app/.env
RUN pnpm run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/vite.config.ts .

EXPOSE 8080

CMD ["pnpm", "run", "preview"]

