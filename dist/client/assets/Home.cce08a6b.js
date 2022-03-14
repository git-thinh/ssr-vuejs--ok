import { s as storeTest } from "./index.57b66ef2.js";
import { S as Store, s as storeVuex } from "./Store.490b6839.js";
import _sfc_main$1 from "./Page-A.bac77446.js";
import _sfc_main$2 from "./Page-B.f6806cc6.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createVNode, F as Fragment } from "./vendor.5bf04fa6.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const __default__ = {
  data() {
    return {
      count: storeTest.count,
      vx: storeVuex.state.count
    };
  },
  mounted() {
  },
  watch: {
    "storeTest.count": function(newVal, oldVal) {
      console.log("Home A: ", newVal);
      this.count = newVal;
    }
  },
  methods: {
    update: function() {
      const k = new Date().getTime();
      this.count = k;
      storeTest.update(k);
    },
    update_vx: function() {
      const k = new Date().getTime();
      storeVuex.dispatch("update", k);
      console.log("Store Vuex: ", storeVuex.state.count);
      this.vx = storeVuex.state.count;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Home: " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.update && _ctx.update(...args))
        }, "update"),
        createBaseVNode("h1", null, "Store Vuex: " + toDisplayString(_ctx.vx), 1),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.update_vx && _ctx.update_vx(...args))
        }, "update vuex"),
        _hoisted_1,
        createVNode(_sfc_main$1),
        _hoisted_2,
        createVNode(_sfc_main$2),
        _hoisted_3,
        createVNode(Store)
      ], 64);
    };
  }
});
export { _sfc_main as default };
