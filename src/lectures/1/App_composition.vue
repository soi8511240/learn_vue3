<template>
	<div>
		<h2>반응형</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMesssage">Add message</button>
		<h2>일반</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMesssage">Add message</button>
	</div>
</template>

<script>
import { onUpdated, ref } from 'vue';

export default {
	setup() {
		const reactiveMessage = ref('반응형 메세지');
		let normalMessage = '일반 메세지';
		const addReactiveMesssage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		const addNormalMesssage = () => {
			normalMessage = normalMessage + '!';
			console.log(normalMessage);
		};

		onUpdated(() => {
			console.log('update component');
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMesssage,
			addNormalMesssage,
		};
	},
};
</script>
