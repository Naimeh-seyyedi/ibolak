import { ref } from 'vue';

export function useHoverMenu() {
  const activeMenu = ref<string | null>(null);

  const openMenu = (menuKey: string) => {
    activeMenu.value = menuKey;
  };

  const closeMenu = () => {
    activeMenu.value = null;
  };

  return {
    activeMenu,
    openMenu,
    closeMenu,
  };
}
