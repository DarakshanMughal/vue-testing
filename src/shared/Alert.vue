<template>

  <v-alert
    error
    dismissible
    color="red"
    border="left"
    elevation="2"
    colored-border
    @input="onClose" :value=true
  >
    {{text}}
  </v-alert>

</template>


<script>
  export default {
    props:['text'],
    methods:{
      onClose(){
        this.$emit('dismissed')
      }
    }
  }
</script>
