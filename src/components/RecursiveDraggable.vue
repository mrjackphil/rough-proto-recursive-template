<template>
	<draggable class="drag-area" :list="childrens" :options="{group:{name: 'blocks'}}">
		<div class="compo" v-for="el in childrens" :key="el.name + String(Math.random())">
			<component v-if="el.type === 'component'" v-bind:is="el.name" v-bind="el" v-slot:default />
			<Plain v-if="el.type === 'element'" v-bind="refactorProps(el)" />
			<recursive-draggable :childrens="el.childrens" />
		</div>
	</draggable>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Block from "@/components/Block";
import Plain from "@/components/Plain";
// @ts-ignore
import draggable from "vuedraggable";

@Component({components:{Block, draggable, RecursiveDraggable, Plain}})
export default class RecursiveDraggable extends Vue {
	@Prop() childrens: [{name: string}] = this.childrens;

	refactorProps(el: any) {
		return {
			tag: el.tag,
			class: el.props.class,
			attrs: {
			},
			domProps: {
				innerHTML: el.props.content
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.compo {
	border: 1px solid green;
	margin: 1rem;
}
.drag-area {
	min-height: 50px;
	border: 1px dotted grey;
}
</style>

