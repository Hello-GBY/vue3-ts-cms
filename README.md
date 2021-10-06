# vue3-ts-cms

## Project setup

```
npm install
```

### 启动项目

```
npm run serve
```

### 打包项目

```
npm run build
```

### 全局格式化

```
npm run lint
```
### 提交代码

```
npm run commit
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
 新建commit.config.js
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 配置 npx cz 提交
在package.json 中进行语义转换了


### vue.config.js 配置
See https://cli.vuejs.org/zh/config/

### 集成 element-plus





### 采坑
## 在ts文件中引入外部模块的时候报错，
在打vscode时会提示 一个以下内容的弹窗 选 disable 即可
A package.json file is detected in the project. This project may be a Node.js project. Do you want to disable this extension?

