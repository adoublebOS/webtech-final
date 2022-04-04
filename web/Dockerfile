FROM bitnami/express:4.17.3-debian-10-r45
WORKDIR /usr/src/web
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node" , "app.js" ]