import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  // 用户登录
  {
    url: '/admin-api/system/auth/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          accessToken: Mock.Random.string('lower', 32),
          refreshToken: Mock.Random.string('lower', 32),
          userId: 1,
          userType: 2,
          expiresTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        },
        msg: '登录成功'
      }
    }
  },
  // 获取用户信息
  {
    url: '/admin-api/system/auth/get-permission-info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          user: {
            id: 1,
            username: 'admin',
            nickname: '管理员',
            email: 'admin@example.com',
            mobile: '18888888888',
            sex: 1,
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            status: 0,
            loginIp: '127.0.0.1',
            loginDate: new Date(),
            createTime: new Date(),
            deptId: 1,
            postIds: [1, 2],
            socialUsers: [],
            remark: null
          },
          roles: ['super_admin'],
          permissions: [
            'system:user:list',
            'system:user:create',
            'system:user:update',
            'system:user:delete',
            'system:role:list',
            'system:role:create',
            'system:role:update',
            'system:role:delete',
            'system:menu:list',
            'system:menu:create',
            'system:menu:update',
            'system:menu:delete',
            'infra:job:list',
            'infra:job:create',
            'infra:job:update',
            'infra:job:delete',
            'infra:job:trigger',
            'infra:job:export'
          ],
          menus: [
            {
              id: 1,
              name: '系统管理',
              permission: '',
              type: 1,
              sort: 10,
              parentId: 0,
              path: '/system',
              icon: 'ep:tools',
              component: '',
              status: 0,
              visible: true,
              keepAlive: true,
              createTime: '2021-01-05T17:03:48',
              children: [
                {
                  id: 100,
                  name: '用户管理',
                  permission: 'system:user:list',
                  type: 2,
                  sort: 1,
                  parentId: 1,
                  path: 'user',
                  icon: 'ep:avatar',
                  component: 'system/user/index',
                  status: 0,
                  visible: true,
                  keepAlive: true,
                  createTime: '2021-01-05T17:03:48'
                },
                {
                  id: 101,
                  name: '角色管理',
                  permission: 'system:role:list',
                  type: 2,
                  sort: 2,
                  parentId: 1,
                  path: 'role',
                  icon: 'ep:user',
                  component: 'system/role/index',
                  status: 0,
                  visible: true,
                  keepAlive: true,
                  createTime: '2021-01-05T17:03:48'
                },
                {
                  id: 102,
                  name: '菜单管理',
                  permission: 'system:menu:list',
                  type: 2,
                  sort: 3,
                  parentId: 1,
                  path: 'menu',
                  icon: 'ep:menu',
                  component: 'system/menu/index',
                  status: 0,
                  visible: true,
                  keepAlive: true,
                  createTime: '2021-01-05T17:03:48'
                }
              ]
            },
            {
              id: 2,
              name: '基础设施',
              permission: '',
              type: 1,
              sort: 20,
              parentId: 0,
              path: '/infra',
              icon: 'ep:monitor',
              component: '',
              status: 0,
              visible: true,
              keepAlive: true,
              createTime: '2021-01-05T17:03:48',
              children: [
                {
                  id: 200,
                  name: '定时任务',
                  permission: 'infra:job:list',
                  type: 2,
                  sort: 1,
                  parentId: 2,
                  path: 'job',
                  icon: 'ep:timer',
                  component: 'infra/job/index',
                  status: 0,
                  visible: true,
                  keepAlive: true,
                  createTime: '2021-01-05T17:03:48'
                }
              ]
            }
          ]
        },
        msg: '获取成功'
      }
    }
  },
  // 用户列表
  {
    url: '/admin-api/system/user/page',
    method: 'get',
    response: () => {
      const users = []
      for (let i = 1; i <= 10; i++) {
        users.push({
          id: i,
          username: `user${i}`,
          nickname: `用户${i}`,
          email: `user${i}@example.com`,
          mobile: `1888888888${i}`,
          sex: Mock.Random.integer(0, 2),
          avatar: Mock.Random.image('100x100', Mock.Random.color(), Mock.Random.first()),
          status: Mock.Random.integer(0, 1),
          loginIp: Mock.Random.ip(),
          loginDate: Mock.Random.datetime(),
          createTime: Mock.Random.datetime(),
          deptId: Mock.Random.integer(1, 5),
          postIds: [Mock.Random.integer(1, 3)],
          remark: Mock.Random.sentence(5, 10)
        })
      }
      return {
        code: 0,
        data: {
          list: users,
          total: 100
        },
        msg: '获取成功'
      }
    }
  },
  // 发送短信验证码
  {
    url: '/admin-api/system/auth/send-sms-code',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '短信发送成功'
      }
    }
  },
  // 短信验证码登录
  {
    url: '/admin-api/system/auth/sms-login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          accessToken: Mock.Random.string('lower', 32),
          refreshToken: Mock.Random.string('lower', 32),
          userId: 1,
          userType: 2,
          expiresTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        },
        msg: '登录成功'
      }
    }
  },
  // 刷新令牌
  {
    url: '/admin-api/system/auth/refresh-token',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          accessToken: Mock.Random.string('lower', 32),
          refreshToken: Mock.Random.string('lower', 32),
          expiresTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        },
        msg: '刷新成功'
      }
    }
  },
  // 退出登录
  {
    url: '/admin-api/system/auth/logout',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '退出成功'
      }
    }
  }
] as MockMethod[]