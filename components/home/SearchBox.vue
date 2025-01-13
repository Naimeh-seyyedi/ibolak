<template>
  <div class="relative">
    <div class="relative">
      <input
        v-model="inputModel"
        ref="input"
        @focus="openSearchBox"
        class="w-[350px] relative transition-all duration-300 ease-in-out bg-tertiary focus:w-[410px] focus:outline-none focus:bg-[#ecebe9] p-4 pr-12 rounded-2xl z-20"
        placeholder="جستجو کنید..."
      />
      <icon-svg
        name="vuesax-outline:search-normal-1"
        class="text-xl absolute top-1/2 right-4 transform -translate-y-1/2 z-30"
      ></icon-svg>
    </div>
    <div
      v-if="searchBoxModel"
      class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
      @click="closeSearchBox"
    ></div>
    <div
      v-if="searchBoxModel"
      class="absolute bg-white p-6 mt-2 right-0 top-[3.625rem] w-full z-20 rounded-2xl shadow-lg"
    >
      <h3 class="text-lg font-semibold mb-4">محصولات</h3>
      <div v-if="searchResult.length">
        <div
          v-for="(result, index) in searchResult"
          :key="index"
          class="py-2 border-b border-gray-200 last:border-b-0"
        >
          <span class="block">{{ result.name }}</span>
          <span class="block text-primary font-semibold"
            >{{ result.price }} تومان</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const inputModel = ref("");
const searchBoxModel = ref(false);
const searchResult = ref([
  { name: "بارانی با شیل", price: "۴۹۹,۰۰۰" },
  { name: "بارانی کریکت لند", price: "۳۹۸,۰۰۰" },
  { name: "شکت بافرین", price: "۴۹۹,۰۰۰" },
]);

const openSearchBox = async () => {
  searchBoxModel.value = true;
  await nextTick();
};

const closeSearchBox = () => {
  searchBoxModel.value = false;
};
</script>
