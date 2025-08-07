import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  // 使用租户名获得租户编号
  {
    url: '/admin-api/system/tenant/get-id-by-name',
    method: 'get',
    response: ({ query }: any) => {
      const { name } = query
      // 根据租户名返回不同的租户ID
      const tenantMap: Record<string, number> = {
        '芋道源码': 1,
        'YuDao': 1,
        '示例租户': 2,
        'Demo': 2,
        'Test': 3
      }
      
      return {
        code: 0,
        data: tenantMap[name] || 1, // 默认返回租户ID 1
        msg: '获取成功'
      }
    }
  },
  // 使用租户域名获得租户信息
  {
    url: '/admin-api/system/tenant/get-by-website',
    method: 'get',
    response: ({ query }: any) => {
      const { website } = query
      return {
        code: 0,
        data: {
          id: 1,
          name: '芋道源码',
          contactName: '芋道',
          contactMobile: '17321315478',
          status: 0,
          website: website,
          packageId: 111,
          expireTime: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 一年后过期
          accountCount: 1000,
          createTime: '2021-01-01T00:00:00'
        },
        msg: '获取成功'
      }
    }
  },
  // 租户列表
  {
    url: '/admin-api/system/tenant/page',
    method: 'get',
    response: () => {
      const tenants = []
      const tenantNames = ['芋道源码', '示例租户', 'Demo租户', '测试租户']
      
      for (let i = 1; i <= 4; i++) {
        tenants.push({
          id: i,
          name: tenantNames[i - 1],
          contactName: `联系人${i}`,
          contactMobile: `1732131547${i}`,
          status: Mock.Random.integer(0, 1),
          website: `https://tenant${i}.example.com`,
          packageId: Mock.Random.integer(100, 200),
          expireTime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          accountCount: Mock.Random.integer(10, 1000),
          createTime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          remark: `租户${i}的备注信息`
        })
      }
      
      return {
        code: 0,
        data: {
          list: tenants,
          total: 4
        },
        msg: '获取成功'
      }
    }
  },
  // 租户套餐列表
  {
    url: '/admin-api/system/tenant-package/simple-list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: 111,
            name: '基础套餐',
            status: 0,
            remark: '适合小型企业使用'
          },
          {
            id: 112,
            name: '标准套餐', 
            status: 0,
            remark: '适合中型企业使用'
          },
          {
            id: 113,
            name: '高级套餐',
            status: 0,
            remark: '适合大型企业使用'
          }
        ],
        msg: '获取成功'
      }
    }
  }
] as MockMethod[]