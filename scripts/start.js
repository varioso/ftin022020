#!/usr/bin/env node

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const DevServer = require('webpack-dev-server');

const createClientConfig = require('../webpack/client');
const createServerConfig = require('../webpack/server');

const { CONTENT_PORT } = require('../webpack/configUtils');

async function main() {
  const clientConfig = createClientConfig('dev');

  const clientCompiler = webpack(clientConfig);
  const serverCompiler = webpack(createServerConfig('dev'));

  clientCompiler.plugin('done', () => {
    serverCompiler.watch(null, () => {});
  });

  const clientDevServer = new DevServer(clientCompiler, {
    port: CONTENT_PORT,
    hot: true,
    compress: true,
    noInfo: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin' 'X-PINGOTHER' 'X-Requested-With' 'Content-Type' 'Accept' 'Authorization',
    },
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'),
      return res.status(200).json({}),

    historyApiFallback: {
      disableDotRule: true,
    },
  });

  clientDevServer.listen(CONTENT_PORT, () => console.log('server started'));
}

main();
