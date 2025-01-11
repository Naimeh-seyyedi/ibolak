export const useBlur=(model:Ref<boolean>|null=null,delay=50)=>{
  const counter=useState('--blur--',()=>0);
  if(model!=null){
    watch(model,(value)=>{
      if(value){
        setTimeout(()=>{
          counter.value++
        },delay)
      }else{
        counter.value--
      }

    })
  }
  onBeforeUnmount(()=>{
    counter.value=0
  })

  return {isBlur:computed(()=>unref(counter)>0)}
}
