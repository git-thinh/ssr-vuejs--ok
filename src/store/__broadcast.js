import { __config } from '../__config.js';
import { BroadcastChannel } from 'broadcast-channel';

export const __broadcast = function (m, bc) {
    let o = m;
    if (o == null) o = {};
    o.store_updated = true;

    let it = bc;
    if (it === null) it = new BroadcastChannel(__config.event_name);
    it.postMessage(o);

    return it;
}