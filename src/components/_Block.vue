<template>
	<div class="block"  v-bind:style="{backgroundColor: color}">
	</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class Block extends Vue {
	@Prop() color: string = this.color;
}
</script>


<style lang="scss" scoped>
.block {
	border: 1px solid white;
	padding: 1rem;
}

</style>
