'option strict';

const config = {};

config.networkNodeListJSONurl = 'https://raw.githubusercontent.com/LeinAd2k/json-s/master/nodes.json';

config.serverHost = '0.0.0.0';

config.serverPort = 8081;

config.networkNodeTimeout = 10;

config.statsUpdateInterval = 15;

config.nodeTTL = 3600;

config.rpcPort = 24888;

config.queueReseedDelay = 60;

config.dnsServers = ['8.8.8.8', '8.8.4.4'];

config.logging = {
  files: {
    level: 'info',
    directory: 'logs',
    flushInterval: 5
  },
  console: {
    level: 'info',
    colors: true
  }
};

module.exports = config;
