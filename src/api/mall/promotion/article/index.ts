export interface PromotionArticleVO {
  id: number
  title: string
  author: string
  picUrl: string
  introduction: string
  browseCount: number
  sort: number
  status: number
  spuId: number
  recommendHot: boolean
  recommendBanner: boolean
  content: string
  createTime: Date
}

// 兼容旧的命名
export type ArticleVO = PromotionArticleVO

// 获得文章分页
export function getArticlePage(_params: any): Promise<{ list: PromotionArticleVO[], total: number }> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得文章明细
export function getArticle(_id: number): Promise<PromotionArticleVO> {
  return Promise.reject(new Error('API 未实现'));
}

// 创建文章
export function createArticle(_data: PromotionArticleVO): Promise<number> {
  return Promise.reject(new Error('API 未实现'));
}

// 更新文章
export function updateArticle(_data: PromotionArticleVO): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 删除文章
export function deleteArticle(_id: number): Promise<void> {
  return Promise.reject(new Error('API 未实现'));
}

// 获得文章精简列表
export function getArticleSimpleList(): Promise<PromotionArticleVO[]> {
  return Promise.reject(new Error('API 未实现'));
}