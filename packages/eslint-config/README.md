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
  "extends": ["@daint2-configs/eslint-config/base"]
}
```

- typescript only

```bash
{
  "extends": ["@daint2-configs/eslint-config/typescript"]
}
```

- jest only

```bash
{
  "extends": ["@daint2-configs/eslint-config/jest"]
}
```

- react only

```bash
{
  "extends": ["@daint2-configs/eslint-config/react"]
}
```

- vue only

```bash
{
  "extends": ["@daint2-configs/eslint-config/vue"]
}
```

- vue + typescript

```bash
{
  "extends": ["@daint2-configs/eslint-config/vue-and-typescript"]
}
```
