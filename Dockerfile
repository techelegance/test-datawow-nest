FROM node:22.3.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

RUN npx prisma migrate dev --name "init"

RUN npx prisma db seed

COPY . .

RUN npm run build 
CMD [ "npm", "run", "start:dev" ]