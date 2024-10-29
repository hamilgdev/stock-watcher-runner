ARG NODE_VERSION=20.18.0

# Change the base image to amd64
FROM --platform=linux/amd64 node:${NODE_VERSION} AS compile-dependencies

ENV APP_HOME=/usr/src/app
WORKDIR $APP_HOME

# Skip downloading Chromium when installing puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install Google Chrome for Puppeteer on amd64
RUN apt-get update && apt-get install -y curl gnupg wget \
  && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | tee /etc/apt/trusted.gpg.d/google.asc > /dev/null \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-stable \
  && rm -rf /var/lib/apt/lists/*

COPY . .
RUN npm install

ENV NODE_ENV=production

EXPOSE 8080

USER node

CMD ["node", "main.js"]
