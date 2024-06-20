<template>
	<div>
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	inheritAttrs: false,
};
</script>
<script setup>
const message = ref('message');
defineOptions({
	inheritAttrs: false,
});
</script>
<style lang="scss" scoped></style>
