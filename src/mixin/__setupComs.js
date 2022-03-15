import { GlobalMethods } from './GlobalMethods.js';

export const __setupComs = {
    created: function (v) {
    },
    mounted: function (v) {
        if (v) {
            const fns = Object.keys(GlobalMethods.methods);
            console.log(fns);

            //v.$data.eventBusId = this.guid();


        }
    },
    destroyed: function (v) {
    },
    //--------------------------------------------------------------------------
    guid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    event_register: function () {
        const bc = new BroadcastChannel(EVENT_BUS__);

    },
    event_sendBroadCast: function (name, data) {
        const bc = new BroadcastChannel(EVENT_BUS__);
        bc.postMessage({ id: this.eventBusId, name: name, data: data });
    }
}