<template>
  <div id="app">
    <div class="toolbar">
      <draggable
        v-model="data"
        :options="{group:{name: 'blocks', put: false, pull: 'clone', revertClone: true}, sort: false}"
        :clone="addID"
        @start="drag=true"
        @end="drag=false"
      >
        <ToolbarElement v-for="(el, i) in data" :key="i" :json="el"></ToolbarElement>
        <!-- <component v-bind="el" v-bind:is="el.name" v-for="(el, i) in array" :key="el.name + i"></component> -->
      </draggable>
    </div>
    <div class="template">
      <draggable v-model="template" :options="{group:{name: 'blocks'}}">
        <recursive-draggable :childrens="template"></recursive-draggable>
      </draggable>
    </div>
    <div class="result">
      <pre>
			{{JSON.stringify(template, null, 2)}}
		</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import draggable from "vuedraggable";
import Block from "@/components/Block";
import RecursiveDraggable from "@/components/RecursiveDraggable.vue";
import ToolbarElement from "@/components/ToolbarElement.vue";

const toolbarJSONExample = [
  {
    name: "Avatar",
    icon: "md-image-icon",
    help: "Avatar component",
    category: "Component",
    item: {
      type: "component",
      tag: "appup-avatar",
      "props-config": {
        src: "String",
        size: "Number",
        class: "List"
      },
      props: {
        src: "xyz.png",
        size: 100
      }
    }
  },
  {
    name: "Text",
    icon: "md-text-icon",
    help: "Use paragraph to represent text",
    category: "Base",
    item: {
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
  },
  {
    name: "Code",
    icon: "md-text-icon",
    help: "Use paragraph to represent text",
    category: "Base",
    item: {
      type: "element",
      tag: "pre",
      "props-config": {
        class: "List",
        title: "String",
        content: "HTML"
      },
      props: {
        class: "sample-para",
        content: "That's how code can looks like !"
      }
    }
  }
];

const exampleData = [
  {
    type: "element",
    tag: "section",
    children: [
      {
        type: "element",
        tag: "div",
        attrs: {
          class: "row"
        },
        children: [
          {
            type: "element",
            tag: "div",
            attrs: {
              class: "col"
            },
            children: [
              {
                type: "component",
                tag: "appup-avatar",
                attrs: {
                  src: "xyz.png",
                  width: 50,
                  height: 50
                },
                events: {
                  click: "alert('clicked.')"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: "element",
    tag: "section",
    children: [
      {
        type: "element",
        tag: "div",
        attrs: {
          class: "row"
        },
        children: [
          {
            type: "element",
            tag: "div",
            attrs: {
              class: "col"
            },
            children: [
              {
                type: "element",
                tag: "p",
                attrs: {
                  class: "sample-para"
                },
                children: [
                  {
                    type: "text",
                    content: "Welcome message"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@Component({
  components: { Block, draggable, RecursiveDraggable, ToolbarElement }
})
export default class App extends Vue {
  array = [
    {
      name: "Block",
      tag: "div",
      styles: { background: "red", width: "100%", height: "50px" },
      attrs: { class: "test-name" },
      events: { click: () => alert("clickes") },
      childrens: [],
      category: true
    },
    {
      name: "Block",
      tag: "div",
      styles: { background: "blue", width: "100%", height: "50px" },
      childrens: [],
      category: true
    }
  ];
  template = [];
  data = toolbarJSONExample;

  addID(val: any) {
    return val.item;
  }
}
</script>


<style lang="scss">
#app {
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
}

.toolbar {
  width: 200px;
}

.template {
  flex: 1;
  border: 1px solid black;
  overflow: auto;
}

.template__drag {
  height: 100%;
}

.result {
  width: 200px;
}
</style>
