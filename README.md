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

