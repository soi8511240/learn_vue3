<template>
	<button class="fancy-btn">
		<slot :fancy-message="fancyMessage">default slot</slot>
	</button>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const fancyMessage = ref('Fancy!');
		return { fancyMessage };
	},
};
</script>

<style lang="scss" scoped></style>
