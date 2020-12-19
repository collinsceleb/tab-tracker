import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/register/Register'
import Hello from '../components/HelloWorld'
import LogIn from '../components/signin/SignIn'
import Songs from '@/components/songs/Songs'
import CreateSong from '@/components/songs/CreateSong'
import ViewSong from '@/components/songs/ViewSong'

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
        },
        {
            path: '/songs',
            name: 'Songs',
            component: Songs
        },
        {
            path: '/song/create',
            name: 'Song-Create',
            component: CreateSong
        },
        {
            path: '/song/:songId',
            name: 'View-Song',
            component: ViewSong
        }
    ]
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}