<template>
  <div>
    <img src="@/assets/img/advertisement.gif" alt="advertisement" />
    <div class="min-h-screen flex flex-col">
      <div class="hidden lg:block">
        <slot name="header">
          <Header></Header>
        </slot>
      </div>
      <div class="px-6"><slot></slot></div>
      <slot name="footer">
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
