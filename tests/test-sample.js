const { hello } = require('../src/starter-template/cli');
const chalk = require('chalk');

// Mock console.log to capture output
let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  consoleSpy.mockRestore();
});

describe('CLI Commands', () => {
  test('hello command should print greeting message', () => {
    hello();

    expect(consoleSpy).toHaveBeenCalledWith(
      chalk.green('Hello from the starter template!')
    );
  });
});
