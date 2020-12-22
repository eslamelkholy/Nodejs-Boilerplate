FROM node:latest

LABEL author="Eslam Elkholy"

ENV NODE_ENV=development
ENV PORT=4000

COPY . /var/www
WORKDIR /var/www

RUN npm install -g pm2@latest
RUN yarn install
RUN mkdir -p /var/log/pm2

EXPOSE $PORT

ENTRYPOINT ["pm2", "start", "./src/config/pm2.config.js","--name","boilerplate","--log","/var/log/pm2/pm2.log","--watch","--no-daemon"]


# To build:
# docker build -f node.development.dockerfile --tag boilerplatetest ../

# To run:
# docker run -p 4000:4000 boilerplatetest
