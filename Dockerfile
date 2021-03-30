## Install Stage
# - install stage image will also be used in travis for test, building swagger
# - https://github.com/hk01-digital/docker-node
FROM node:14.16.0

WORKDIR /home/node/app

COPY package.json yarn.lock index.js ./

# later we may need it but not now
RUN yarn install --production

# nextjs requires `NODE_ENV=production` for backend
ENV PORT=3000 \
    NODE_ENV=staging

EXPOSE 3000

CMD ["node", "index.js"]

