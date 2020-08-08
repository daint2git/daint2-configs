# daint2-configs

Monorepo for all configs to support my projects

## [lerna](https://github.com/lerna/lerna)

1. add

```bash
# packages/@daint2-config/eslint-config
lerna add some-pkg --scope=@daint2-config/eslint-config --dev

# add dependency to root -W: --ignore-workspace-root-check
lerna add some-pkg -W --dev
```

2. create

```bash
lerna create @daint2-config/eslint-config --access=public --license=MIT
```

3. publish

```bash
lerna publish --conventional-commits
```
