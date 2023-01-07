<template>
  <!--外部的 svg 资源-->
  <div
    v-if="isExternal"
    :class="className"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"

  />  
  <!--项目内部的 svg 资源-->
  <svg :aria-hidden="true" v-else>
    <use :xlink:href="iconName" :class="className" class="svg-icon"></use>
  </svg>
</template>
<script setup>
import { defineProps, computed } from 'vue';
import { isExternal as external } from '@/utils/validate';
const props = defineProps({
  icon: {  // icon 图标
    type: String,
    required: true
  },
  className: { // 图标类名
    type: String,
    
  }
})
// 判断是否是外部的 svg 资源
const isExternal = computed(() => {
  return external(props.icon)
})
// 外部图标样式: 使用了 mask 属性
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
// 项目内部的 svg 资源名称
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>
<style lang="scss" scoped>
  .svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>