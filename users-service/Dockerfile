FROM node:12

WORKDIR /opt/app

COPY package*.json ./

RUN npm install
# If building for production
# RUN npm ci --only=production

COPY . .

CMD npm run watch