<!--
 * @Descripttion: 所有项目登记册
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2022-09-14 15:29:06
 * @LastEditors: ~
 * @LastEditTime: 2024-08-19 09:06:46
-->
# 综合大屏后台管理系统 2022-09-14 - 至今

```bash
# 所有项目登记册：仅在master,新项目会单独更新，集成到此文件对应位置
- 生产：https://seer-health.com/web/largeScreenXX/#/loginXX
- 测试：https://dev.seer-health.com/app/largeScreenXX/html/#/loginXX
- 演示：https://dev.seer-health.com/app/show/html/#/login （内部版本-不对外）
-       https://dev.seer-health.com/app/largeScreenShowXX/#/login
# 帐号
## 测试
- 15200000750/(1*6)
- 13600000000/(1*6)
- 15200000011/(1*6)
- 13300000000/(1*6)
- 18898436561/1
- 19900001000、admin/1*6
## 生产
- 13600000000/(1*6)
- 15200000011/1
- 15928711314/1-6
- 13684078465/1-6(经销商)
## 其他
- admin01-03/19876543211/15210000010/13510000066（1）
- admin(260814)/15200000011
- 无数据帐号：dataNull/000
- 演示账户：show/0
## 统计
- 18898436561/1 - 统计
## 广告
- 15200000011/1
- 15220202021-20/1
- 15200000020/15200000000
- 123123
```

## 项目开发

### 运行

```bash
# 启动前端服务

## 安装依赖
npm install
## 运行
- npm run dev
- http://localhost:x
```

### 发布

```bash
# npm run build
# 构建测试环境
npm run build:stage
# 构建生产环境
npm run build:prod
# 其他
# 预览发布环境效果
npm run preview
# 预览发布环境效果 + 静态资源分析
npm run preview -- --report
# 代码格式检查
npm run lint
# 代码格式检查并自动修复
npm run lint -- --fix
```

### 使用

### 代码提交

```bash
- * x
```

## 项目里程碑 2022-09-14 - 至今

### 项目(bus)明细

```bash
⭐ 分支日期规范
- master：启动 ~ 验收 (~ 维护)（即结尾也是创建分支日期）
⭐ 配置项：
- 示例图片：NULL_BG（默认无背景）
- 统计/广告：TYPE_TEMPLATE
- 每变更当下会备份一个分支
```

#### master_XX（master_devXX）:线上（测试） 2023-12-06 ~ 2024-07-30

```bash
# 环境
- 生产：https://seer-health.com/web/largeScreen(HO/CO)/#/login
- 测试：https://dev.seer-health.com/app/largeScreen(HO/CO)/html/#/login
# 信息
- 来源：master_devCR
master_XX（最终版本:2023-12-06 线上-子分支线上系统-最终版本）
master_devXX（开发版本:2023-12-06 开发测试-子分支层级系统-开发版本）
- 说明：项目版本模本化管理，各个项目独立存在，根据项目需求使用类似项目master分支建立master_XX（衍生分支master_XXn.0备用）部署，master_devXX具体开发与测试，进行单项目模块化管理，省去合并管理冲突与管理代码失控的风险
```

##### 1.Hospital（2023-12-06）: /indexDashboardHospital：医院

```bash
- master_HO 2023-12-06
```

##### 2.Community（2023-12-21）: 社区

```bash
# 总控
- master_CO (2023-12-21)
- master_devCO (2024-05-07)
# 版本
- master_CO1.0 2024-01-02
- master_CO2.0 2024-05-07
```

###### 2.1CityCommunity（2024-05-10）: 市区社区（西安）

```bash
# 总控
- master_CCO (2024-05-10)
- master_devCCO (2024-05-10) IMG
# 版本
- master_CCO1.0 2024-05-22
- master_CCO1.1 2024-05-27
⭐空数据默认存在背景
```

###### 2.2AssistanceCommunity（2024-07-19）: 三助社区

```bash
# 总控
- master_AC (2024-07-19)
* 来源：master_CCO
- master_devAC (2024-07-19) Done-Mock
# 版本
- master_AC1.0 2024-07-24
* 集万家之所长
* tableMarqueeSeamless优化返回值
* 图谱Assemble组合架构优化
- master_AC1.1 2024-07-24
* 优化样式
* 爱心助老服务预约优化
- master_AC1.2 2024-07-26
* 统一组件：Dashboard
* 样式优化
+ 集成toolStyle统一经销商后台
+ 通用型弹框样式优化
+ 添加关闭滚动样式
+ 后端界面优化app-container滚动条
+ 处理登录界面
+ 表单、大屏表单禁止状态优化
+ API初步优化
- master_AC1.3 2024-07-30
+ 自适应兼容样式优化
+ 处理关闭滚动样式bug
+ 样式统一化处理
- master_AC1.4 2024-07-xx
+ 样式优化
+ 优化tableMixin
- master_AC2.0 2024-08-14 ~ 2024-08-16 ~  2024-xx-xx
+ 项目迭代
+ 创建mock default独立创建
+ 一键处理说明措施
```

##### 3.Sinopec（2024-08-12）: 中石化

```bash
# 总控
- master_SC (2024-08-12)
* 来源：master_AC
- master_devSC (2024-08-12) IMG_DOM
# 版本
- master_SC1.0 2024-08-xx
+ ...
```

##### 4.TransitNew（2024-08-17）: 公交类

```bash
# 总控
- master_TRN (2024-08-19)
* 来源：master_AC
- master_devTRN (2024-08-17) IMG_DOM
# 版本
- master_TRN1.0 2024-08-17 ~ 2024-xx-xx ~ 2024-xx-xx
+ 大屏模块修改
```

#### master（master_dev）:线上（测试）2022-09-14 ~ 2024-05-22

```bash
# 环境
- 生产：https://seer-health.com/web/largeScreen/#/login
- 测试：https://dev.seer-health.com/app/largeScreen/html/#/login
- 演示：https://dev.seer-health.com/app/show/html/#/login （内部版本-不对外）
      https://dev.seer-health.com/app/largeScreenShow/#/login（show7.0: 20230203）
      https://dev.seer-health.com/app/largeScreenShow(n)/#/login（show(n).0: 2023-yy-dd）
# 信息
# 分支
master（最终版本:2022-09-14）
- master1.0 2023-12-04
⭐ 保留完整旧代码版本
- master2.0 2024-08-14
⭐ 集成分支master_devTR
⭐ 由于master_devCR进入DEV未进入Por，如果master_devCR最新舍弃，后期会根据master重构master_devCR
⭐ 公交改版：master_TR3.0
- master3.0 2024-08-06 ~ 2024-08-14 ~ 2024-xx-xx
⭐ 公交改版：master_TR4.0
# 版本继承
master_dev（开发版本:2024-05-22）
# 说明
- master作为未独立出项目的整合版本的最终版，防止之前地址变化，一般的master_dev作为测试开发版本，完毕后合并到master，多项目开发分支master_devXX（衍生于master）开发完毕，合并到master_dev测试上线，再合并到master作为最终版,除公交（暂定一个项目备用方便复用）其他不留多余备用代码文件，备用文件在分支（master_XXn.0）代码保存，
- master2.0之前作为完整版本，后期分支，在上面基础上，不保存多余过去旧代码
- XX：代表loginXX中的XX，注意和未来计划的分支独立项目master_XX区别，本master_XXn.0没有master_XX分支,但是有master_devXX分支，master_devXX分支就以下项目，其实作为统筹分支合并于master_dev，最终合并于master
- IMG：属于进行中，未合并到master
- DONE:完成状态，已经合并到master
```

##### 1.dashboard: /indexDashboard: 养老 -> login

##### 2.MTreatment: /indexDashboardMTreatment：中西医 -> loginMT

```bash
- master_MT1.0 2023-03-23（无锡）
```

##### 3.Creation:/indexDashboardCreation：融创医养 -> loginCR

```bash
# 开发版本
master_devCR 2023-12-06 (IMG)
# 分支
master_CR1.0 2023-03-01
master_CR2.0 2023-10-08
master_CR3.0 2023-11-16
master_CR4.0 2023-11-28
```

##### 4.Transit: /indexDashboardTransit：公交 -> loginTR、loginTRAdmin（含设备列表）

```bash
# 开发版本
master_devTR 2024-05-22 (DONE)
# 分支
master_TR1.0 2023-05-09
master_TR2.0 2023-12-04
master_TR2.1 2023-12-06
- 三维立体、水滴版本，未审核
master_TR3.0 2024-05-13
- 按照master_TR2.0修改
- 修改左上：添加驾驶员情绪监测模块
- 修改中上：添加今日出车驾驶员健康监测提醒模块
- 添加后台管理线路管理模块
master_TR4.0 2024-08-06 ~ 2024-08-14
- 合并master_devTRBS 2024-07-22:后台添加搜索选项
- 移除master_devTRBS分支
- 修改右上中：添加驾驶员活力值分析模块
- 修改详情：添加驾驶员活力值分析模块
- 修改后台管理系统：疲劳分心睡眠监测》活力分心睡眠监测
- 优化tableMixin
master_TR4.1
- 移至master_TRN
# 其他
master_TRHN: (海南)2023-05-08
```

###### 4.1show: 公交 loginTR 演示 Dome

```bash
- show：   公交8.0版本 2023-07-03
- show7.0：公交7.0版本 2023-02-15
- show6.0：公交6.0版本 2023-02-14
- show5.0：公交5.0版本 2023-02-13
- show4.0: 公交4.0版本 2023-02-08
- show3.0: 公交3.0版本 2023-02-08
- show2.0: 公交2.0版本 2023-02-03
- show1.0: 公交1.0版本 2022-10-08

- master_bus （busyk）: 公交系统
- online_provide（online_provideyk）: 地图/广告/空示例图片
```

##### 5.OnlineCar: /indexDashboardOnlineCar：网约车 -> loginOC

##### 6.Minerals: /indexDashboardMinerals：矿山 -> loginMI

```bash
- master_MI1.0 2023-07-17
- master_MI2.0 2023-08-04
- master_MI3.0 2023-08-31
- 帐号信息：经销商 02 -》 矿山健康管理机构 =》 矿工生命体征智能监测与预警系统
```

## 技术支持

```bash
- 基于 node "^16.20.2"
- 含有  DISCARD\AMore文件 标志即将废弃内容,禁止调用里面内容
- More: 备份文件,不会移除
- 备注MOCK是MOCK文件
- control：控制集成文件
```

### 相关Code

```bash
├── build # 构建相关
├── dist # 打包后的文件
├── public # 静态资源
│ │── favicon.ico # favicon 图标
│ └── index.html # html 模板
├── src # 源代码
│ ├── api # 所有请求
│ ├── assets # 主题 字体等静态资源
│ ├── components # 全局公用组件
│ ├── directive # 全局指令
│ ├── filters # 全局 filter
│ ├── icons # 项目所有 svg icons
│ ├── layout # 全局 layout
│ ├── router # 路由
│ ├── store # 全局 store 管理
│ ├── styles # 全局样式
│ ├── utils # 全局公用方法
│ ├── vendor # 公用 vendor
│ ├── views # views 所有页面
│ ├── App.vue # 入口页面
│ ├── main.js # 入口文件 加载组件 初始化等
│ ├── settings.js # 全局配置文件
│ └── permission.js # 权限管理
├── .env.xxx # 环境变量配置
├── .eslintrc.js # eslint 配置项
├── .babelrc # babel-loader 配置
├── vue.config.js # vue-cli 配置
├── postcss.config.js # postcss 配置
└── package.json # package.json
```

#### 提示

```js
//状态
- primary
- success
- warning
- danger
//message
this.$message.success('操作成功！')
this.$message.info('提示！')
this.$message.warning('提醒！')
this.$message.error('操作失败！')
//api
api({params  }).then((res) => {
      if (res.data === 1) {
      this.$message.success("xx！");
      } else if (res.code === 1) {
      this.$message.warning(res.msg);
      }
})
.catch((err) => {
      this.$message.error(err.message);
      console.error(err);
});
this.$nextTick(() => {});
//tool
 {{ $utils.toDateString(date) }}
//mock
let arr = [];
res.data.forEach((element,index) => {
      arr.push({
      ...element,
      });
});
console.log(arr);
```

### 交流

QQ 群：xx

![QQ群](x.png)

![渲染海报](x.png)
