<template>
  <div>
    <product-scroll />
    <product-full-slider />
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex justify-center items-center rounded-lg p-2"
      >
        <img
          :src="image"
          :alt="`Cloth ${index + 1}`"
          class="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
    <div class="space-y-10 mt-10">
      <product-category
        :quickCategories="quickCategories"
        :title="'جدیدترین ها'"
      ></product-category>
      <product-category
        :quickCategories="quickCategories"
        :title="'کت ها'"
      ></product-category>
      <product-category
        :quickCategories="quickCategories"
        :title="' پالتو و بارانی'"
      ></product-category>
      <product-category
        :quickCategories="quickCategories"
        :title="'کیف ها'"
      ></product-category>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
const images = ref([
  "/assets/img/product/clothe-1.webp",
  "/assets/img/product/clothe-2.webp",
  "/assets/img/product/clothe-3.webp",
  "/assets/img/product/clothe-4.webp",
  "/assets/img/product/clothe-5.webp",
  "/assets/img/product/clothe-6.webp",
  "/assets/img/product/clothe-7.webp",
  "/assets/img/product/clothe-8.webp",
]);
export default defineComponent({
  setup() {
    const quickCategories = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch("/data/products.json");

        const data = await response.json();

        quickCategories.value = data;
      } catch (error) {
        console.error("Error loading products.json:", error);
      }
    });

    return {
      images,
      quickCategories,
    };
  },
});
</script>

<style scoped>
.container {
  perspective: 1000px;
}
.grid-cols-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
