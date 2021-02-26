# eslint-config-cc-lint

A collection of useful linting rules emphasizing correctness rather than style,
as a shareable eslint configuration.

## Usage

### Default configuration

1) Install this package using `npm`.

```sh
npm i -d eslint-config-cc-lint eslint eslint-plugin-node
```

2) Open or create an eslint configuration and add the property `extends: "eslint-config-cc-lint`.

```js
// file: .eslintrc.js
module.exports = {
  extends: ["cc-lint"]
}
```

### React configuration

1) Install this package using `npm`.

```sh
npm i -d eslint-config-cc-lint eslint eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

2) Open or create an eslint configuration and add the property `extends: "eslint-config-cc-lint/react`.

```js
// file: .eslintrc.js
module.exports = {
  extends: ["cc-lint/react"]
}
```

## Publishing

Steps to publish a new version of this package to NPM:

```sh
# 1. Increment the version number in `package.json`
git add package.json && git commit -m "bump version to x.x.x"
# 2. Push your updates to `master` branch at https://github.com/couetilc/eslint-config-cc-lint
git push origin master
# 3. Create and publish a new release from the `master` branch
hub release create -t origin/master -m "x.x.x" "x.x.x"
```

Increment the package version number according to [Semantic Versioning](https://semver.org/).
A Github Action will publish the new version to [NPM](https://www.npmjs.com/package/eslint-config-cc-lint).
