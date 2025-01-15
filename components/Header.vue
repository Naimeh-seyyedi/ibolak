<template>
  <div class="border-b border-[#e8e8e8] pt-8">
    <div class="container mx-auto">
      <div class="flex justify-between items-center mb-4">
        <div class="flex justify-between items-center gap-4">
          <nuxt-link
            to="/basket"
            class="flex items-center justify-center gap-2 p-4 rounded-2xl border border-[#323232] hover:bg-secondary hover:text-neutral-0"
          >
            <icon-svg name="vuesax-outline:import-1" class="text-xl"></icon-svg>
            <span class="text-[0.9rem]">سبد خرید</span>
            <div className="badge badge-ghost  text-[0.9rem] badge-xs">0</div>
          </nuxt-link>
          <div
            class="flex items-center justify-center p-4 rounded-2xl bg-primary hover:bg-yellow-500 cursor-pointer"
          >
            <icon-svg name="vuesax-outline:user" class="text-xl"></icon-svg>
            <span class="text-[0.9rem]">حساب کاربری</span>
          </div>
          <!-- جستجو -->
          <home-search-box />
        </div>
        <img
          src="@/assets/img/ibolak-logo.svg"
          alt="logo"
          class="h-[3.125rem]"
        />
      </div>

      <!-- بخش پایینی -->
      <div class="flex justify-between items-center">
        <div class="flex gap-x-6">
          <!-- منوها -->
          <header-menu></header-menu>
        </div>

        <div
          class="flex justify-between items-center gap-x-2 pb-2 relative -top-2"
        >
          <!-- دکمه دانلود اپلیکیشن -->
          <div
            class="flex items-center justify-center px-4 text-[0.9rem] h-[58px] rounded-2xl bg-tertiary cursor-pointer hover:outline hover:outline-1 hover:outline-[#c6c7c8]"
          >
            <icon-svg
              name="vuesax-outline:import-1"
              class="text-2xl"
            ></icon-svg>
            <span class="text-neutral-1000">دانلود اپلیکیشن</span>
          </div>
          <!-- دکمه اینستاگرام آی بولک -->
          <div
            class="flex items-center justify-center px-4 text-[0.9rem] h-[58px] rounded-2xl bg-tertiary cursor-pointer hover:outline hover:outline-1 hover:outline-[#c6c7c8]"
          >
            <icon-svg
              name="vuesax-outline:import-1"
              class="text-2xl"
            ></icon-svg>
            <span class="text-neutral-1000">اینستاگرام آی بولک!</span>
          </div>
        </div>
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
<style scoped>
.badge-xs {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #333;
}
</style>
