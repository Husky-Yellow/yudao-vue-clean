export interface CombinationActivityVO {
  id: number
  name: string
  spuId: number
  totalLimitCount: number
  singleLimitCount: number
  startTime: Date
  endTime: Date
  userSize: number
  totalPrice: number
  status: number
  limitDuration: number
  products: CombinationProductVO[]
  combinationPrice?: number  // 拼团价格
  createTime: Date
}

export interface CombinationProductVO {
  id: number
  activityId: number
  spuId: number
  skuId: number
  combinationPrice: number
  activeStock: number
}

// 获得拼团活动分页
export function getCombinationActivityPage(_params: any): Promise<{ list: CombinationActivityVO[], total: number }> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得拼团活动明细
export function getCombinationActivity(_id: number): Promise<CombinationActivityVO> {
  return Promise.reject(new Error('API 未实现'));
}

// 根据编号数组，获得拼团活动列表
export function getCombinationActivityListByIds(_ids: number[]): Promise<CombinationActivityVO[]> {
  return Promise.reject(new Error('API 未实现'));
}

// 创建拼团活动
export function createCombinationActivity(_data: CombinationActivityVO): Promise<number> {
  return Promise.reject(new Error('API 未实现'));
}

// 更新拼团活动
export function updateCombinationActivity(_data: CombinationActivityVO): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 删除拼团活动
export function deleteCombinationActivity(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 关闭拼团活动
export function closeCombinationActivity(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}