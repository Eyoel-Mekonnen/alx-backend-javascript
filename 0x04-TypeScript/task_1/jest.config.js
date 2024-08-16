module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Optionally, specify the location of your TypeScript config file
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};

