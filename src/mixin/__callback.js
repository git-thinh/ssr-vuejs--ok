import _ from 'lodash';
import { reactive } from 'vue'

export const __callback = reactive({
    items: {},
    update: function (id, fn) {
        this.items[id] = fn;
    },
    clearAll: function () {
        this.items = {};
    },
    callNotIds: function (m, notIDs) {
        const items = this.items;
        let a = Object.keys(items);
        a = _.filter(a, o => items.hasOwnProperty(o) && typeof items[o] === 'function');
        if (notIDs != null && Array.isArray(notIDs) && notIDs.length > 0)
            a = _.filter(a, o => _.findIndex(notIDs, j => j === o) === -1);
        //console.log(a);

        const json = JSON.stringify(m);
        for (let i = 0; i < a.length; i++) {
            const o = JSON.parse(json), id = a[i];
            const fn = items[id];
            if (fn != null)
                setTimeout(function () { fn(o); }, 1);
        }
    }
});