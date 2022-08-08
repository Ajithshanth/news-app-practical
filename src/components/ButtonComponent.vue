<template>
 
    <button
      
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
    >
      {{ text }}
    </button>
   
</template>
<script>
export default {
  props: {
    text: String,
  },
  
};
</script>
