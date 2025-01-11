<template>
  <div ref="searchboxHomeWrapper">
    <v-form @submit="onSubmit">
      <div @click.stop.prevent>
      <div class="flex items-center justify-center gap-2 p-4  rounded-2xl bg-tertiary">
        <icon-svg name="vuesax-outline:search-normal" class="text-2xl"></icon-svg>
        <input
          v-model="inputModel"
          @click="openSearchBox"
          placeholder="جستجو کنید..."
          class="bg-tertiary outline-none"
        />
      </div>
        <div
          v-show="searchBoxModel"
          ref="searchBoxResult"
          class="h-max w-full overflow-y-auto bg-transparent lg:bg-white pt-0 pb-4 px-4 z-50 opacity-0 invisible fixed lg:absolute top-0 lg:top-24 lg:max-w-[36rem] lg:rounded-2xl lg:shadow-[0_0_32px_0_rgba(0,0,0,0.08)]"
          :style="searchBoxPosition"
        >
          <div v-if="!inputModel" class="text-center text-neutral-500">
            لیست جستجو خالی است.
          </div>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const searchBoxModel = ref(false); 
const inputModel = ref(""); 
const inputElement = ref<HTMLElement | null>(null); 
const searchBoxPosition = ref<any>({}); 
const openSearchBox = () => {
  searchBoxModel.value = true;
  updateSearchBoxPosition(); 
};
const closeSearchBox = () => {
  searchBoxModel.value = false;
};
const onSubmit = () => {
  console.log("Searching for: ", inputModel.value);
  closeSearchBox();
};
const updateSearchBoxPosition = () => {
  if (inputElement.value) {
    const rect = inputElement.value.getBoundingClientRect();
    searchBoxPosition.value = {
      top: `${rect.bottom + window.scrollY}px`, 
      left: `${rect.left + window.scrollX}px`, 
      width: `${rect.width}px`, 
    };
  }
};


watch(inputModel, (newValue) => {
  if (!newValue) {
    searchBoxModel.value = false;
  }
});

onMounted(() => {

  updateSearchBoxPosition();
});
</script>

<style scoped>

</style>
