export interface SeckillActivityVO {
  id: number
  spuId: number
  name: string
  status: number
  remark: string
  sort: number
  configIds: number[]
  products: SeckillProductVO[]
  seckillPrice?: number  // 秒杀价格
  createTime: Date
}

export interface SeckillProductVO {
  id: number
  activityId: number
  spuId: number
  skuId: number
  seckillPrice: number
  stock: number
}

// 获得秒杀活动分页
export function getSeckillActivityPage(_params: any): Promise<{ list: SeckillActivityVO[], total: number }> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得秒杀活动明细
export function getSeckillActivity(_id: number): Promise<SeckillActivityVO> {
  return Promise.reject(new Error('API 未实现'));
}

// 根据编号数组，获得秒杀活动列表
export function getSeckillActivityListByIds(_ids: number[]): Promise<SeckillActivityVO[]> {
  return Promise.reject(new Error('API 未实现'));
}

// 创建秒杀活动
export function createSeckillActivity(_data: SeckillActivityVO): Promise<number> {
  return Promise.reject(new Error('API 未实现'));
}

// 更新秒杀活动
export function updateSeckillActivity(_data: SeckillActivityVO): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 删除秒杀活动
export function deleteSeckillActivity(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}