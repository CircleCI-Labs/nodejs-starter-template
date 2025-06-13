const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();

/**
 * Hello command implementation
 */
function hello() {
  console.log(chalk.green('Hello from the starter template!'));
}

/**
 * Build command implementation
 */
function build() {
  console.log(chalk.blue('Building the application...'));
  // Simulate build logic
  setTimeout(() => {
    console.log(chalk.green('Build complete!'));
  }, 1000);
}

/**
 * Configure CLI commands
 */
program.name('starter-template').description('Starter Template CLI').version('0.1.0');

program.command('hello').description('Print a hello message').action(hello);

program.command('build').description('Simulate a build step').action(build);

module.exports = {
  program,
  hello,
  build,
};
