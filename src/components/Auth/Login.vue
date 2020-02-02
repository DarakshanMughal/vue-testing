<template>
  <v-card class="mx-auto" id="test-card">

    <app-alert v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>

    <v-row justify="space-around">

      <v-avatar :tile="false" :size="'128px'" class="grey lighten-4 ma-1">
        <img class="bordered" src="../../assets/placeholder.jpg" alt="avatar">
      </v-avatar>

    </v-row>

    <h1>Login</h1>

    <v-form class="text-center" @submit.prevent="login"
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>


      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" type="submit">Login</v-btn>

      <v-btn class="mr-4" to="/register">Register</v-btn>

    </v-form>

  </v-card>

</template>

<script>
  export default {
    data: () => ({
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    watch:{
      user(value){
        if(value !== null && value !== undefined){
          this.$router.push('/')
        }
      }

    },
    computed: {
      error(){
        return this.$store.getters.error
      },
    },
    methods: {
      login () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password,
          }
          console.log(user)
          this.$store.dispatch('login', user )
          this.$router.push('/')
        }
      },
      onDismissed(){
        console.log('Dismissed Alert');
        this.$store.dispatch('clearError')
      }
    },


  }
</script>

<style scoped>
  #test-card {
    padding: 5%;
    margin: 2%;
    max-width: 600px;
  }
</style>
