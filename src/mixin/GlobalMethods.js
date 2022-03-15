import _ from 'lodash';
import { __config } from '../__config.js';
import { BroadcastChannel } from 'broadcast-channel';

export const GlobalMethods = {
    methods: {
        __created: function (v, methods) {
            const arrAll = Object.keys(v);
            const arrCopy = Object.keys(methods);
            //console.log(arrAll, arrCopy);
            arrCopy.forEach(key => {
                const notExist = _.findIndex(arrAll, o => o === key) === -1;
                if (notExist) v[key] = methods[key];
            });

            const __id = v.guid();
            v.__id = __id;

            // Event setup
            v.__events = ['*'];
            let bc = null;
            if (typeof v.__eventOnMessage === 'function') {
                bc = new BroadcastChannel(__config.event_name);
                bc.onmessage = v.__eventOnMessage;
            }
            v.__bc = bc;
        },
        __eventOnMessage: function (data) {
            console.log('Global: __eventOnMessage = ', data);
        },
        __eventSendMessage: function (data, name) {
            const v = this, bc = v.__bc;
            if(bc) bc.postMessage({ id: v.__id, name: name || '*', data: data });
        },
        //------------------------------------------------------
        guid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
}