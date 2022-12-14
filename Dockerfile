FROM node:16-alpine

WORKDIR /app

RUN apk update && apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python3
RUN npm install --quiet node-gyp -g

COPY package.json yarn.lock ./

RUN yarn install

COPY nest-cli.json ./nest-cli.json
COPY .env ./.env
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.build.json ./tsconfig.build.json

COPY src ./src
COPY test ./test


CMD [ "yarn", "start:dev" ]
