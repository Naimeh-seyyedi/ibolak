<template>
  <t-carousel
    :items="bundleData"
    data-next-add="hidden"
    data-prev-add="hidden"
    item-container-class="flex-shrink-0 items-stretch flex w-full"
    :default-padding="false"
    data-wrapper-add="relative w-full"
    data-container-add="w-full h-auto"
    :autoPlayInterval="3000"
  >
    <template #item="{ item, index }">
      <clothing-slide
        :item="item"
        :class="[
          {
            'rounded-r-lg': index === 0,
            'rounded-l-lg': index === bundleData.length - 1,
          },
        ]"
      />
    </template>

    <template #prev="{ activator, disabled }">
      <div
        v-if="bundleData.length > 1"
        @click="activator"
        class="hidden lg:flex items-center justify-center h-12 w-12 bg-neutral-0 rounded-full cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
      >
        <icon-svg
          name="vuesax-outline:arrow-left-more"
          class="text-4xl"
          :class="disabled ? 'text-neutral-500' : 'text-neutral-1000'"
        />
      </div>
    </template>

    <template #next="{ activator, disabled }">
      <div
        v-if="bundleData.length > 1"
        @click="activator"
        class="hidden lg:flex items-center justify-center h-12 w-12 bg-neutral-0 rounded-full cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
      >
        <icon-svg
          name="vuesax-outline:arrow-right-more"
          class="text-4xl"
          :class="disabled ? 'text-neutral-500' : 'text-neutral-1000'"
        />
      </div>
    </template>
  </t-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const bundleData = ref([
      { id: 1, name: "Product 1", image: "/assets/img/fullSlider/full-1.webp" },
      { id: 2, name: "Product 2", image: "/assets/img/fullSlider/full-2.webp" },
      { id: 3, name: "Product 3", image: "/assets/img/fullSlider/full-3.webp" },
      { id: 4, name: "Product 4", image: "/assets/img/fullSlider/full-4.webp" },
    ]);
    return {
      bundleData,
    };
  },
});
</script>
