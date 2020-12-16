<template>
    <v-container column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-form @submit.prevent="register">            
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    type="email" placeholder="Email" name="email" v-model="email">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    type="password" placeholder="Password" name="password" v-model="password">
                                </v-text-field>
                            </v-col>
                            <div class="error" v-html="error" />
                        </v-row>
                        <v-col cols="12" sm="6" md="12" align-center>
                            <v-btn class="cyan" type="submit" align-center dark>Register</v-btn>
                        </v-col>
                    </v-container>
                </v-form>
            </div>
        </v-flex>
    </v-container>
    
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    // computed: {
    //     isLoggedIn() {
    //         return this.$store.getters.isLoggedIn
    //     }
    // },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
        // register() {
        //     let email = this.email
        //     let password = this.password
        //     this.$store.dispatch('register', { email, password }).then(() => this.$router.push('/')).catch(err => console.log(err));
        // }
    },
}
</script>

<style scoped>
.error{
    color: red;
}
</style>