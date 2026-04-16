<!--
 * @Descripttion: 周计划
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2025-04-30 15:42:29
 * @LastEditors: ~
 * @LastEditTime: 2026-04-14 15:40:23
-->
# 计划

## 通用型工具包：三控件（具体见模块化开发标准）

```bash
（合作项目 bus_TA/AW/AC/SC/TRN,*Dealer,✔mini-program-uniapp,seerAdmin,Datacenter,IMChatTencent）
◆ styles:*toolStyle、common、index-dashboard-module (variables）
- 使用流程
+ 添加variables
  $fz -> $f_
+ vue.config配置alias，prependData
◆ utils:*index(help)
## help:
+ mock(index.js  mockData.js移入mock文件index)
+ requestWebUI
+ utils
+ index.js
◆ mixins:*tableMixin【tableMixinDome_Upload】,Upload,apiTemplate

【update】TA【改动交大尤其中部，如有新项目，类似旧项目优先旧项目，再去迭代新项目，否则用此最新】
## DialogWarningReminder: 异常提示
## 其他
+ 后台系统mock数据逻辑处理：tableMixin处理
* 路线管理mock逻辑处理
## mini-program-uniapp
◆ styles: 遮罩
## SmartScreen：通用型CDN工具类方法调研
```

## 周计划

```bash
+ 患者：
* 13149218678/1-6（*文歌）
* 15200000000/1*6（布控-IM徐伟）✔
* 13359254117/1*6(王洁-IM侯浩军)
+ 医生：
* 17398675387/1-6（郝敏）
* 15200000222/1*6（王辉）
* 15200000011/1-6（王英文）
* 15200000119/1*6(李长安-中医） call✖ 账户问题
* 15200009170/1*6（曹秀梅9170-中医） ✔
1.0 云信 IMChat
2.0 开发master_AW：AI智能穿戴健康中心
- https://www.cnblogs.com/hiayap/p/17264463.html
* scroll_close：防止事件被禁止被注释，但是存在点击会触发滚动
3.0 开发master_TA：出租车类
* 循环依赖：检查是否存在模块间循环引用,导致无法使用以下方式
export const getCustomTimes = (param) => {
  return param;
};
3.1 解决导入无法使用问题(master_TA2.1.1)
4.0 开发master_EnOC：国际化社区bugge处理
5.0 模块开发：通过工具让夜神模拟器的app的接口访问模拟的数据？
5.1 AppHealth：less的集成
5.2 小程序开发：思尔模块小程序：商城（20251203-20260209）
5.2.1 框架处理
✅ 分包处理
✔  解决vendor.js占用过大问题
✔  pinia持久化auth_data处理
✔  统一存储方式utils -> store
5.2.2 
5.2.2.1 商城模块开发
+ 确认订单：活动须知弹框?
+   支付模块开发与联调：仅支持小程序，其他预留支付
✔  消息：通知/异常/体质/风险/亲友界面开发与接口联调 (90%)
- http://localhost/#/pages/pageSub/mall/order/evaluation/index?id=8e6bc8b56f694b5e894e45a466fd7735
5.2.2.2 首页模块开发ING
+ 轮播，健康服务？，健康互动，我的指标，健康管理？，便民生活
+ 默认跳转首页
+   微信版本兼容处理：
✔   商城兼容处理
✔   消息兼容处理
5.2.3 团队管理
✔  git每日提交与合并同步
6.0 Dealer 三控件更新
7.0 其他计划




⭐ 状态说明
- ING: 属于进行中，未合并到master
- DONE: 完成状态，已经合并到master
- DONEMOCK: 完成状态，仅是模拟数据
- PAUSE: 暂停状态
```

## 预期计划

```bash
0.0 更新同步（styles、mixins、utils三控件）
+ tableMixin兼容Vue3.0
* this.$message
* 调用querySearchList
1.0 经销商系统 dealer
1.1 经销商系统界面维护与修复处理
1.2 经销商系统框架维护与技术支持
1.2.1 main utils:无法定义待处理
1.2.2 迭代：
1.2.2.1 售后管理/维修工单列表迭代：按钮显示的逻辑
2. 医生模块
2.1 seerAdmin 数据管理中心 
2.2 医生审核列表-新增上传图片异常
2.3 合并三控件
3.0 大屏BI智能系统
3.1 数据库配置
4.0 大屏三控件集成
4.1 requestWebUI的工厂化使用
5.0 magic-api
5.1 函数，定时器的应用
5.2 解决数据存储问题： cardClaimRecord 代金券基数
```

## 其他计划

```bash
# 云界面：替代亚马逊
# D:\软件\Office
# md目录更新化
# 备份全局：.gitconfig
# GeneralTool:通用型工具更新
- 原则：通用型与项目按需更新
```
