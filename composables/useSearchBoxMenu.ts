export const useSearchBoxMenu = (fixBody = false, uiStateKey = 'SEARCH_BOX_MENU') => {
  const { model: searchBoxModel, close: closeSearchBox, open: openSearchBox } = useUiState(uiStateKey,{handleBackButton:true});
  const {isFirefox}=useDevice()
  if (fixBody&&!isFirefox) {
    useFixBody(computed(() => unref(searchBoxModel)));
  }
  return { searchBoxModel, openSearchBox, closeSearchBox }
}
