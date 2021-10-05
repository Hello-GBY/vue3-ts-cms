# vue3-ts-cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 配置editorconfig


### 1. 配置prettier

```
npm i prettier 
```
See https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true

### 2. 解决 eslint 和 prettier 冲突问题
npm i eslint-plugin-prettier eslint-config-prettier -D


### git 提交的时候 进行规范
```
npx husky-init && npm install
```
留坑 配置这个 vscode 内置的git 提交不好使
需要通过终端提交
git commit -m 'test01'

### 配置commitizen
```
npm i commitizen -D
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### 配置commitilint
```
 npm install --save-dev @commitlint/config-conventional @commitlint/cli
```
新建commit.config.js

执行
```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 通过 npx cz 提交
在package.json 中进行语义转换了


### vue.config.js 配置
See https://cli.vuejs.org/zh/config/
