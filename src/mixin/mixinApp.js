import { GlobalMethods } from './GlobalMethods.js'

export const MixinApp = {
    mixins: [GlobalMethods],
    created: function () {
        const v = this;
        if (window != null && window.__appInited != true) {
            window.__appInited = true;
            console.log('Mixin App: created ...');

            GlobalMethods.methods.__created(v, GlobalMethods.methods);
        }
    },
    mounted: function () {},
    destroyed: function () {}
}