import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const notFound = r => require.ensure([], () => r(require('@/views/notFound')), 'notFound')
const renderH5 = r => require.ensure([], () => r(require('@/views/renderH5/index')), 'renderH5')

Vue.use(Router)

export default new Router({
    scrollBehavior: (to, from, savedPosition) => ({
        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(savedPosition.x, savedPosition.y)
            }, 200)
        }
    }),
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: home,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                keepAlive: false

            }
        },
        {
            path: '/renderH5',
            name: 'renderH5',
            component: renderH5,
            meta: {
                keepAlive: false

            }
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: notFound
        },
        {
            path: '*',
            redirect: '/notFound'
        }
    ]
})