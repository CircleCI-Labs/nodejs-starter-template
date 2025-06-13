#!/usr/bin/env node

/**
 * CLI Entry Point
 *
 * This file serves as the main entry point for the CLI application.
 * Equivalent to Python's __main__.py
 */

const { program } = require('./cli');

// Parse command line arguments and execute
program.parse(process.argv);
