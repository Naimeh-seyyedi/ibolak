<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    dir: "rtl",
  },
});
</script>
