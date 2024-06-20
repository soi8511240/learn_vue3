<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">Provide Inject Component</div>
			<div class="card-body">
				<button @click="count++">count++</button>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import Child from './Child.vue';
import { provide, ref, readonly } from 'vue';

export default {
	components: { Child },
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = appendMessage;
		};
		const count = ref(0);
		provide('static-message', staticMessage);
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);
		return { count };
	},
	mounted() {
		console.log('this.msg', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
