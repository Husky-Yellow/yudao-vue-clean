export interface ProductSpuVO {
  id: number
  name: string
  categoryId: number
  brandId: number
  picUrl: string
  sliderPicUrls: string[]
  introduction: string
  deliveryTemplateId: number
  specType: number
  subCommissionType: number
  skus: ProductSkuVO[]
  description: string
  sort: number
  giveIntegral: number
  virtualSalesCount: number
  status: number
  createTime: Date
  salesCount?: number
  // 添加商品相关属性  
  price?: number
  marketPrice?: number
  stock?: number
}

export interface ProductSkuVO {
  id: number
  spuId: number
  properties: ProductPropertyValueDetailRespVO[]
  price: number
  marketPrice: number
  costPrice: number
  barCode: string
  picUrl: string
  stock: number
  weight: number
  volume: number
  subCommissionFirstPrice: number
  subCommissionSecondPrice: number
  salesCount: number
}

export interface ProductPropertyValueDetailRespVO {
  propertyId: number
  propertyName: string
  valueId: number
  valueName: string
}

// 兼容旧的命名
export type Spu = ProductSpuVO

// 获得商品 SPU 精简列表
export function getSpuSimpleList(): Promise<ProductSpuVO[]> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得商品 SPU 分页
export function getSpuPage(_params: any): Promise<{ list: ProductSpuVO[], total: number }> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得商品 SPU 明细
export function getSpu(_id: number): Promise<ProductSpuVO> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得商品 SPU 明细列表
export function getSpuDetailList(_ids: number[]): Promise<ProductSpuVO[]> {
  return Promise.reject(new Error('API 未实现'));
}

// 创建商品 SPU
export function createSpu(_data: ProductSpuVO): Promise<number> {
  return Promise.reject(new Error('API 未实现'));
}

// 更新商品 SPU
export function updateSpu(_data: ProductSpuVO): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 删除商品 SPU
export function deleteSpu(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}