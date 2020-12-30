import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/register/Register'
import LogIn from '@/components/signin/SignIn'
import Songs from '@/components/songs/Songs'
import CreateSong from '@/components/songs/song/CreateSong'
import ViewSong from '@/components/songs/viewsong/ViewSong.vue'
import EditSong from '@/components/songs/song/EditSong'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: Hello
        // },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            // redirect: {
            //     name: 'LogIn'
            // }
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
            path: '/songs/:songId',
            name: 'View-Song',
            component: ViewSong,
            props: true,
            beforeEnter(to, from, next) {
                const isValidId = Number.isInteger(Number(to.params.songId));
                next(isValidId);
            }
        },
        {
            path: '/songs/:songId/edit',
            name: 'Edit-Song',
            component: EditSong
        },
        {
            path: '*',
            redirect: 'Songs'
        }
    ]
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}