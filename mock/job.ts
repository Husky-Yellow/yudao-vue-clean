import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  // 定时任务列表
  {
    url: '/admin-api/infra/job/page',
    method: 'get',
    response: () => {
      const jobs = []
      for (let i = 1; i <= 5; i++) {
        jobs.push({
          id: i,
          name: `定时任务${i}`,
          status: Mock.Random.integer(0, 1),
          handlerName: `task${i}Handler`,
          handlerParam: JSON.stringify({ param: `value${i}` }),
          cronExpression: '0 0 12 * * ?',
          retryCount: 3,
          retryInterval: 1000,
          monitorTimeout: 30000,
          createTime: Mock.Random.datetime(),
          updateTime: Mock.Random.datetime(),
          remark: `这是定时任务${i}的描述`
        })
      }
      return {
        code: 0,
        data: {
          list: jobs,
          total: 5
        },
        msg: '获取成功'
      }
    }
  },
  // 定时任务日志列表
  {
    url: '/admin-api/infra/job-log/page',
    method: 'get',
    response: () => {
      const logs = []
      for (let i = 1; i <= 20; i++) {
        logs.push({
          id: i,
          jobId: Mock.Random.integer(1, 5),
          handlerName: `task${Mock.Random.integer(1, 5)}Handler`,
          handlerParam: JSON.stringify({ param: `value${i}` }),
          executeIndex: i,
          beginTime: Mock.Random.datetime(),
          endTime: Mock.Random.datetime(),
          duration: Mock.Random.integer(100, 5000),
          status: Mock.Random.integer(1, 3), // 1成功 2失败 3执行中
          result: Mock.Random.integer(1, 2) === 1 ? '执行成功' : '执行失败：' + Mock.Random.sentence(3, 8)
        })
      }
      return {
        code: 0,
        data: {
          list: logs,
          total: 100
        },
        msg: '获取成功'
      }
    }
  },
  // 触发定时任务
  {
    url: '/admin-api/infra/job/trigger',
    method: 'put',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '触发成功'
      }
    }
  },
  // 创建定时任务
  {
    url: '/admin-api/infra/job/create',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: Mock.Random.integer(100, 999),
        msg: '创建成功'
      }
    }
  },
  // 更新定时任务
  {
    url: '/admin-api/infra/job/update',
    method: 'put',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '更新成功'
      }
    }
  },
  // 删除定时任务
  {
    url: '/admin-api/infra/job/delete',
    method: 'delete',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '删除成功'
      }
    }
  },
  // 修改任务状态
  {
    url: '/admin-api/infra/job/update-status',
    method: 'put',
    response: () => {
      return {
        code: 0,
        data: true,
        msg: '状态更新成功'
      }
    }
  }
] as MockMethod[]