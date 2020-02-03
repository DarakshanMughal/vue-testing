<template>
  <div>
    <v-parallax height="600" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">


      <p>User name: {{viewUser.id}}</p>
      <p>User name: {{viewUser.email}}</p>



    </v-parallax>

    <v-container class="grey lighten-5">

      <v-row :align="align" style="text-align: center;">

        <v-col>

          <v-card raised shaped class="ma-3 pa-6" outlined tile>
            <v-icon class="far fa-gem"></v-icon><br />
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
            Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </v-card>

        </v-col>

        <v-col>

          <v-card raised shaped class="ma-3 pa-6" outlined tile>
            <v-icon class="far fa-building center"></v-icon><br />
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
            Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </v-card>

        </v-col>


        <v-col>

          <v-card raised shaped class="ma-3 pa-6" outlined tile>
            <v-icon class="far fa-money-bill-alt"></v-icon><br />
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
            Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </v-card>

        </v-col>


      </v-row>

    </v-container>


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
