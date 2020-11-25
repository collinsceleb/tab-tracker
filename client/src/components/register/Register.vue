<template>
    <div>
        <h1>Register</h1>
        <div>
            <input type="email" name="email" placeholder="email" v-model="email">
        </div>
         <div>
            <input type="password" name="password" placeholder="password" v-model="password">
        </div>
        <div>
            <button @click="register" type="submit">Register</button>
        </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style scoped>

</style>