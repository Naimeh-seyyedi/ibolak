<template>
  <div class="overflow-x-auto mt-6 rounded-lg bg-neutral-0">
    <div class="flex items-center space-x-4 px-4 py-2">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="flex flex-col items-center justify-center min-w-[120px]"
      >
        <img
          :src="product.imageSrc"
          :alt="product.name"
          class="w-20 h-20 rounded-full object-cover"
        />
        <p class="text-sm mt-2 font-medium">{{ product.name }}</p>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await fetch("/data/products.json");
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      this.products = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>


</style>
