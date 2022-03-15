import { reactive } from 'vue'
import { __config } from '../__config.js';
import { __broadcast } from './__broadcast.js';

export const storeTest = reactive({
    __bc: null,
    //------------------------------------
    count: 9,
    //------------------------------------
    updateCount(m) {
        if (m != null) {
            this.count = m.data;
            this.__bc = __broadcast(m, this.__bc);
        }
    }
})