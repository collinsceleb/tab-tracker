<template>
<v-app-bar
      app
      color="cyan"
      dark
    >
    <router-link :to="{name: 'Home'}" class="nav-link">
        <v-toolbar-title class="mr-4">TabTracker</v-toolbar-title>
    </router-link>
    <v-toolbar-items >
        <v-btn class="cyan" text dark>
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    
        
    
    <v-toolbar-items class="nav-link">
        <v-btn v-if="isLoggedIn" class="cyan" text dark @click="navigateTo({name: 'LogIn'})">
            Sign in
        </v-btn>
        <v-btn v-if="isLoggedIn" class="cyan" text dark @click="navigateTo({name: 'Register'})">
            Sign Up
        </v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>
<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
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