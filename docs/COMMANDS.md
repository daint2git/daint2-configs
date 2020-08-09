# Commands

## [lerna](https://github.com/lerna/lerna)

- add

```bash
# packages/@daint2-config/eslint-config
lerna add some-pkg --scope=@daint2-config/eslint-config --dev

# add dependency to root -W: --ignore-workspace-root-check
yarn add some-pkg -W --dev
```

- create

```bash
lerna create @daint2-config/eslint-config --access=public --license=MIT
```

- publish

```bash
lerna publish --conventional-commits
```

## npm

- log in to a organization

```bash
npm login --scope=organization-name

# organization-name: daint2-configs
npm login --scope=daint2-configs
```

## git

- commit message

```bash
# type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]

git commit -m "docs: update root doc"

# package names as scopes
git commit -m "docs(eslint-config): update doc"
```
