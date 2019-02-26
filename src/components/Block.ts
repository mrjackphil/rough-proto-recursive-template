import Vue from "vue";

const block = Vue.component("Block", {
  render: function(createElement) {
    return createElement(this.$props.tag, {
      style: this.$props.styles,
      attrs: this.$props.attrs,
      on: this.$props.events,
    });
  },
  props: {
    type: {},
    tag: {},
    styles: {},
    attrs: {},
    events: {}
  }
});

export default block;
