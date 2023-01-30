
<br />

## 我 (juln)

2019年开始学前端, 2021年7月开始实习, 2022年毕业, 起步早, 且实际上实习期等效于正式员工（除了工资）

期望: 福建（最好是厦门）、前端工程师、不小于13k/月

联系方式:
- 微信: A1850021148
- Email: 1850021148@qq.com

## 技术栈

- react、typescript、next.js、node.js、remax
- 组件库开发
- 混合式开发
- 脚手架开发
- ...

## 技术文章

> 掘金首页: <https://juejin.cn/user/3905117742172269>

- [私有vscode插件的自动更新解决方案](<https://juejin.cn/post/7141662937420136479/>)
- ...

## 开源项目

> github首页: <https://github.com/z-juln>

#### 1. [update-vscode-extension](https://www.npmjs.com/package/update-vscode-extension) + [uvec](https://www.npmjs.com/package/uvec)

[私有vscode插件的自动更新解决方案](<https://juejin.cn/post/7141662937420136479/>)

#### 2. [np-guard](https://www.npmjs.com/package/np-guard)

工作流工具, npm publish 命令拦截器

谁使用过: 虎扑组件库、虎扑vscode插件

谁使用过: 虎扑vscode插件

#### 3. [pull-ejs-tpl](https://www.npmjs.com/package/pull-ejs-tpl)

快速构建支持生成模板的脚手架, 非常适用于创建项目模板和组件模板, 并生成目标代码

谁使用过: 虎扑vscode插件、虎扑代码模板仓库

#### 4. [npm2cjs](https://www.npmjs.com/package/npm2cjs)

将常见的其它格式的npm包转成cjs的npm包的cli, 支持自动发布到npm上等一系列功能

该cli的产物有: [chalk-cjs](https://www.npmjs.com/package/npm2cjs)等

#### 4. 给 [fighting-design](https://github.com/FightingDesign/fighting-design) 提过pr

- 新增了创建组件的脚本
- 加强了发布前的代码检查
- 新增了eslint、处理了eslint与prettier的冲突问题

#### ...

## 工作经历

### 虎扑(上海)文化传播股份有限公司 （ 2021年10月 至今 ）

#### 电竞重做(owner)

负责整个电竞业务的重做, 将原本的php项目用next.js重做。同时保证性能、错误监控等。

封装复用性高的组件并加入到组件库中。

开发期间遇到了部分机型的卡顿问题, 分析并改善了性能问题。

核心页面: [战队页](https://games.mobileapi.hupu.com/eg/list/team?type=lol&id=29)、[选手页](https://games.mobileapi.hupu.com/eg/list/player?type=lol&id=100) 、[战队榜](https://games.mobileapi.hupu.com/eg/list/kog/team)、[选手榜](https://games.mobileapi.hupu.com/eg/list/kog/team)、[英雄榜](https://games.mobileapi.hupu.com/eg/list/lol/score?night=1)、[前瞻](https://offline-download.hupu.com/online/prod/300002/prospect.html?game_type=kog&battle_id=2149)、[战报](https://offline-download.hupu.com/online/prod/300002/report.html?game_type=lol&battle_id=8291)...

#### m站重构

负责m站重构的部分工作: [步行街](https://m.hupu.com/gambia)、[评论区](https://m.hupu.com/bbs/55475766.html#master-discuss-section)和[电竞首页](https://m.hupu.com/gg)

封装复用性高的组件并加入到组件库中。

#### 小程序: 铁人短剧(owner)

短视频小程序. 使用remax开发. 解决了一系列性能问题. 核心为视频组件、支付功能等.

#### vscode插件(owner)

由于团队的不断进步, 旧的提效工具已经很不满足团队需求, 急需一个新的提效工具。

负责了整个vscode插件的设计和开发。

功能:
- 根据选项生成组件代码和项目代码: 基于我自己搞的新方案 [pull-ejs-tpl](https://www.npmjs.com/package/pull-ejs-tpl) 去实现, 维护代码模板和生成都非常容易
- css代码提示: 之前团队编写了一套样式库(有大量css变量和less\sass函数), 代码提示就是针对这个样式库来搞的, 支持css变量和函数的代码提示, 同时支持跳转到对应的定义位置
- 自动格式化蓝湖的css代码: 编写样式时需要用到大量的css变量, 所以不能直接用蓝湖生成的css代码, 但可以根据设计师在蓝湖上给的标记, 非常快速的生成对应的目标代码
- 自动更新该插件，定时监测新版本: 老板不同意将插件发布到vscode插件市场上去, 所以版本的自动更新就变得很麻烦, 于是我搞了新的一套方案 —— [私有vscode插件的自动更新解决方案](<https://juejin.cn/post/7141662937420136479/>)

在前端团队覆盖率100%，大大提高了团队的工作效率, 且前端老大(架构师)评价思路先进、维护性强、非常好用。

#### 其它项目

- 版主、版务相关项目
- 活动页
- 各种提效工具、cli等
- ...

### 福州畅读信息科技有限公司 （ 2021年7月 ~ 2021年10月 ）

负责 绩效后台管理系统(owner) 和 活动页

<br />
