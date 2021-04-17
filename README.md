# eslint-config-cc-lint

A collection of useful linting rules emphasizing correctness rather than style,
as a shareable [ESLint](https://eslint.org/) configuration.

## Usage / Installation

1) Install this package using `npm`.

```sh
npm install --save-dev eslint-config-cc-lint eslint eslint-plugin-node
```

2) Open or create an eslint configuration and add the property `extends: "eslint-config-cc-lint`.

```js
// file: .eslintrc.js
module.exports = {
  extends: ["cc-lint"]
}
```

## Publishing

Steps to publish a new version of this package to NPM:

```sh
# 1. Increment the version number in `package.json`
git add package.json && git commit -m "bump version to X.X.X"
# 2. Push your updates to `main` branch at https://github.com/couetilc/eslint-config-cc-lint
git push origin main
# 3. Create and publish a new release from the `main` branch
hub release create -t origin/main -m "vX.X.X" "vX.X.X"
```

Increment the package version number according to [Semantic Versioning](https://semver.org/).
A Github Action will publish the new version to [NPM](https://www.npmjs.com/package/eslint-config-cc-lint).
