import Vue from "vue";

const plain = Vue.component("plain", {
  render: function(createElement) {
    return createElement(this.$props.tag, {
      style: this.$props.styles,
      attrs: this.$props.attrs,
      on: this.$props.events,
      domProps: this.$props.domProps,
    });
  },
  props: {
    type: {},
    tag: {},
    styles: {},
    attrs: {},
    events: {},
    domProps: {}
  }
});

export default plain;
