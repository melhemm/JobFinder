<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div data-test='click-area' class="flex flex-wrap items-center justify-between cursor-pointer" @click="open">
      <h3 class="text-base font-semibold">{{header}}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div class="w-full mt-5" v-if="isOpen">
      <slot>
        <p>Some thing went wrong</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true
    },
  },  
  setup() {
    const isOpen = ref(false);
    
    const open = () => {
      isOpen.value = !isOpen.value
    };

    const caretIcon = computed(() => isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]);

    return { open, isOpen, caretIcon };

  }
}
</script>