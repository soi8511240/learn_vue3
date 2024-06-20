<template>
	<div>
		<input ref="inputRef" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
export default {
	components: {},
	setup() {
		const inputRef = ref('');
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});
		onMounted(() => {
			console.log('onMounted');
		});

		return { inputRef };
	},
};
</script>

<style lang="scss" scoped></style>
