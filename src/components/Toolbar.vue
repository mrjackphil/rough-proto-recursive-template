<template>
    <div>
        <ToolbarElement v-for="(el, i) in data" :key="i" :json="el"></ToolbarElement>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ToolbarElement from "./ToolbarElement.vue";

const toolbarJSONExample = [
  {
    type: "component",
    tag: "appup-avatar",
    "props-config": {
      src: "String", // Type is used to render Props Settings Form
      size: "Number",
      class: "List"
    },
    props: {
      // Used to render component on Page Editor when dropped
      src: "xyz.png",
      size: 80
    },
    "draggable-class": "col" // Where the destination is. Eg: Some components can be put only in col and some can be put only in form class
  },
  {
    type: "element",
    tag: "p",
    "props-config": {
      class: "List",
      title: "String",
      content: "HTML"
    },
    props: {
      class: "sample-para",
      content: "Hello Appup !"
    }
  }
];

@Component({ components: { ToolbarElement } })
export default class Toolbar extends Vue {
    data = toolbarJSONExample;
}
</script>

