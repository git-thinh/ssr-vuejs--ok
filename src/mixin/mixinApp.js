import { GlobalMethods } from './GlobalMethods.js'

export const MixinApp = {
    mixins: [GlobalMethods],
    created: function () {
        const v = this;
        if (window != null && window.__appInited != true) {
            window.__appInited = true;
            GlobalMethods.methods.__created(v, GlobalMethods.methods);

            console.log('Mixin App: created ...');
        }
    },
    mounted: function () {},
    destroyed: function () {}
}