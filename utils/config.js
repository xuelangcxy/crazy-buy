const config = {
  dev: {
    MY_API: 'http://my_api-dev.helloworld.com',
  },
  pre: {
    MY_API: 'https://my_api-gray.helloworld.cn',
  },
  production: {
    MY_API: 'https://my_api.helloworld.cn',
  },
};

module.exports = config[process.env.API_ENV] || config.dev;