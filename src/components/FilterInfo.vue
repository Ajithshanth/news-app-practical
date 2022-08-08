<template>
  <div class="flex justify-between items-center mt-2">
    <div class="text-lg text-indigo-600">
      Headlines Filtered By : {{ searchText }}
    </div>
    <div class="text-lg text-indigo-600">
      Sources Filtered By : {{ selectedSource }}
    </div>
    <div>
      <ButtonComponent v-on:click.native="clearFilter()" text=" Clear Filter" />
    </div>
  </div>
</template>
<script>
import ButtonComponent from "./ButtonComponent.vue";
export default {
  props: { searchText: {}, selectedSource: {} },
  components: { ButtonComponent },
  methods: {
    clearFilter(){
         this.$emit("clearFilter");
    }
  }
};
</script>
