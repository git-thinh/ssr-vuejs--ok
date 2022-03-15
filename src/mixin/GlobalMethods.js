
export const GlobalMethods = {
    methods: {
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
}