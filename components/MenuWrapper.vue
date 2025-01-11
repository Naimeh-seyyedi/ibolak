<template>
  <div
    ref="menuRef"
    @mouseover="changeIsHovering(true)"
    @mouseleave="changeIsHovering(false)"
  >
    <div class="cursor-pointer" @click.stop="">
      <slot name="trigger"></slot>
    </div>
    <template v-if="withParentsNode">
      <div class="relative ">
        <div :class="menuClass">
          <transition-fade>
            <slot v-if="isOpenMenu"></slot>
          </transition-fade>
        </div>
      </div>
    </template>
    <template v-else>
      <transition-fade>
        <slot v-if="isOpenMenu"></slot>
      </transition-fade>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    hover?: boolean;
    forceOpen?: boolean;
    withParentsNode?: boolean;
    menuClass?: string | string[];
  }>(),
  {
    menuClass: "absolute top-2",
    withParentsNode: true,
  }
);
const emit = defineEmits(["update:modelValue"]);
const isOpenMenu = computed(() => props.forceOpen || props.modelValue);

const changeIsHovering = (isHover: boolean) => {
  if (!props.hover) {
    closeMenu();
    return;
  }

  if (isHover) {
    openMenu();
  } else {
    setTimeout(() => {
      closeMenu();
    }, 300);
  }
};
const closeMenu = () => {
  emit("update:modelValue", false);
};
const openMenu = () => {
  emit("update:modelValue", true);
};
const menuRef = ref<HTMLElement>();
onClickOutside(menuRef, () => {
  closeMenu();
});
</script>
