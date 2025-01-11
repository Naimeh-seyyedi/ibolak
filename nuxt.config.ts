// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  css: [
    "~/assets/css/main.css",
    "~/assets/css/generated-themes.css",
    "~/assets/css/style.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extends: ["@avapardaz/base"],
  modules: ["@pinia/nuxt", "@nuxtjs/device", "@nuxt/icon"],
  icon: {
    provider: "server",
    mode: "svg",
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
      {
        prefix: "vuesax-bold",
        dir: "./assets/icons/vuesax/bold",
      },
      {
        prefix: "vuesax-borken",
        dir: "./assets/icons/vuesax/borken",
      },
      {
        prefix: "vuesax-bulk",
        dir: "./assets/icons/vuesax/bulk",
      },
      {
        prefix: "vuesax-linear",
        dir: "./assets/icons/vuesax/linear",
      },
      {
        prefix: "vuesax-outline",
        dir: "./assets/icons/vuesax/outline",
      },
      {
        prefix: "vuesax-twotone",
        dir: "./assets/icons/vuesax/twotone",
      },
    ],
  },
});
