import { B as Button } from "./button.43bf5a27.js";
import { _ as _export_sfc } from "./index.57b66ef2.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createVNode, w as withCtx, F as Fragment, g as createTextVNode } from "./vendor.5bf04fa6.js";
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  async setup() {
    let url = "";
    {
      const u = document.querySelector(".import-meta-url");
      if (u)
        url = u.textContent;
    }
    return {
      msg: "About",
      url
    };
  },
  components: {
    Button
  }
};
const _hoisted_1 = { class: "import-meta-url" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Common Button");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString($setup.msg), 1),
    createBaseVNode("p", _hoisted_1, toDisplayString($setup.url), 1),
    createVNode(_component_Button, null, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    })
  ], 64);
}
var About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-264b4497"]]);
export { About as default };
