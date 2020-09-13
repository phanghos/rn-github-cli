/* eslint-disable */
const resolve = require('resolve');
const chalk = require('chalk');

const logger = console.log;

const regexpList = [
  {
    regexp: /^@components$/,
    pathToResolve: () => `${__dirname}/src/components/index.js`,
  },
  {
    regexp: /^@components\/(?<name>.*)/,
    pathToResolve: groups => `${__dirname}/src/components/${groups.name}`,
  },
  {
    regexp: /^@screens$/,
    pathToResolve: () => `${__dirname}/src/screens/index.js`,
  },
  {
    regexp: /^@hooks\/(?<name>.*)/,
    pathToResolve: groups => `${__dirname}/src/hooks/${groups.name}`,
  },
  {
    regexp: /^@context\/(?<name>.*)/,
    pathToResolve: groups => `${__dirname}/src/context/${groups.name}`,
  },
  {
    regexp: /^@constants/,
    pathToResolve: () => `${__dirname}/src/constants`,
  },
  {
    regexp: /^@api/,
    pathToResolve: () => `${__dirname}/src/api/ApiService`,
  },
  {
    regexp: /^@screens\/(?<group1>.*)\/(?<group2>components|hooks)\/(?<group3>.*)/,
    pathToResolve: groups =>
      `${__dirname}/src/screens/${groups.group1}/${groups.group2}/${groups.group3}`,
  },
];

exports.interfaceVersion = 2;

exports.resolve = function (source, file, config) {
  const { extensions = ['.js'], debug = false } = config;
  let pathToResolve,
    resolvedPath,
    match,
    foundMatch = false;

  const log = (msg, params) => {
    debug && logger(msg, ...params);
  };

  // log('Resolving:', [source, 'from:', file, '\n']);

  try {
    for (let i = 0; i < regexpList.length && !foundMatch; i++) {
      const { regexp, pathToResolve: path } = regexpList[i];
      match = source.match(regexp);

      if (match) {
        foundMatch = true;
        pathToResolve = path;
      }
    }

    if (!foundMatch) {
      return { found: false };
    }

    resolvedPath = resolve.sync(pathToResolve(match.groups), {
      extensions,
      basedir: __dirname,
    });
    log(chalk.blue('Resolved'), [
      chalk.green(source),
      chalk.blue('to'),
      chalk.green(resolvedPath.replace(__dirname, '')),
      '\n',
    ]);
    return { found: true, path: resolvedPath };
  } catch (err) {
    log('resolve threw error:', err);
    return { found: false };
  }
};
