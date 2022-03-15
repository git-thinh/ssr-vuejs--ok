import { GlobalMethods } from './GlobalMethods.js';

export const __setupPages = {
    created: function (v) {
        GlobalMethods.methods.__created(v, GlobalMethods.methods);
    },
    mounted: function (v) {
    },
    destroyed: function (v) {
    }
}