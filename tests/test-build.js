const { build } = require('../src/starter-template/cli');
const chalk = require('chalk');

// Mock console.log to capture output
let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  consoleSpy.mockRestore();
});

describe('Build Command', () => {
  test('build command should start build process', () => {
    build();

    expect(consoleSpy).toHaveBeenCalledWith(chalk.blue('Building the application...'));
  });

  test('build command should complete build process', done => {
    build();

    // Wait for async completion
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(chalk.green('Build complete!'));
      done();
    }, 1100);
  });
});
