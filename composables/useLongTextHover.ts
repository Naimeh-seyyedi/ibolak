import {gsap} from "gsap";

export const useLongTextHover = (isRtl: Ref<boolean> | boolean = true, {elements,...config}: {
    duration: number,
    elements?: Ref<HTMLElement>[]
} = {duration: 1}) => {
    const element = ref<HTMLElement>();

    const allElements = computed(() => [element, ...(elements || [])])
    const onHover = async () => {
        // hoveredOnce.value = true
        await nextTick();
        unref(allElements).forEach((element: Ref<HTMLElement>) => {
            if (unref(element)) {
                gsap.to(unref(element), {
                    ...config,
                    x: (unref(element)?.scrollWidth - unref(element)?.clientWidth) * (unref(isRtl) ? 1 : -1),
                });
            }
        })
    };
    const onLeave = () => {
        unref(allElements).forEach((element: Ref<HTMLElement>) => {
            if (unref(element)) {
                gsap.to(unref(element), {x: 0, ...config});
            }
        })
    };
    return {element, bind: {onmouseover: onHover, onmouseleave: onLeave}, onHover, onLeave}
}