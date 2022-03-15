<script setup>
    import { __setupPages } from '../mixin/__setupPages.js'
    import { storeTest } from '../store/storeTest.js'
    import { storeVuex } from '../store/storeVuex.js'

    import PageA from './Page-A.vue'
    import PageB from './Page-B.vue'
    import Store from './Store.vue'
</script>

<template>
    <h1>Home: {{ count }}</h1>
    <button @click="update">update</button>
    <h1>Store Vuex: {{ vx }}</h1>
    <button @click="update_vx">update vuex</button>
    <button @click="send_eventBus">send_eventBus</button>
    <hr />
    <PageA></PageA>
    <hr />
    <PageB></PageB>
    <hr />
    <Store></Store>
</template>

<script>
    export default {
        created: function () {
            __setupPages.created(this);
        },
        mounted: function () {
            __setupPages.mounted(this);

            const self = this;
            //console.log('Home: mounted =', this.guid());
            self.$nextTick(() => {});
        },
        destroyed: function () {
            __setupPages.destroyed(this);
        },
        data() {
            return {
                count: storeTest.count,
                vx: storeVuex.state.count
            }
        },
        watch: {
            'storeTest.count': function (newVal, oldVal) {
                console.log('Home A: ', newVal);
                this.count = newVal;
            }
        },
        methods: {
            __eventOnMessage: function (m) {
                console.log('Home: __eventOnMessage = ', m);
            },
            send_eventBus: function () {
                const k = new Date().getTime();
                const channel = new BroadcastChannel(EVENT_BUS__);
                channel.postMessage(k);
            },
            update: function () {
                const k = new Date().getTime();
                this.count = k;
                storeTest.update(k);
            },
            update_vx: function () {
                const k = new Date().getTime();
                storeVuex.dispatch('update', k);
                //this.$store.commit('increment')
                console.log('Store Vuex: ', storeVuex.state.count);
                this.vx = storeVuex.state.count;
            }
        }
    }
</script>
