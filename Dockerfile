FROM node:lts-bullseye
WORKDIR /app
COPY / .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
ENV HOST_OS ${OS}
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]