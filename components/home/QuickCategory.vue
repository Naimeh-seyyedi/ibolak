<template>
  <nuxt-link
    :to="{ path: `search/category-${item.slug}` }"
    class="flex flex-col justify-center items-center gap-y-2 lg:gap-y-4 gap-x-4 group transform lg:max-w-min"
    v-bind="bind"
  >
    <div
      class="container w-[4rem] h-[4rem] lg:w-[7.25rem] lg:h-[7.25rem] rounded-lg bg-neutral-100 relative overflow-hidden"
      :class="[{ 'bg-primary-50': index === 0 }, { 'bg-secondary-50': index === 1 }]"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <img
        src="@/assets/img/img-1.webp"
        class="image w-[4rem] h-[4rem] lg:w-[7.25rem] lg:h-[7.25rem] absolute z-10 transition-transform duration-300"
        :alt="item.category_name"
        ref="categoryRef"
      />
      
      <div
        v-show="isHovered"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20"
      >
        hello world
      </div>
    </div>
    <div class="overflow-x-hidden w-[4rem] lg:w-[7.25rem]">
      <div
        ref="nameContainer"
        class="text-neutral-600 text-2xs lg:text-lg group-hover:text-black text-center whitespace-nowrap"
      >
        {{ item.category_name_second || item.category_name }}
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
interface Category {
  id: number;
  slug: string;
  iconSrc: string;
  coworkerDesktopIcon: string | null;
  category_name: string;
  category_name_second: string | null;
}

import gsap from "gsap";
import { ref } from "vue";


const props = defineProps<{ item: Category; index: number }>();
const categoryRef = ref<HTMLElement | null>(null);
const isHovered = ref(false); 

const onMouseOver = () => {
  isHovered.value = true; 
  gsap.to(categoryRef.value, {
    scale: 1.1, 
    zIndex: 10, 
    duration: 0.3, 
    transformOrigin: "center center", 
  });
};

const onMouseLeave = () => {
  isHovered.value = false; 
  gsap.to(categoryRef.value, {
    scale: 1, 
    zIndex: 1, 
    duration: 0.3, 
    transformOrigin: "center center", 
  });
};

// *********************************************
const nameContainer = ref<HTMLElement>();
const { bind } = useLongTextHover(true, {
  duration: 0.2,
  elements: [nameContainer],
});
</script>

<style scoped>
.container {
  perspective: 800px; 
}

.image {
  transition: transform 0.3s ease-in-out; 
}
</style>
