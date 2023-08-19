FROM node:lts-alpine

RUN apk add --no-cache libc6-compat git

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn prisma generate && \
    yarn build

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["node", "dist/src/main"]
