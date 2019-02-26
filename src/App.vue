<template>
  <div id="app">
    <div class="toolbar">
      <draggable
        v-model="array"
        :options="{group:{name: 'blocks', put: false, pull: 'clone', revertClone: true}, sort: false}"
		:clone="addID"
        @start="drag=true"
        @end="drag=false"
      >
        <component v-bind="el.options" v-bind:is="el.name" v-for="el in array" :key="el.name + el.options.color"></component>
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
import Block from "@/components/Block.vue";
import RecursiveDraggable from '@/components/RecursiveDraggable.vue';

@Component({
  components: { Block, draggable, RecursiveDraggable }
})
export default class App extends Vue {
  array = [
	{ name: 'Block', options: { color: 'red' }, childrens: [], category: true },
	{ name: 'Block', options: { color: 'blue'}, childrens: [], category: true}
  ];
  template = [];

	addID(val: any) {
		return {name: 'block', options: val.options, childrens: []} ;
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
