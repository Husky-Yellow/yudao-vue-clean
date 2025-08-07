<template>
  <el-row :class="prefixCls" :gutter="20" justify="space-between">
    <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" :rows="2" animated>
          <template #default>
            <div :class="`${prefixCls}__item flex justify-between`">
              <div>
                <div
                  :class="`${prefixCls}__item--icon ${prefixCls}__item--peoples p-16px inline-block rounded-6px`"
                >
                  <Icon :size="40" icon="svg-icon:peoples" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`${prefixCls}__item--text text-16px text-gray-500 text-right`"
                  >{{ t('analysis.newUser') }}
                </div>
                <CountTo
                  :duration="2600"
                  :end-val="102400"
                  :start-val="0"
                  class="text-right text-20px font-700"
                />
              </div>
            </div>
          </template>
        </el-skeleton>
      </el-card>
    </el-col>

    <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" :rows="2" animated>
          <template #default>
            <div :class="`${prefixCls}__item flex justify-between`">
              <div>
                <div
                  :class="`${prefixCls}__item--icon ${prefixCls}__item--message p-16px inline-block rounded-6px`"
                >
                  <Icon :size="40" icon="svg-icon:message" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`${prefixCls}__item--text text-16px text-gray-500 text-right`"
                  >{{ t('analysis.unreadInformation') }}
                </div>
                <CountTo
                  :duration="2600"
                  :end-val="81212"
                  :start-val="0"
                  class="text-right text-20px font-700"
                />
              </div>
            </div>
          </template>
        </el-skeleton>
      </el-card>
    </el-col>

    <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" :rows="2" animated>
          <template #default>
            <div :class="`${prefixCls}__item flex justify-between`">
              <div>
                <div
                  :class="`${prefixCls}__item--icon ${prefixCls}__item--money p-16px inline-block rounded-6px`"
                >
                  <Icon :size="40" icon="svg-icon:money" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`${prefixCls}__item--text text-16px text-gray-500 text-right`"
                  >{{ t('analysis.transactionAmount') }}
                </div>
                <CountTo
                  :duration="2600"
                  :end-val="9280"
                  :start-val="0"
                  class="text-right text-20px font-700"
                />
              </div>
            </div>
          </template>
        </el-skeleton>
      </el-card>
    </el-col>

    <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" :rows="2" animated>
          <template #default>
            <div :class="`${prefixCls}__item flex justify-between`">
              <div>
                <div
                  :class="`${prefixCls}__item--icon ${prefixCls}__item--shopping p-16px inline-block rounded-6px`"
                >
                  <Icon :size="40" icon="svg-icon:shopping" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`${prefixCls}__item--text text-16px text-gray-500 text-right`"
                  >{{ t('analysis.totalShopping') }}
                </div>
                <CountTo
                  :duration="2600"
                  :end-val="13600"
                  :start-val="0"
                  class="text-right text-20px font-700"
                />
              </div>
            </div>
          </template>
        </el-skeleton>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20" justify="space-between">
    <el-col :lg="10" :md="24" :sm="24" :xl="10" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" animated>
          <div class="text-center text-gray-500 py-20">
            <Icon icon="ep:pie-chart" class="text-4xl mb-4" />
            <div>图表功能已移除</div>
          </div>
        </el-skeleton>
      </el-card>
    </el-col>
    <el-col :lg="14" :md="24" :sm="24" :xl="14" :xs="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" animated>
          <div class="text-center text-gray-500 py-20">
            <Icon icon="ep:histogram" class="text-4xl mb-4" />
            <div>图表功能已移除</div>
          </div>
        </el-skeleton>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card class="mb-20px" shadow="hover">
        <el-skeleton :loading="loading" :rows="4" animated>
          <div class="text-center text-gray-500 py-20">
            <Icon icon="ep:data-line" class="text-4xl mb-4" />
            <div>图表功能已移除</div>
          </div>
        </el-skeleton>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { set } from 'lodash-es'

import { useDesign } from '@/hooks/web/useDesign'
import type { AnalysisTotalTypes } from './types'

defineOptions({ name: 'Home2' })

const { t } = useI18n()
const loading = ref(true)
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('panel')

let totalState = reactive<AnalysisTotalTypes>({
  users: 0,
  messages: 0,
  moneys: 0,
  shoppings: 0
})

const getCount = async () => {
  const data = {
    users: 102400,
    messages: 81212,
    moneys: 9280,
    shoppings: 13600
  }
  totalState = Object.assign(totalState, data)
}

// 用户来源
const getUserAccessSource = async () => {
  // 图表功能已移除，这里可以添加其他逻辑
}

// 周活跃量
const getWeeklyUserActivity = async () => {
  // 图表功能已移除，这里可以添加其他逻辑
}


// 每月销售总额
const getMonthlySales = async () => {
  // 图表功能已移除，这里可以添加其他逻辑
}

const getAllApi = async () => {
  await Promise.all([getCount(), getUserAccessSource(), getWeeklyUserActivity(), getMonthlySales()])
  loading.value = false
}

getAllApi()
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-panel;

.#{$prefix-cls} {
  &__item {
    &--peoples {
      color: #40c9c6;
    }

    &--message {
      color: #36a3f7;
    }

    &--money {
      color: #f4516c;
    }

    &--shopping {
      color: #34bfa3;
    }

    &:hover {
      :deep(.#{$namespace}-icon) {
        color: #fff !important;
      }

      .#{$prefix-cls}__item--icon {
        transition: all 0.38s ease-out;
      }

      .#{$prefix-cls}__item--peoples {
        background: #40c9c6;
      }

      .#{$prefix-cls}__item--message {
        background: #36a3f7;
      }

      .#{$prefix-cls}__item--money {
        background: #f4516c;
      }

      .#{$prefix-cls}__item--shopping {
        background: #34bfa3;
      }
    }
  }
}
</style>
