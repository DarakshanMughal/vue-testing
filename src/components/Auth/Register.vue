<template>
  <v-card class="mx-auto" id="test-card">

    <v-row justify="space-around">

      <v-avatar :tile="false" :size="'128px'" class="grey lighten-4 ma-1">
        <img class="bordered" src="../../assets/placeholder.jpg" alt="avatar">
      </v-avatar>

    </v-row>

    <v-snackbar v-model="successFlag" :top="true" :timeout="5000" dark>
      {{ successMsg }}
    </v-snackbar>

    <h1>Register</h1>

    <form class="text-center" @submit.prevent="register">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="repeatPassword"
        :error-messages="repeatPasswordErrors"
        label="Confirm Password"
        required
        @input="$v.repeatPassword.$touch()"
        @blur="$v.repeatPassword.$touch()"
      ></v-text-field>
      <v-btn class="mr-4 success mt-6" type="submit">submit</v-btn>


    </form>

  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, sameAs, minLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: {required, maxLength: maxLength(10)},
      email: {required, email},
      password: {required, minLength: minLength(6)},
      repeatPassword: {required, minLength: minLength(6), sameAsPassword: sameAs('password')}
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }),

    computed: {
      nameErrors() {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors() {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        !this.$v.password.minLength && errors.push('Password must be 6 characters long')
        return errors
      },
      repeatPasswordErrors() {
        const errors = []
        if (!this.$v.repeatPassword.$dirty) return errors
        !this.$v.repeatPassword.required && errors.push('Confirm Password is required')
        !this.$v.repeatPassword.minLength && errors.push('Password must be 6 characters long')
        !this.$v.repeatPassword.sameAsPassword && errors.push('Password must be identical')
        return errors
      },

      successMsg(){
        return this.$store.getters.successMsg
      },
      successFlag(){
        return this.$store.getters.successFlag
      },
    },

    methods: {
      register() {
        this.$v.$touch()
        console.log('Name', this.name, 'Email', this.email, 'Password', this.password)

        this.$store.dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
      },


    }

  }
</script>

<style scoped>
  #test-card {
    padding: 5%;
    margin: 2%;
    max-width: 600px;
  }
</style>
