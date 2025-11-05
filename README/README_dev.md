<!--
 * @Descripttion: xx[xx] (xxxx-xx-xx ~ xxxx-xx-xx)
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 20xx-xx-xx 10:07:00
 * @LastEditors: ~
 * @LastEditTime: 2025-11-05 16:54:33
-->
# xx:xx 20xx-xx-xx - xx20xx-xx-xx

```bash
# 功能
+ x
* ..
# URL
- 生产：x
- 测试：x
- 本地：http://localhost:xx
- xx/xx
```

## 项目开发

### 运行

```bash
# 启动后端服务
-  \x
- x

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
- npm run build:stage

# 构建生产环境
- npm run build:prod
```

### 使用

```shell
### xx 介绍
xxx（组件名称）
├── src 
│   └── components
│       └── IMApp // xx使用示例
│   └── APP.vue // 项目入口

# 所有的接口地址位置：`src\api\path\*`
# 接口地址修改：`.env`
# port
VITE_DEV_PORT = 'x'
# development path
VITE_DEV_PATH = 'http://127.0.0.1:x'
# production path
VITE_PRO_PATH = 'http://127.0.0.1:x'
# 公共前缀修改：`src\settings\httpSetting.ts`
# 请求前缀
export const axiosPre = '/api/goview'
# 接口封装：`src\api\http.ts`
```

### 代码提交

```bash
- * x
```

## 项目里程碑 20xx-xx-xx ~

### 项目(xx)明细

```bash
# 总控
- master(master-dev): 20xx-xx-xx 状态
- master[20xx-xx-xx]: xx-dev[20xx-xx-xx] 状态
* 来源：xx
# 版本
## eg: master-devx.0: 20xx-xx-xx ~ 20xx-xx-xx (原始版本)
或者
## eg: masterx.0: 20xx-xx-xx ~ 20xx-xx-xx (原始版本)
+ xx
* 子x
## eg: masterx.1: 20xx-xx-xx ~ 20xx-xx-xx (开发版本) 
## eg: masterx.2: 20xx-xx-xx ~ 20xx-xx-xx (发布版本) DONE
## eg: masterx.3: 20xx-xx-xx ~ 20xx-xx-xx (维护版本)

⭐ 配置项
- 每变更当下会备份一个分支
⭐ 状态说明
- ING: 属于进行中，未合并到master
- DONE: 完成状态，已经合并到master
- DONEMOCK: 完成状态，仅是模拟数据
- PAUSE: 暂停状态
- CHARGE: 收费
```

## 技术支持

### 开发技术说明

```bash
- 基于 xxx "^xx"
- 含有 DISCARD\AMore 文件 标志即将废弃内容,禁止调用里面内容
* More: 备份文件,不会移除
* MOCK: MOCK文件
* control: 控制集成文件
* updateNewRemove: 替代者 新项目移除此方式
- 一般的：x.0(原始篇)，x.1(开发版本)，x.2 (发布版本)DONE，x.3 (维护篇)
* 新迭代项目需要进行备份分支x.x.1
```

### 相关Code

```js
//部署环境不能写的格式
- template包含?.符号
//message
//type: 状态
- primary
- success
- warning
- danger
this.$message({
    type,
    message: msg,
});
this.$message.success('操作成功！')
this.$message.info('提示！')
this.$message.warning('提醒！')
this.$message.error('操作失败！')
//api
this.loading = true;
api({params  }).then((res) => {
    if (res.data === 1) {
        this.$message.success("xx！");
    } else if (res.code === 1) {
        this.$message.warning(res.msg);
    }
})
.catch((err) => {
    //api已经处理不需要 console.error(err); this.$message.error(err.message);
    this.loading = false;
});
this.$nextTick(() => {});
//tool
 {{ $utils.toDateString(date) }}
 {{ sexSwitch(scope.row.gender) }}
 {{ age_cofig(scope.row.birthday) }}
```

### 交流

```bash
QQ 群：xx

![QQ群](x.png)

![渲染海报](x.png)
```
