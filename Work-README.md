<!--
 * @Descripttion: 周计划
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2025-04-30 15:42:29
 * @LastEditors: ~
 * @LastEditTime: 2025-07-22 10:31:18
-->
# 计划

## 通用型工具包：三控件（具体见模块化开发标准）

```bash
（合作项目 bus_*TA/AW/AC/SC/TRN,Dealer,seerAdmin,Datacenter）
◆ styles:*toolStyle、common、index-dashboard-module (variables）
- 使用流程
+ 添加variables
+ vue.config配置alias，prependData
◆ utils:*index(help)
◆ mixins:*tableMixin【tableMixinDome_Upload】,Upload,apiTemplate
【update】TA【改动交大尤其中部，如有新项目，类似旧项目优先旧项目，再去迭代新项目，否则用此最新】
## DialogWarningReminder: 异常提示
## styles:
+ common
+ 优先处理styles>variables
* assets:重构
* toolStyle:舍弃fz命名使用fc
* index-dashboard-module(variables:$box-width;~@/assets/dash-board/box/box;添加el-table-bg)
## help:
+ mock(index.js  mockData.js移入mock文件index)
+ requestWebUI
+ utils
+ index.js
## utils
## mixins: tableMixin(apiTemplate)：request.js
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
* 2.1.1版本requestWebUI异常处理
* 循环依赖：检查是否存在模块间循环引用,导致无法使用以下方式
export const getCustomTimes = (param) => {
  return param;
};
3.1 解决导入无法使用问题(master_TA2.1.1)
4.0 开发master_EnOC：国际化社区
```

## 预期计划

```bash
0.0 更新同步（styles、mixins、utils三控件）
1.0 经销商系统 dealer
1.1 经销商系统界面维护与修复处理
1.1.1 修改密码-updatePassword未校验
1.2 经销商系统框架维护与技术支持
1.3 医生模块
1.3.1 数据大屏管理中心（大屏模块化） datacenter
1.3.1.1 医生审核列表-新增上传图片异常
1.3.2 云信 IMChat
+ 实现跨域iframe（dealer4.1-IMChat5.2）和父窗口之间的通信
+ 优化中药处理校验问题（decoctionMethod，formulations）
+ 处理回复格式校验规则
+ 二期IM云信框架升级V9->v10（DONE）
+ 部署master-dev6.1


1.4 商城模块-思尔商城小程序
1.4.1 分包处理
2.0 大屏BI智能系统
2.1 数据库配置
3.0 版本（bash内容样式升级）
4.0 大屏三控件集成
4.1 requestWebUI的工厂化使用
5.0 magic-api
5.1 函数，定时器的应用
5.2 解决数据存储问题： cardClaimRecord 代金券基数
```

## 其他计划

```bash
# 云界面：替代亚马逊
# 二建考试
# D:\软件\Office
```
