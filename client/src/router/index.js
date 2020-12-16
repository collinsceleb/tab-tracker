import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/register/Register'
import Hello from '../components/HelloWorld'
import LogIn from '../components/signin/SignIn'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Hello
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/login',
            name: 'LogIn',
            component: LogIn
        }
    ]
});