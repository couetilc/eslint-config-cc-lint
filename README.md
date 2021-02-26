# eslint-config-cc

A collection of useful linting rules emphasizing correctness rather than style,
as a shareable [ESLint](https://eslint.org/) configuration.

## Usage / Installation

1) Install this package using `npm`.

```sh
npm i -d eslint-config-cc eslint eslint-plugin-node
```

2) Open or create an eslint configuration and add the property `extends: "eslint-config-cc-lint`.

```js
// file: .eslintrc.js
module.exports = {
  extends: ["cc"]
}
```

## Publishing

Steps to publish a new version of this package to NPM:

```sh
# 1. Increment the version number in `package.json`
git add package.json && git commit -m "bump version to X.X.X"
# 2. Push your updates to `master` branch at https://github.com/couetilc/eslint-config-cc
git push origin master
# 3. Create and publish a new release from the `master` branch
hub release create -t origin/master -m "vX.X.X" "vX.X.X"
```

Increment the package version number according to [Semantic Versioning](https://semver.org/).
A Github Action will publish the new version to [NPM](https://www.npmjs.com/package/eslint-config-cc-lint).
