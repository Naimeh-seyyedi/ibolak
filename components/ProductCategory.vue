<template>
  <div class="mx-auto">
    <div class="flex justify-between items-center">
      <div class="inline-flex items-center text-sm lg:gap-x-6 lg:text-3xl">
        <img src="/assets/icons/dots.svg" class="ml-2" />
        {{ title }}
      </div>
      <nuxt-link
        to="/"
        class="text-primary lg:text-neutral text-sm lg:rounded-[50px] lg:border lg:border-[#323232] lg:px-12 lg:py-4 hover:bg-secondary hover:text-neutral-0"
      >
        مشاهده همه
      </nuxt-link>
    </div>
    <div>
      <t-carousel
        :items="quickCategories"
        data-next-add="hidden"
        data-prev-add="hidden"
        item-container-class="flex-shrink-0 items-stretch flex mr-1 lg:mr-1"
        :default-padding="false"
        data-wrapper-add=""
        data-container-add="flex items-stretch w-full"
      >
        <template #item="{ item, index }">
          <clothing-item
            :index="index"
            :item="item"
            :class="[
              {
                'rounded-r-lg': index === 0,
                'rounded-l-lg': index === quickCategories.length - 1,
              },
            ]"
          />
          
        </template>

        <template #prev="{ activator, disabled }">
          <div
            @click="activator"
            class="hidden lg:flex items-center justify-center h-12 w-12 bg-white rounded-full cursor-pointer right-6 z-10 group absolute top-1/2 transform -translate-y-1/2 btn-carousel"
          >
            <icon-svg
              name="vuesax-outline:arrow-right"
              class="text-4xl"
              :class="disabled ? 'text-neutral-500' : 'text-neutral-1000'"
            >
            </icon-svg>
          </div>
        </template>
        <template #next="{ activator, disabled }">
          <div
            @click="activator"
            class="hidden lg:flex items-center justify-center h-12 w-12 bg-white rounded-full cursor-pointer left-6 z-10 group absolute top-1/2 transform -translate-y-1/2 btn-carousel"
          >
            <icon-svg
              name="vuesax-outline:arrow-left"
              class="text-4xl"
              :class="disabled ? 'text-neutral-500' : 'text-neutral-1000'"
            >
            </icon-svg>
          </div>
        </template>
      </t-carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
interface QuickCategory {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
}

const props = defineProps<{
  quickCategories: QuickCategory[];
  title: string;
}>();
</script>
