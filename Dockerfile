FROM node:12-buster-slim

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install typescript -g
RUN npm install
COPY . .

ENV NODE_PATH /usr/local/lib/node_modules
CMD ["npm", "start"]
