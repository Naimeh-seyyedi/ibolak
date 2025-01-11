<template>
 
  <div
    class="flex flex-col items-center justify-between p-2 pt-5 w-[10rem] lg:w-[15rem] cursor-default min-h-[20rem] lg:min-h-[23rem]"
  >

    <div
      class="container w-full h-full rounded-2xl bg-neutral-100 relative overflow-hidden"
      :class="[
        { 'bg-primary-50': index === 0 },
        { 'bg-secondary-50': index === 1 },
      ]"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <img
        :src="item.imageSrc"
        class="image w-full h-full absolute z-10 transition-transform duration-300"
        :alt="item.name"
        ref="categoryRef"
      />
      <div
        v-show="isHovered"
        class="absolute top-4 right-2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20"
      >
      <icon-svg class="text-[2rem]" filled :name="'like'"></icon-svg>
      </div>
    
      <div
        v-show="isHovered"
        class="absolute bottom-1 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20"
      >
        <div class="flex justify-between gap-2 items-center">
          <div class="w-14 h-14">
            <img src="/assets/img/product/thumbnail-1.webp" />
          </div>
          <div class="w-14 h-14">
            <img src="/assets/img/product/thumbnail-2.webp" />
          </div>
          <div class="w-14 h-14">
            <img src="/assets/img/product/thumbnail-3.webp" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  id: number;
  imageSrc: string;
  iconSrc: string;
  name: string;
  description: string;
}

import gsap from "gsap";
import { useLongTextHover } from "~/composables/useLongTextHover";

const props = defineProps<{ item: Category; index: number  }>();

console.log("itemitem", props.item);
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
