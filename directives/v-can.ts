import { storeToRefs } from "pinia";
import { DirectiveBinding, VNode } from "vue";
import { useAuthStore } from "~~/store/auth";

export const action = (el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: VNode) => {
    const { user } = storeToRefs(useAuthStore())
    watchEffect(() => {
        el.hidden = !user.value?.[binding.arg]
    })
}