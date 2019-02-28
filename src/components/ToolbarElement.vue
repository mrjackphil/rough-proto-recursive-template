<template>
    <div>
        <div>Type: {{json.name}}</div>
        <div>Tag: {{json.category}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: {ToolbarElement}})
export default class ToolbarElement extends Vue {
    @Prop() json: any = this.json;
}
</script>

