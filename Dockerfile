FROM node:12

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=19002

EXPOSE 19002

CMD [ "yarn", "start" ]


