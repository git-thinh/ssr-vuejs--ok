import { GlobalMethods } from './GlobalMethods.js'

export const MixinApp = {
    mixins: [GlobalMethods],
    created: function () {       
        if (window != null && window.__appInited != true) {
            window.__appInited = true;
            console.log('Mixin App: created ...');
            window.EVENT_BUS__ = 'EVENT_BUS';
            window.__eventBus = new BroadcastChannel(EVENT_BUS__);
            //window.__eventBus.onmessage = _self.__event_onMessage;
        }
    },
    mounted: function () {},
    destroyed: function () {}
}