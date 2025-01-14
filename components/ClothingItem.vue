<template>
  <div
    class="flex flex-col  p-2 pt-5 w-[12.5rem] lg:w-[15rem] cursor-default min-h-[20rem]  lg:min-h-[23rem]"
  >
    <div
      class="container  h-[16.625rem] rounded-2xl bg-neutral-100 relative overflow-hidden "
      :class="[
        { 'bg-primary-50': index === 0 },
        { 'bg-secondary-50': index === 1 },
      ]"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <img
        :src="item.imageSrc"
        class="image w-full h-full  absolute z-10 transition-transform duration-300"
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
        class="absolute top-8 right-3 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20"
      >
        <div
          class="bg-white w-11 h-11 rounded-lg flex items-center justify-center"
        >
          <img
            src="@/assets/img/like.svg"
            alt="logo"
            class="w-6 h-6 border-gray-50"
          />
        </div>
      </div>
      <div
        v-show="isHovered"
        class="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl z-20"
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

    <div class="flex justify-between">
      <div>
        <div class="text-sm text-gray-400">
          {{ item.name }}
        </div>
        <div>
          {{ item.description }}
        </div>
      </div>
     <div>
      <div class="text-primary">{{ item.price }}</div>
      <div class="text-sm text-gray-400">تومان</div>
     </div>
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
  price: string;
}

import gsap from "gsap";
import { useLongTextHover } from "~/composables/useLongTextHover";

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
