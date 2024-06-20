<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			staticMessage: {{ staticMessage }} <br />
			message: {{ message }} <br />
			count: {{ count }} <br />
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		const staticMessage = inject('static-message', 'default message');
		const { message, updateMessage } = inject('message');
		updateMessage('Update Message');
		const count = inject('count');
		return { staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
