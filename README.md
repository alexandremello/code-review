# Code Review Checklist

## Implementation
[ ] File names
[ ] Class names
[ ] Package-lock.json when using yarn
[ ] package-lock.json or yarn.lock after add new npm module
[ ] Package.json dependency version is fixed
[ ] There is Yarn-error.log commited?
[ ] Do the class use variables outside of its scope?
[ ] Are all dependencies being injected on the constructor/method?
[ ] Are all possible exceptions being handled?
[ ] There are functions declared outside of the class scope?
[ ] Are all environment variable being read from ‘config’ file?
[ ] Is there any error prone code?

## Unit Test
[ ] Are the unit test covering each method?
[ ] Are the unit test covering error cases?
[ ] Are the unit test covering all decision branches?
[ ] Are all dependencies being mocked?

## Code patterns to be avoided
[ ] Do not concatenate URL by hand;
[ ] Do not separate PROTOCOL or PORT from URL;
[ ] Do not use default values for Environment Variables;
[ ] Do not rely on environment `if env === 'prd'`;
[ ] Unit test must not rely on environment variable;
[ ] Always use .catch when using promises;
