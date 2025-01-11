<template>
  <div class="pt-8 border-b border-[#e8e8e8] px-6">
    <div class="flex justify-between mb-4">
      <div class="flex justify-between gap-4">
        <nuxt-link
          to="/basket"
          class="flex items-center justify-center gap-2  p-4 text-[0.9rem] rounded-2xl border border-[#323232] hover:bg-secondary hover:text-neutral-0 "
        >
          <icon-svg name="vuesax-outline:import-1" class="text-2xl"></icon-svg>
          <span >سبد خرید</span>
          <div className="badge badge-ghost text-sm badge-xs">0</div>
        </nuxt-link>
        <div
          class="app-button flex items-center justify-center p-4 text-[0.9rem] rounded-2xl bg-primary cursor-pointer"
        >
          <icon-svg name="vuesax-outline:user" class="text-2xl"></icon-svg>
          <span class="text-neutral-1000">حساب کاربری</span>
        </div>
        <!-- جستجو -->
        <home-search-box />
      </div>
      <img src="@/assets/img/ibolak-logo.svg" alt="logo" class="h-14" />
    </div>

    <!-- بخش پایینی -->
    <div class="flex justify-between items-center">
      <div class="flex gap-x-4">
        <!-- منوها -->
        <header-menu></header-menu>
      </div>

      <div class="flex justify-between items-center gap-x-2 pb-2">
        <!-- دکمه دانلود اپلیکیشن -->
        <div
          class="flex items-center justify-center p-4 text-[0.9rem] rounded-2xl bg-tertiary cursor-pointer hover:border hover:border-gray-300"
        >
          <icon-svg name="vuesax-outline:import-1" class="text-2xl"></icon-svg>
          <span class="text-neutral-1000">دانلود اپلیکیشن</span>
        </div>
        <!-- دکمه اینستاگرام آی بولک -->
        <nuxt-link
          to="/basket"
          class="flex items-center justify-center p-4 text-[0.9rem] rounded-2xl bg-tertiary hover:border hover:border-gray-300"
        >
          <icon-svg name="vuesax-outline:import-1" class="text-2xl"></icon-svg>
          <span class="text-neutral-1000">اینستاگرام آی بولک!</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navTitle = ref([
  { id: 1, name: "زنانه", icon: "vuesax-outline:arrow-down-more" },
  { id: 2, name: "مردانه", icon: "vuesax-outline:arrow-down-more" },
  { id: 3, name: "بچگانه", icon: "vuesax-outline:arrow-down-more" },
  { id: 4, name: "کیف" },
  { id: 5, name: "عطر" },
  { id: 6, name: "حراجی" },
]);
const {
  model: menuModel,
  close: menuClose,
  toggle: menuToggle,
} = useDesktopMenu(true);
</script>
