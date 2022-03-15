<script setup>
    import { __setupComs } from '../mixin/__setupComs.js'
    import { storeTest } from '../store/storeTest.js'
</script>

<template>
    <h1>Page B: count = {{count}}</h1>
    <button @click="updateCount">Update Count</button>
    <button @click="send_eventBus">Send Event</button>
</template>

<script>
    export default {
        destroyed: function () { __setupComs.destroyed(this); },
        created: function () { __setupComs.created(this); },
        //--------------------------------------------------------
        data() {
            return {
                count: storeTest.count
            }
        },
        methods: {
            '*': function (m) {
                console.log('PageB.Vue: [*] = ', m.data);
            },
            'storeTest.count': function (m) {
                console.log('PageB.Vue: storeTest.count = ', m);
                this.count = m.data;
            },
            send_eventBus: function () {
                this.__eventSendMessage({
                    send_id: this.__id,
                    data: new Date().getTime()
                });
            },
            updateCount: function () {
                const k = new Date().getTime();
                this.count = k;
                storeTest.updateCount({
                    send_id: this.__id,
                    name: 'storeTest.count',
                    type: '',
                    data: k
                });
            }
        }
    }
</script>
