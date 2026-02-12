<!--
 * @Descripttion: 周计划
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2025-04-30 15:42:29
 * @LastEditors: ~
 * @LastEditTime: 2026-02-12 17:42:06
-->
# 计划

## 通用型工具包：三控件（具体见模块化开发标准）

```bash
（合作项目 bus_TA/AW/AC/SC/TRN,*Dealer,seerAdmin,Datacenter,IMChatTencent）
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
5.0 模块开发：
5.1 AppHealth：less的集成
5.2 小程序开发：思尔模块小程序：商城（20251203-20260209）
5.2.1 框架处理
✅ 分包处理
✔  解决vendor.js占用过大问题
✔  pinia持久化auth_data处理
5.2.2 商城模块开发
✔  +NavBar通用组件开发：添加中间，右标签插槽
+   showModal提示框逻辑处理
✔  +商城首页-产品区域模块接口逻辑处理优化联调
✔  +商城首页-精选商品模块接口逻辑处理优化联调
✔  商品详情模块开发：
✔  商品详情价位展示接口联调
+  商品详情内容模块接口联调：类型款式处理 ing
✔  +商品详情评论接口联调
✔  商品详情（元素定位）模块开发
✔  商品详情：添加购物车接口联调
✔  我的订单：订单类型，订单状态，商品内容，商品类型：商品状态/商品展示/价位类型/操作状态，思尔商城，思尔药房，在线问诊，物流信息界面开发
✔  订单核销：核销，详情，核销弹框，提醒续费，活动进度界面开发与接口联调[123789456]
✔  商品购物车模块接口联调：列表，选择，更新数量，删除接口联调
+   收货地址：选择收货地址增删改查界面开发与接口联调,所在地区逻辑处理
+   确认订单：代金券，余额支付，补贴金抵扣，提交订单界面开发与接口联调
✔  搜索界面开发与接口联调
+   支付模块开发与联调：仅支持小程序，其他预留支付
+   微信版本兼容处理
✔  统一存储方式utils -> store




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
1.3 医生模块
1.3.1 seerAdmin 数据管理中心 
1.3.1.1 医生审核列表-新增上传图片异常
1.3.1.2 合并三控件
1.4 main utils:无法定义待处理
1.5 商城模块-思尔商城小程序
1.5.1 分包处理
1.6 迭代：
1.6.1 售后管理/维修工单列表迭代：按钮显示的逻辑
2.0 大屏BI智能系统
2.1 数据库配置
3.0 datacenter 数据大屏管理中心（大屏模块化）：样式升级
4.0 大屏三控件集成
4.1 requestWebUI的工厂化使用
5.0 magic-api
5.1 函数，定时器的应用
5.2 解决数据存储问题： cardClaimRecord 代金券基数
6.0 收集开发项目可视化连接地址
7.0 IMT：无法复制换行内容
```

## 其他计划

```bash
# 云界面：替代亚马逊
# D:\软件\Office
# md目录更新化
# 备份全局：.gitconfig
```
