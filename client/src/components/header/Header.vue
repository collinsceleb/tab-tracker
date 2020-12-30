<template>
<v-app-bar
      app
      color="cyan"
      dark
    >
    <router-link :to="{name: 'Songs'}" class="nav-link">
        <v-toolbar-title class="mr-4">TabTracker</v-toolbar-title>
    </router-link>
    <v-toolbar-items class="nav-link">
        <v-btn class="cyan" text dark :to="{name: 'Songs'}">
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    
        
    
    <v-toolbar-items class="nav-link">
        <v-btn v-if="!isUserLoggedIn" class="cyan" text dark :to="{name: 'LogIn'}">
            Sign in
        </v-btn>
        <v-btn v-if="!isUserLoggedIn" class="cyan" text dark :to="{name: 'Register'}">
            Sign Up
        </v-btn>

        <v-btn class="cyan" v-if="!isUserLoggedOut" text dark @click="logout">
            Logout
        </v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        // isLoggedIn() {
        //     return this.$store.getters.isUserLoggedIn
        // },
        // isLoggedOut() {
        //     return this.$store.getters.isUserLoggedOut
        // }
        ...mapGetters([
            'isUserLoggedIn',
            'isUserLoggedOut'
        ])
    },
    methods: {
        // logout() {
        //     this.$store.dispatch('setToken', null)
        //     this.$store.dispatch('setUser', null)
        //     this.$router.push({
        //         name: 'Songs'
        //     })
        // },
        logout() {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push({
                    name: 'Songs'
                })
            })
        }

    }
}
</script>
<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
}
.nav-link :hover{
    color: black;
}
</style>