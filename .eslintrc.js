module.exports = {
  env: {
    browser: false,
    node: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'commonjs',
  },
  rules: {
    // Error prevention
    'no-console': 'off', // Allow console.log in CLI apps
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-undef': 'error',
    
    // Code style
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    
    // Best practices
    'no-implicit-globals': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
  },
}; 