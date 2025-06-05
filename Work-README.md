<!--
 * @Descripttion: 周计划
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2025-04-30 15:42:29
 * @LastEditors: ~
 * @LastEditTime: 2025-06-05 18:08:04
-->
# 计划

## 通用型工具包：三控件（具体见模块化开发标准）

```bash
（合作项目 bus_*AC/SC/TRN,Dealer,seerAdmin,Datacenter）
◆ styles:*toolStyle、common、index-dashboard-module (variables）
◆ mixins:*tableMixin【tableMixinDome_Upload】,Upload,apiTemplate
◆ utils:*index
【update】
dealer:
toolStyle,tableMixin(apiTemplate)，utils
AC:
index-dashboard-module
IMChat:
apiTemplate,request.ts
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
1.0 添加在线医疗-在线问诊模块
1.1 预约管理
1.2 IM问诊
1.3 问诊病例
1.4 群管理二期功能
1.4.1 解决iframe控制父集方法
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
+ IM云信框架升级V9->v10
+ 实现跨域iframe（dealer4.1-IMChat5.2）和父窗口之间的通信
+ 优化中药处理校验问题（decoctionMethod，formulations）
+ 处理回复格式校验规则


1.4 商城模块-思尔商城小程序
1.4.1 分包处理
2.0 大屏BI智能系统
2.1 数据库配置
3.0 版本（bash内容样式升级）
4.0 大屏三控件集成
```

## 其他计划

```bash
# 云界面：实现动态接口fox改利调息
# 二建考试
```
