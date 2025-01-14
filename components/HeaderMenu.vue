<template>
  <div
    v-for="(item, index) in menuData"
    :key="index"
    class="dropdown dropdown-hover pb-8"
    :tabIndex="index"
    @mouseenter="showDots(index)"
    @mouseleave="hideDots"
    role="button"
  >
    <div class="relative flex items-center gap-2" >
      <div>{{ item.title }}</div>
      <icon-svg v-if="index < 3" :name="item.icon" class="text-sm"></icon-svg>
      <div v-if="activeIndex === index" class="loader"></div>
    </div>

    <ul
      v-if="activeIndex === index && item.children && item.children.length > 0"
      :tabIndex="index"
      class="dropdown-content mt-9 cursor-pointer bg-neutral-0 flex flex-row justify-between gap-14 rounded-b-xl min-w-full border border-[#e8e8e8] z-30 p-2"
    >
      <li
        v-for="(child, childIndex) in item.children"
        :key="childIndex"
        class="flex flex-col space-y-6"
      >
        <div class="text-lg font-semibold whitespace-nowrap">
          {{ child.title }}
        </div>

        <ul
          v-if="child.subItems && child.subItems.length > 0"
          class="ml-4 space-y-4"
        >
        <li
            v-for="(subItem, subIndex) in child.subItems"
            :key="`${childIndex}-${subIndex}`"
            class="flex items-center gap-x-2 whitespace-nowrap"
            @mouseenter="hoveredSubItem = `${childIndex}-${subIndex}`"
            @mouseleave="hoveredSubItem = null"
          >
            <div class="flex items-center flex-col gap-y-1">
              <div
                :class="[
                  'w-1 h-1 rounded-full  transition-colors',
                  hoveredSubItem === `${childIndex}-${subIndex}`
                    ? 'bg-primary'
                    : 'bg-none',
                ]"
              ></div>
              <div
                :class="[
                  'w-2 h-2 rounded-full  transition-colors',
                  hoveredSubItem === `${childIndex}-${subIndex}`
                    ? 'bg-primary'
                    : 'bg-gray-100',
                ]"
              ></div>
              <div
                :class="[
                  'w-1 h-1 rounded-full  transition-colors',
                  hoveredSubItem === `${childIndex}-${subIndex}`
                    ? 'bg-primary'
                    : 'hidden',
                ]"
              ></div>
            </div>

            <!-- Text -->
            <div>{{ subItem }}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const activeIndex = ref<number | null>(null);
  const hoveredSubItem = ref<string | null>(null);
const showDots = (index: number) => {
  activeIndex.value = index;
};

const hideDots = () => {
  activeIndex.value = null;
};

const menuData = [
  {
    id: 1,
    title: "زنانه",
    icon: "vuesax-outline:arrow-down-more",
    children: [
      { title: "کلاه/روسری/شال", subItems: ["کلاه", "شال", "روسری"] },
      {
        title: "بالا پوش",
        subItems: [
          "بلوز",
          "مانتو",
          "پیراهن",
          "سرهمی",
          "کت جین",
          "کاپشن",
          "پالتو",
          "هودی",
          "ژاکت",
        ],
      },
      { title: "شلوار جین", subItems: ["بگ", "مام فیت", "راسته"] },
      { title: "شلوار", subItems: ["اسلش", "مام فیت", "راسته"] },
      {
        title: "سایر محصولات",
        subItems: [
          "کش/گیره مو",
          "لباس زیر",
          "جوراب",
          "دستکش",
          "یقه حجاب",
          "کمربند",
          "حوله",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "مردانه",
    icon: "vuesax-outline:arrow-down-more",
    children: [
      { title: "کت و شلوار" },
      { title: "پیراهن" },
      { title: "شلوار پارچه‌ای" },
    ],
  },
  {
    id: 3,
    title: "بچگانه",
    icon: "vuesax-outline:arrow-down-more",
    children: [{ title: "بلوز" }, { title: "کلاه" }, { title: "شلوار" }],
  },
  { id: 4, title: "کیف" },
  { id: 5, title: "عطر" },
  { id: 6, title: "حراجی" },
];
</script>

<style scoped>
.loader {
  position: absolute;
  top: 35px;
  right: 10px;
  width: 30px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, var(--primary) 90%, #0000) 0 /
    calc(100% / 3) 100% space;
  clip-path: inset(0 0 0 0);
  animation: l1 1s steps(3) forwards;
}

@keyframes l1 {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  33% {
    clip-path: inset(0 50% 0 0);
  }
  66% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

.border-gray-300 {
  border-color: #e2e8f0; 
}
</style>
