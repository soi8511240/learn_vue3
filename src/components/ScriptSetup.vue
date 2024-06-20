<template>
	<div class="container py-4">
		<div>{{ message }}</div>
		<button @click="msg">msg</button>
		<hr />
		<input type="text" v-model="input" />
		<br />
		<p>{{ input }}</p>
		<PostItem
			type="notice"
			title="title"
			content="content"
			:is-like="false"
		></PostItem
		><PostItem
			type="notice"
			title="title"
			content="content"
			:is-like="false"
		></PostItem
		><PostItem
			type="notice"
			title="title"
			content="content"
			:is-like="false"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefChild.vue';
import MyButton from './setup/MyButton.vue';

const message = 'what?';

const msg = () => {
	alert('msg');
};
const child = ref(null);
const input = ref('');

defineExpose({
	msg,
});

const res = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log('res: ', res);

async function callApi() {
	await axios('https://dummy.restapiexample.com/api/v1/employees').then(
		response => {
			console.log('response: ', response);
		},
	);
}
callApi();
// function callApi() {
// 	axios('https://dummy.restapiexample.com/api/v1/employees').then(
// 		response => {
// 			console.log('response: ', response);
// 		},
// 	);
// }
// callApi();
</script>
