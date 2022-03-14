import { mixinGlobal } from './mixinGlobal'

export const mixinApp = {
    mixins: [mixinGlobal],
    created: function () { },
    mounted: function () { },
    destroyed: function () { },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}