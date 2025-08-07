export interface PointActivityVO {
  id: number
  spuId: number
  status: number
  stock: number
  totalStock: number
  point: number
  price: number
  count: number
  createTime: Date
}

// 兼容旧的命名
export const PointActivityApi = {
  getPointActivityPage: getPointActivityPage,
  getPointActivity: getPointActivity,
  createPointActivity: createPointActivity,
  updatePointActivity: updatePointActivity,
  deletePointActivity: deletePointActivity
}

export interface SpuExtension0 {
  id: number
  // 其他属性
}

// 获得积分商城活动分页
export function getPointActivityPage(_params: any): Promise<{ list: PointActivityVO[], total: number }> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得积分商城活动明细
export function getPointActivity(_id: number): Promise<PointActivityVO> {
  return Promise.reject(new Error('API 未实现'));
}

// 创建积分商城活动
export function createPointActivity(_data: PointActivityVO): Promise<number> {
  return Promise.reject(new Error('API 未实现'));
}

// 更新积分商城活动
export function updatePointActivity(_data: PointActivityVO): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 删除积分商城活动
export function deletePointActivity(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}