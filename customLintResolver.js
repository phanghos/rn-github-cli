/* eslint-disable */
const resolve = require('resolve');
// const path = require('path');
const chalk = require('chalk');

const log = console.log;

const deepComponentRegex = /^@screens\/(?<group1>.*)\/(?<group2>components|hooks)\/(?<group3>.*)/;

exports.interfaceVersion = 2;

exports.resolve = function (source, file, config) {
  log('Resolving:', source, 'from:', file, '\n');
  let resolvedPath;

  try {
    const match = source.match(deepComponentRegex);
    const groups = match ? match.groups : {};

    resolvedPath = resolve.sync(
      `${__dirname}/src/screens/${groups.group1}/${groups.group2}/${groups.group3}`,
      { extensions: ['.js'], basedir: __dirname },
    );
    console.group(chalk.green('Resolved\n'));
    log(chalk.green(source), chalk.red('to'), chalk.green(resolvedPath), '\n');
    console.groupEnd();
    return { found: true, path: resolvedPath };
  } catch (err) {
    log('resolve threw error:', err);
    return { found: false };
  }
};
