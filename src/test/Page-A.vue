<script setup>
    import { __setupComs } from '../mixin/__setupComs.js'
    import { storeTest } from '../store/storeTest.js'
</script>

<template>
    <h1>Page A: {{count}}</h1>
    <button @click="update">update</button>
    <button @click="send_eventBus">send_eventBus</button>
</template>

<script>
    export default {
        props: {
            msg: String
        },
        created: function () {
            __setupComs.created(this);
        },
        mounted: function () {
            __setupComs.mounted(this);

            const self = this;
            //console.log('Page A: mounted =', self);
            self.$nextTick(() => {});
        },
        destroyed: function () {
            __setupComs.destroyed(this);
        },
        data() {
            return {
                count: storeTest.count
            }
        },
        watch: {
            'storeTest.count': function (newVal, oldVal) {
                console.log('Page A: ', newVal);
                this.count = newVal;
            }
        },
        methods: {
            __eventOnMessage: function (m) {
                console.log('Page A: __eventOnMessage = ', m);
            },
            send_eventBus: function () {
                const k = new Date().getTime();
                this.__eventSendMessage(k);
            },
            update: function () {
                const k = new Date().getTime();
                this.count = k;
                storeTest.update(k);
            }
        }
    }
</script>
