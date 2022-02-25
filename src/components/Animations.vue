<template>
   <div>
        <div v-for="n in 3" :key="n">
        <p style="display: none">{{ n }}</p>
        <immune-cell cellType="antibody" />
        <immune-cell cellType="bacteria" />
        <immune-cell cellType="virus" />
      </div>
   </div>
</template>

<script>
import ImmuneCell from './ImmuneCell.vue'
export default {
  components: { ImmuneCell },
    name:'Animations'
}
</script>