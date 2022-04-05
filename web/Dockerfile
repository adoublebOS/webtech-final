FROM bitnami/express:4.17.3-debian-10-r45
WORKDIR /usr/src/web
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 11440
CMD [ "node" , "app.js" ]