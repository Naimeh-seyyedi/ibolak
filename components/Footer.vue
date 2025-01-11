<template>
  <div
    class="flex justify-between items-start px-6 border-t border-[#e8e8e8] pt-10 pb-8"
  >
    <div class="hidden lg:flex flex-col gap-y-6">
      <h2 class="text-base font-bold">دسترسی سریع</h2>
      <div class="grid grid-cols-2 gap-6">
        <div
          v-for="item in footerTitle"
          :key="item.id"
          class="flex items-center gap-1"
        >
          <span class="w-2 h-2 bg-neutral-400 rounded-full"></span>

          <NuxtLink :to="item.src">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mr-auto pt-0 space-y-6">
      <h2 class="text-base font-bold">فروشگاه اینترنتی پوشاک آی‌بولک</h2>
      <div>
        <span class="text-base font-bold"> آدرس فروشگاه:</span> گرگان، بلوار
        ناهارخوران، بالاتر از عدالت ۵۶، نرسیده به میدان گلشهر، فروشگاه آی‌بولک
      </div>
      <div>
      <span class="text-base font-bold">ایمیل:</span>
      info@ibolak.com</div>
      <diV><span class="text-base font-bold">شماره های تماس:</span> 01732534106-9</diV>
    </div>
  </div>
</template>
<script setup lang="ts">
const footerTitle = ref([
  { id: 1, name: "صفحه اصلی", src: "/" },
  { id: 2, name: "پیگیری شکایت", src: "/customer-support" },
  { id: 3, name: "شرایط مرجوعی", src: "/replacement-conditions" },
  { id: 4, name: "تماس با ما", src: "/contact-us" },
  { id: 5, name: "درباره ما", src: "/about-us" },
  { id: 6, name: "سوالات متداول", src: "/faq" },
  { id: 7, name: "قوانین", src: "/rules" },
  { id: 8, name: "مردانه", src: "/categories/man" },
  { id: 9, name: "زنانه", src: "/categories/woman" },
  { id: 10, name: "کودکانه", src: "/categories/kids" },
]);
</script>
