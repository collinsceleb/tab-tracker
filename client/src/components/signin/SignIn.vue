<template>
    <v-container column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Sign In</v-toolbar-title>
                </v-toolbar>
                <v-form @submit.prevent="login">            
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
                            <v-btn class="cyan" type="submit" align-center dark>Sign In</v-btn>
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
    
    methods: {
        async login() {
            try {
                const resp = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            // console.log(this.email)
            this.$store.dispatch('setToken', resp.data.token)
            this.$store.dispatch('setUser', resp.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }

        // login() {
        //     let email = this.email
        //     let password = this.password
        //     this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/')).catch(err => console.log(err));
        // }
    },

}
</script>

<style scoped>
.error{
    color: red;
}
</style>