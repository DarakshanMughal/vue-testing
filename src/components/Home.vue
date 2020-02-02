<template>
  <div>
    <v-parallax height="600" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">


      <p>User name: {{viewUser.id}}</p>
      <p>User name: {{viewUser.email}}</p>
    </v-parallax>

  </div>

</template>

<script>
export default {
  computed:{
    viewUser(){
      return this.$store.getters.user
    }
  }

}
</script>
