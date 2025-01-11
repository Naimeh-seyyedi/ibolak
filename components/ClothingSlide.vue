<template>
  <div
    class="flex flex-col items-center justify-between p-2 pt-5  w-full cursor-default h-auto"
  >
    <div
      class="container w-full bg-neutral-100 relative overflow-hidden" 
      :class="[ { 'bg-primary-50': index === 0 }, { 'bg-secondary-50': index === 1 } ]"
    >
      <img
        :src="item.image"
        class="image w-full"
        :alt="item.category_name"
        ref="categoryRef"
      />
    </div>
 
  </div>
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

const props = defineProps<{ item: Category; index: number }>();
</script>

<style scoped>
.container {
  perspective: 800px; 
}

.image {
  transition: transform 0.3s ease-in-out; 
  object-fit: contain; 
  display: block; 
  max-width: 100%;
  height: auto; 
}
</style>
