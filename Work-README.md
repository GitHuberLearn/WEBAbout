<!--
 * @Descripttion: 周计划
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2025-04-30 15:42:29
 * @LastEditors: ~
 * @LastEditTime: 2025-05-22 13:40:13
-->
# 通用型工具包：三控件（具体见模块化开发标准）

```bash
（合作项目 bus_*AC/SC/TRN,Dealer,seerAdmin,Datacenter）
◆ styles：*toolStyle、common、index-dashboard-module (variables）
◆ mixins：*tableMixin【tableMixinDome_Upload】,Upload,apiTemplate
◆ utils：*index
【update】
dealer：
toolStyle，tableMixin(apiTemplate)，utils
AC:
index-dashboard-module
```

# 周计划

```bash
+ 患者：
* 13149218678/1-6（*文歌）
* 15200000000/1*6（布控）
+ 医生：
* 17398675387/1-6（郝敏）
* 15200000222/1*6（王辉）
* 15200000011/1-6（王英文）
1.0 添加在线医疗-在线问诊模块
1.1 预约管理
1.2 IM问诊
1.3 问诊病例
1.4 群管理二期功能
1.4.1 解决iframe控制父集方法
```

# 预期计划

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
1.3.2.1 IM云信框架升级V9->v10
1.3.2.2 gotoChat 👉 insertSessionActive （V9指定单聊会话：https://doc.yunxin.163.com/docs/interface/messaging/web/typedoc/UIKit/Latest/zh/modules.html）
1.3.2.3 实现跨域iframe（dealer4.1-IMChat5.2）和父窗口之间的通信
1.3.2.4 移除结束问诊冗余模块
1.3.2.5 添加中药处理校验问题（decoctionMethod，formulations）
1.3.3 imConsultation:itemData冗余传值(目前只需要userId)

1.4 商城模块-思尔商城小程序
1.4.1 分包处理
2.0 大屏BI智能系统
2.1 数据库配置
3.0 版本（bash内容样式升级）
4.0 大屏三控件集成
```

# 其他计划

```bash
1.0 云界面：实现动态接口改利调息
2.0 考卷2020下 changeway
+ ✔整合，✔质量，✔范围，交付绩效域
+ 完成：杨科-3.2-论信息系统项目整合管理（改后-终结版本）
+ 模拟练习平台开放时间：2025年5月13日9:00至5月23日17:00


根据历年软考高项信息系统项目管理师评分标准
1. 无需摘要
2. 2400-2600字以内
2.1 段前概括（独特）
3. 体现深度易懂的场景：比如具体输入工具输出+作用意义
3.1 工具：真实应用场景案例，不能罗列，最好阅读人会意会到使用过程是什么工具（2-4个）
3.2 写工件（文档）写清楚真实项目数据过程和数据理论支持且有一定应用深度
3.3 流程突出重点叙述（实际案例）
4. 软硬件结合，软件 > 50%
5. 预防 > 问题(合理解决)
根据此文件第一页的题目试题内容要求，批改润色生成一个高达60分以上的"论信息系统项目的质量管理"的优秀论文
```
