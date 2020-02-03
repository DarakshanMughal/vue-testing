<template>

<!-- App.vue -->

  <v-app>

    <!--Side Drawer-->

    <v-navigation-drawer temporary v-model="drawer" app >

      <v-list>
        <v-list-item link v-for="item in items" :key="item.name" :to="item.link">

          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <!--Logout Drawer Button-->

        <v-list-item @click="logout">

          <v-list-item-action>
            <v-icon class="fas fa-sign-out-alt"></v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>


    <!--Navigation Bar-->

    <v-app-bar app>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" v-if="notLogin"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue Testing App</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-for="item in items" :key="item.id" class="hidden-sm-and-down" v-if="notLogin">
        <v-btn text large :to="item.link"><v-icon>{{item.icon}}</v-icon>{{item.name}}</v-btn>
      </div>

      <div class="hidden-sm-and-down" v-if="notLogin" @click="logout">
        <v-btn text large><v-icon class="fas fa-sign-out-alt"></v-icon>Logout</v-btn>
      </div>


    </v-app-bar>


    <!-- Sizes your content based upon application components -->


    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>

      </v-container>

    </v-content>




      <v-footer style="display: contents">

        <v-card flat tile class="text-center">

          <v-card-text>

            <v-btn v-for="icon in icons" :key="icon" icon>

              <v-icon size="24px">{{ icon }}</v-icon>

            </v-btn>

          </v-card-text>

          <v-card-text class="pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
            Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            {{ new Date().getFullYear() }} — <strong>Astro</strong>
          </v-card-text>

        </v-card>
      </v-footer>


  </v-app>

</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      items : [
        { id: 1, name: 'Home', icon: 'mdi-view-dashboard', link: '/' },
        { id: 2, name: 'About', icon: 'mdi-image' },
        { id: 3, name: 'Store', icon: 'mdi-help-box' }
      ],


      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
      drawer: false,
      notLogin: false,
    }

  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
      document.location.reload(true);
    }
  },
  computed: {
    user(){
      return this.$store.getters.user
    },

  },

  watch:{
    user(value){
      if (value !== null && value !== undefined){
        this.notLogin = true;
        this.$router.push('/')
      }else if(value === null && value === undefined){
        this.notLogin = false;
      }
    },
  }

}
</script>
