FROM node:10-alpine
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]