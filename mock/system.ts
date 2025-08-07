import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  // 获取字典数据
  {
    url: '/admin-api/system/dict-data/simple-list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          // 系统状态
          { dictType: 'common_status', value: '0', label: '正常' },
          { dictType: 'common_status', value: '1', label: '停用' },
          
          // 性别
          { dictType: 'system_user_sex', value: '1', label: '男' },
          { dictType: 'system_user_sex', value: '2', label: '女' },
          { dictType: 'system_user_sex', value: '0', label: '未知' },
          
          // 菜单类型
          { dictType: 'system_menu_type', value: '1', label: '目录' },
          { dictType: 'system_menu_type', value: '2', label: '菜单' },
          { dictType: 'system_menu_type', value: '3', label: '按钮' },
          
          // 任务状态
          { dictType: 'infra_job_status', value: '1', label: '正常' },
          { dictType: 'infra_job_status', value: '2', label: '暂停' },
          
          // 任务日志状态
          { dictType: 'infra_job_log_status', value: '1', label: '成功' },
          { dictType: 'infra_job_log_status', value: '2', label: '失败' },
          { dictType: 'infra_job_log_status', value: '3', label: '执行中' },
          
          // 用户类型
          { dictType: 'user_type', value: '1', label: '会员' },
          { dictType: 'user_type', value: '2', label: '管理员' },
          
          // 数据范围
          { dictType: 'system_data_scope', value: '1', label: '全部数据权限' },
          { dictType: 'system_data_scope', value: '2', label: '指定部门数据权限' },
          { dictType: 'system_data_scope', value: '3', label: '本部门数据权限' },
          { dictType: 'system_data_scope', value: '4', label: '本部门及以下数据权限' },
          { dictType: 'system_data_scope', value: '5', label: '仅本人数据权限' }
        ],
        msg: '获取成功'
      }
    }
  },
  // 字典类型列表
  {
    url: '/admin-api/system/dict-type/page',
    method: 'get',
    response: () => {
      const dictTypes = [
        { id: 1, name: '通用状态', type: 'common_status', status: 0, remark: '通用状态列表' },
        { id: 2, name: '用户性别', type: 'system_user_sex', status: 0, remark: '用户性别列表' },
        { id: 3, name: '菜单类型', type: 'system_menu_type', status: 0, remark: '菜单类型列表' },
        { id: 4, name: '任务状态', type: 'infra_job_status', status: 0, remark: '定时任务状态' },
        { id: 5, name: '任务日志状态', type: 'infra_job_log_status', status: 0, remark: '任务执行状态' }
      ]
      
      return {
        code: 0,
        data: {
          list: dictTypes,
          total: dictTypes.length
        },
        msg: '获取成功'
      }
    }
  },
  // 验证码图片
  {
    url: '/admin-api/system/captcha/get',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          uuid: Mock.Random.uuid(),
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
        },
        msg: '获取成功'
      }
    }
  }
] as MockMethod[]