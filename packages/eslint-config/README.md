# `@daint2-configs/eslint-config`

My eslint config

## Installation

```bash
yarn add eslint prettier typescript @daint2-configs/eslint-config --dev
```

## Usage

- default (base + jest)

```bash
{
  "extends": ["@daint2-configs/eslint-config"]
}
```

- base only

```bash
{
  "extends": ["@daint2-configs/eslint-config/dist/base"]
}
```

- typescript only

```bash
{
  "extends": ["@daint2-configs/eslint-config/dist/typescript"]
}
```

- jest only

```bash
{
  "extends": ["@daint2-configs/eslint-config/dist/jest"]
}
```

- react only

```bash
{
  "extends": ["@daint2-configs/eslint-config/dist/react"]
}
```

- vue only

```bash
{
  "extends": ["@daint2-configs/eslint-config/dist/vue"]
}
```
