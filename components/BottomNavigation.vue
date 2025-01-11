<template>
  <nav>
    <div
      class="fixed z-20 bottom-0 inset-x-0 center w-full h-max bg-transparent translate transition-transform duration-700"
    >
      <div
        class="w-full z-20 grid grid-cols-5 gap-x-5 h-[4.75rem] items-center justify-around bg-white rounded-2xl px-2 pt-3 pb-[4.75rem]"
      >
        <nuxt-link to="/">
          <div class="flex flex-col gap-1 justify-center items-center">
            <div class="icon-wrapper">
              <icon-svg
                name="vuesax-bulk:home"
                class="text-2xl text-neutral-1000"
              />
            </div>
            <p class="font-semibold text-neutral-500 mt-0.5 text-2xs">خانه</p>
          </div>
        </nuxt-link>
        <nuxt-link to="/category">
          <div class="flex flex-col gap-1 justify-center items-center">
            <div class="icon-wrapper">
              <icon-svg
                name="vuesax-bulk:category-2"
                class="text-2xl text-neutral-1000"
              />
            </div>
            <p class="font-semibold text-neutral-500 mt-0.5 text-2xs">
              دسته بندی
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/cart">
          <div class="flex flex-col gap-1 justify-center items-center">
            <div class="icon-wrapper">
              <div class="relative">
                <client-only>
                  <span
                    class="absolute bg-primary-500 !text-white t-center rounded-full text-[0.625rem] leading-tight py-0.5 min-w-[1rem] max-w-[2.125rem] -right-2 -top-4"
                    >20</span
                  >
                </client-only>
              </div>
              <icon-svg
                name="vuesax-bulk:bag"
                class="text-2xl text-neutral-1000"
              />
            </div>
            <p class="font-semibold text-neutral-500 mt-0.5 text-2xs">
              سبد خرید
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/search">
          <div class="flex flex-col gap-1 justify-center items-center">
            <div class="icon-wrapper">
              <icon-svg
                name="vuesax-bulk:profile"
                class="text-2xl text-neutral-1000"
              />
            </div>
            <p class="font-semibold text-neutral-500 mt-0.5 text-2xs">جستجو</p>
          </div>
        </nuxt-link>
        <nuxt-link to="/profile">
          <div class="flex flex-col gap-1 justify-center items-center">
            <div class="icon-wrapper">
              <icon-svg
                name="vuesax-bulk:profile"
                class="text-2xl text-neutral-1000"
              />
            </div>
            <p class="font-semibold text-neutral-500 mt-0.5 text-2xs">
              پروفایل
            </p>
          </div>
        </nuxt-link>
      </div>

      <div
        class="fixed z-10 bottom-0 bottom-nav-shadow inset-x-0 h-20 w-full"
      ></div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ hasShadow?: boolean }>(), {
  hasShadow: false,
});
</script>
<style scoped>
.router-link-active .icon-wrapper {
  @apply bg-primary-50;
}
.router-link-active .icon-wrapper svg {
  @apply !text-primary;
}
.router-link-active p {
  @apply !text-primary;
}
.icon-wrapper {
  @apply flex items-center justify-center bg-neutral-50 rounded-lg p-2;
}

.bottom-nav-shadow {
  backdrop-filter: blur(4px);
}
</style>
