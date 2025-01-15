<template>
  <div>
    <img
      src="@/assets/img/advertisement.gif"
      alt="advertisement"
      class="object-cover h-[60px] w-full"
    />
    <div class="bg-neutral-0 w-full pt-2 pb-6 block lg:hidden ">
      <img src="@/assets/img/ibolak-logo.svg" alt="logo" class=" h-8 w-24 mx-auto"/>
    </div>

    <div class="min-h-screen flex flex-col px-4 lg:px-0">
      <div class="hidden lg:block ">
        <slot name="header ">
          <Header></Header>
        </slot>
      </div>
      <div class="container mx-auto"><slot></slot></div>
      <slot name="footer ">
        <Footer></Footer>
      </slot>
      <slot name="bottomNav">
        <div class="h-bottom-nav lg:hidden"></div>
        <div class="lg:hidden block t-layout-padding-reverse">
          <bottom-navigation></bottom-navigation>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
