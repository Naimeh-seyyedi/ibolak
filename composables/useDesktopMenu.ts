export const useDesktopMenu=(fixBody=false)=>{
    const uiState= useUiState('--desktop-menu--')
    const {isFirefox}=useDevice()
    if(fixBody&&!isFirefox){
    useFixBody(computed(()=>unref(uiState.model)));
    }
    return uiState;
}