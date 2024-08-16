import globals from "globals";

export default [
  {
    env: {
      browser: true,  // Enables browser globals
      node: true      // Enables Node.js globals
    },
    globals: {
      myGlobal: true  // Example of manually adding a global variable
    },
    rules: {
      'no-unused-vars': 'off',  // Disabling specific rules
      'eqeqeq': 'warn'          // Setting specific rules to 'warn'
    }
  }
];
