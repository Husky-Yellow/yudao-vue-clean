# Mock 数据说明

本目录包含了项目的 Mock 数据配置文件，用于在开发环境中模拟后端API响应。

## 文件结构

- `user.ts` - 用户相关的 Mock 数据（登录、用户信息、用户列表、短信验证码等）
- `tenant.ts` - 租户相关的 Mock 数据（租户查询、租户套餐等）
- `job.ts` - 定时任务相关的 Mock 数据（任务列表、日志列表、任务操作等）
- `system.ts` - 系统基础功能的 Mock 数据（字典数据、验证码等）

## Mock 接口列表

### 用户认证相关
- `POST /system/auth/login` - 用户登录
- `POST /system/auth/sms-login` - 短信验证码登录
- `POST /system/auth/send-sms-code` - 发送短信验证码
- `POST /system/auth/refresh-token` - 刷新访问令牌
- `POST /system/auth/logout` - 退出登录
- `GET /system/auth/get-permission-info` - 获取用户权限信息

### 用户管理
- `GET /system/user/page` - 用户列表（分页）

### 租户管理
- `GET /system/tenant/get-id-by-name` - 根据租户名获取租户ID
- `GET /system/tenant/get-by-website` - 根据域名获取租户信息
- `GET /system/tenant/page` - 租户列表（分页）
- `GET /system/tenant-package/simple-list` - 租户套餐简单列表

### 定时任务
- `GET /infra/job/page` - 定时任务列表（分页）
- `GET /infra/job-log/page` - 调度日志列表（分页）
- `POST /infra/job/create` - 创建定时任务
- `PUT /infra/job/update` - 更新定时任务
- `DELETE /infra/job/delete` - 删除定时任务
- `PUT /infra/job/trigger` - 手动触发任务
- `PUT /infra/job/update-status` - 更新任务状态

### 系统基础
- `GET /system/dict-data/simple-list` - 字典数据列表
- `GET /system/dict-type/page` - 字典类型列表（分页）
- `GET /system/captcha/get-image` - 获取图形验证码

## 如何使用

Mock 服务已经配置在 Vite 中，通过环境变量 `VITE_USE_MOCK` 控制启用状态：

- `VITE_USE_MOCK=true` - 启用Mock数据
- `VITE_USE_MOCK=false` - 使用真实API

当启用Mock时，匹配的API请求会被自动拦截并返回模拟数据。

## 如何添加新的 Mock 接口

1. 在对应的文件中添加新的 Mock 配置，或创建新的 `.ts` 文件
2. 使用 `MockMethod` 类型定义接口
3. 配置 `url`、`method` 和 `response` 函数
4. 使用 `Mock.js` 生成随机数据

例如：
```typescript
{
  url: '/your/api/path',
  method: 'get',
  response: ({ query, body }: any) => {
    return {
      code: 0,
      data: Mock.Random.string('lower', 32),
      msg: '成功'
    }
  }
}
```

## 数据格式

所有 Mock 数据都遵循统一的响应格式：
```typescript
{
  code: 0,     // 0表示成功，其他值表示错误
  data: any,   // 响应数据
  msg: string  // 响应消息
}
```

## 特色功能

- **智能租户识别**: 根据租户名称自动返回对应的租户ID
- **真实数据模拟**: 使用Mock.js生成符合业务逻辑的随机数据
- **完整权限数据**: 包含完整的菜单权限和按钮权限数据
- **支持查询参数**: 可根据请求参数动态返回不同数据