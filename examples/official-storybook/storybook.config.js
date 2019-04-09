export const unused = 'foo';

// eslint-disable-next-line no-unused-vars
export const webpack = async (config, env) => config;

// list of globs & external urls
export const entries = [];

export const theme = {};

export const presets = [];
export const addons = [];

export const logLevel = 'info';

// eslint-disable-next-line no-unused-vars
export const managerWebpack = async (config, env) => {
  const { default: webpackMerge } = await import('webpack-merge');
  // const { default: PacktrackerPlugin } = await import('@packtracker/webpack-plugin');

  return webpackMerge(config, {
    plugins: [
      // new PacktrackerPlugin({
      //   project_token: '1af1d41b-d737-41d4-ac00-53c8f3913b53',
      //   upload: true,
      //   fail_build: true,
      // }),
    ],
  });
};

export const output = {
  location: './',
  compress: false,
  preview: true, // would enable/disable or set a custom location
};

export const server = {
  port: 1337,
  host: 'localhost',
  // static: {
  //   '/': 'assets',
  // },
  // ssl: {
  //   ca: [],
  //   cert: '',
  //   key: '',
  // },
  // middleware: async (app, server) => {},
};
